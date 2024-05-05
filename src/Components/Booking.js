import './booking.scss'
import {useState} from 'react'

function BookingPage (props) {
    return (
        <section class="row">
            <div class="row-content">
                <BookingForm
                    availableTimes = {props.availableTimes}
                    setAvailableTimes = {props.setAvailableTimes}
                />
            </div>
        </section>
    )
}

function BookingForm(props) {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState();

    const changeDate = (e) => {
        props.setAvailableTimes(e.target.data)
        setDate(e.target.value)
    }

    return (
        <form>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={changeDate}
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
                        props.availableTimes.map(
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
            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default BookingPage;