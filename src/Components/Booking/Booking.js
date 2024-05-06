import './booking.scss'
import {useState, useEffect} from 'react'
import { fetchAPI, submitAPI } from '../../API/api';
import {useNavigate} from 'react-router-dom';

function initializeTimes () {
    return ['17:00', '17:30', '18:00', '18:30', '19:00',
            '19:30', '20:00', '20:30', '21:00',
            '21:30',  '22:00'];
}


function BookingPage (props) {

    return (
        <section className="row">
            <div className="row-content">
                <h1>Reserve a table</h1>
                <h2>Little Lemon Chicage</h2>
                <div id="booking-form-box">
                    <BookingForm />
                </div>
            </div>
        </section>
    )
}

function BookingForm(props) {
    const [date, setDate] = useState();
    const [dateChanged, setDateChanged] = useState(false)
    const [time, setTime] = useState();
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState();
    const [availableTimes, setAvailableTimes] = useState(
        initializeTimes()
    );
    const [failedToSubmit, setFailedToSubmit] = useState()
    const [submitted, setSubmitted] = useState()


    const handleDate = (e) => {
        setDateChanged(true);
        setDate(new Date(e.target.value));
    };

    useEffect(() => {
        if (dateChanged) {
            fetchAPI(date)
            .then(data => setAvailableTimes(data))
        }
    }, [date]);


    const handleSubmit = (e) => {
        e.preventDefault();
        submitAPI(e).then((value) => {setSubmitted(value)});
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (submitted) {
            navigate('/booking-confirmed')
        } else {
            if (submitted !== undefined) {
                setFailedToSubmit(true)
            }
        }
    }, [submitted])

    return (
        <>
        <h3>Book Now</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    data-test-id="res-date-input"
                    value={
                        dateChanged ?
                        date.toISOString().slice(0, 10) :
                        ''
                    }
                    onChange={handleDate}
                />
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {
                        availableTimes.map(
                           (time) => (<option key={time}>{time}</option>)
                        )
                    }
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
            </div>
            <input
                id="submit-buttom"
                type="submit"
                value="Make Your reservation"
            />
            <p id="submit-failed-p">{
                failedToSubmit ? 'Failed to submit reservation' : ''
            }</p>
        </form>
        </>
    )
}


function ConfirmedBooking (props) {
    return (
        <>
            <h2>Your booking is confirmed</h2>
        </>
    );
}

export {BookingPage, ConfirmedBooking};