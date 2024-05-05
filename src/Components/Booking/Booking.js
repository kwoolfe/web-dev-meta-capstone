import './booking.scss'
import {useState, useReducer, useEffect} from 'react'
import { fetchAPI } from '../../API/api';

function initializeTimes () {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
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
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState();
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState();
    const [availableTimes, setAvailableTimes] = useState(
        initializeTimes()
    );


    useEffect(() => {
        fetchAPI(date)
        .then(data => setAvailableTimes(data))
        .then(console.log(availableTimes));
    }, [date]);


    return (
        <>
        <h3>Book Now</h3>
        <form>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date.toISOString().slice(0, 10)}
                    onChange={(e)=>setDate(new Date(e.target.value))}
                />
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time "
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {
                        availableTimes.map(
                           (time) => (<option>{time}</option>)
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


export default BookingPage;