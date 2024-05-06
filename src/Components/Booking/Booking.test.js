import { getAllByRole, render, screen, fireEvent } from "@testing-library/react";
import {BookingPage, initializeTimes} from './Booking';
import {updateTimes} from '../../App';
import { MemoryRouter } from "react-router-dom";


test('Renders the BookingForm heading', () => {
    render(
        <MemoryRouter>
        <BookingPage/>
        </MemoryRouter>
    );
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})

test('Initialize times creates correct times', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(
        ['17:00', '17:30', '18:00', '18:30', '19:00',
            '19:30', '20:00', '20:30', '21:00',
            '21:30',  '22:00']
    );
})

test('updateTimes returns provided time', () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const dateField = screen.getByLabelText('Choose date');
    fireEvent.change(dateField, {target: {value: "2024-05-17"}});

    const timeSelector = screen.getByLabelText('Choose time');
    const options = screen.getAllByRole('option', {container: timeSelector});
    expect(options).toHaveLength(7);
    expect(options[0]).toHaveTextContent('17:00')
    expect(options[1]).toHaveTextContent('19:00')
    expect(options[2]).toHaveTextContent('19:30')
    expect(options[3]).toHaveTextContent('20:30')
    expect(options[4]).toHaveTextContent('21:00')
    expect(options[5]).toHaveTextContent('21:30')
    expect(options[6]).toHaveTextContent('22:00')
})