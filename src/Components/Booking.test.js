import { render, screen } from "@testing-library/react";
import BookingPage from './Booking';
import {initializeTimes, updateTimes} from '../App';


test('Renders the BookingForm heading', () => {
    render(
        <BookingPage
            availableTimes = {['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
        />
    );
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

test('Initialize times creates correct times', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(
        ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
    );
})

test('updateTimes returns provided time', () => {
    const initialTimes = initializeTimes();
    const updatedTimes = updateTimes(initialTimes, null);
    expect(updatedTimes).toEqual(initialTimes);
})