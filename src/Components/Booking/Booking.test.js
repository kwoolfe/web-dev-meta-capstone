import { render, screen } from "@testing-library/react";
import {BookingPage, initializeTimes} from './Booking';
import {updateTimes} from '../../App';


test('Renders the BookingForm heading', () => {
    render(
        <BookingPage/>
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
    render(<BookingPage/>);
    const dateField = screen.getByTestId("res-date-input");
    fireEvent.change(dateField, {target: {value: "2024-05-17"}});
})