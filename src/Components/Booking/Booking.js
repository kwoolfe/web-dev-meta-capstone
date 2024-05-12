import './booking.scss'
import {useState, useEffect} from 'react'
import { fetchAPI, submitAPI } from '../../API/api';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import {useFormik} from 'formik';

function initializeTimes () {
    return ['17:00', '17:30', '18:00', '18:30', '19:00',
            '19:30', '20:00', '20:30', '21:00',
            '21:30',  '22:00'];
}


function BookingPage (props) {

    return (
        <section className="row booking">
            <div className="row-content booking">
                <h1 className="booking">Reserve a table</h1>
                <h2 className="booking">Little Lemon Chicago</h2>
                <div id="booking-form-box" className="booking">
                    <BookingForm />
                </div>
            </div>
        </section>
    )
}

function BookingForm(props) {
    const guests_error_message = "You must provide a number between 1 and 10"
    const formik = useFormik({
        initialValues: {
            name: "",
            date: '',
            time: undefined,
            guests: undefined,
            occasion: undefined,
        },
        onSubmit: (values) => {},
        validationSchema: Yup.object({
            name: Yup.string().required("You must provide a name"),
            date: Yup.date().required("You must pick a date"),
            time: Yup.string().required("You must pick a time"),
            guests: Yup
                .number(guests_error_message)
                .integer(guests_error_message)
                .required(guests_error_message)
                .min(1, guests_error_message)
                .max(10, guests_error_message),
            occasion: Yup.string().optional()
        })
    });

    const [availableTimes, setAvailableTimes] = useState(
        initializeTimes()
    );
    const [failedToSubmit, setFailedToSubmit] = useState()
    const [submitted, setSubmitted] = useState()
    const [dateChanged, setDateChanged] = useState()

    useEffect(() => {
        if (dateChanged) {
            fetchAPI(formik.values.date)
            .then(data => setAvailableTimes(data));
            setDateChanged(false);
        }
    }, [dateChanged, formik.values.date]);


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
    }, [submitted, navigate]);

    return (
        <>
        <form className="booking" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="res-name">Name</label>
                <input
                    id="res-name"
                    name="name"
                    placeholder='Name for the booking'
                    value={formik.values.name}
                    onChange = {formik.handleChange}
                    onBlur = {formik.handleBlur}
                />
                {(formik.errors.name && formik.touched.name)
                 ? <div className="form-error" test-id="name-error">
                        {formik.errors.name}
                    </div>
                 : null}
            </div>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    data-test-id="res-date-input"
                    value={formik.values.date}
                    onBlur={formik.handleBlur}
                    name='date'
                    onChange={ (e) => {
                        setDateChanged(true);
                        formik.handleChange(e);
                    }}
                />
                {(formik.errors.date && formik.touched.date)
                  ? <div className="form-error">{formik.errors.date}</div>
                  : null}
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    name="time"
                    type="string"
                    placeholder="Select time to book"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option value="">Select a time</option>
                {
                    availableTimes.map(
                        (time) => (<option key={time} value={time}>{time}</option>)
                    )
                }
                </select>
                {((formik.errors.time || formik.values.time === "")
                   && formik.touched.time)
                  ? <div className="form-error">
                        {formik.errors.time}
                    </div>
                  : null}
            </div>
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="Select number of guests"
                    id="guests"
                    min={1}
                    max={10}
                    value={formik.values.guests}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {(formik.errors.guests && formik.touched.guests)
                  ? <div className="form-error">{formik.errors.guests}</div>
                  : null}
            </div>
            <div>
                <div>
                <label htmlFor="occasion" id="occasion-label">Occasion</label> 
                <p id="occasion-optional">(Optional)</p>
                </div>
                <select
                    id="occasion"
                    name="occasion"
                    value={formik.values.occasion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                >
                    <option></option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                {(formik.errors.occasion && formik.touched.occasion)
                  ? <div className="form-error">{formik.errors.occasion}</div>
                  : null}
            </div>
            <input
                id="submit-button"
                test-id="submit-button"
                type="submit"
                value="Make Your reservation"
                disabled={
                    (formik.touched.name === undefined)
                    || (formik.touched.guests === undefined)
                    || (formik.touched.date === undefined)
                    || (formik.touched.time === undefined)
                    || (formik.errors.name)
                    || (formik.errors.guests)
                    || (formik.errors.time)
                    || (formik.errors.date)
                    || (formik.errors.occasion)
                }
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

export {BookingPage, ConfirmedBooking, initializeTimes};