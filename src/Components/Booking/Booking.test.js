import { getAllByRole, render, screen, fireEvent, act, waitFor,
         queryByText } from "@testing-library/react";
import {BookingPage, initializeTimes} from './Booking';
import {updateTimes} from '../../App';
import { MemoryRouter } from "react-router-dom";
import { submitAPI } from "../../API/api";


test('Renders the form elements', () => {
    render(<MemoryRouter> <BookingPage/> </MemoryRouter>);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
})

test('Initialize times creates correct times', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes).toEqual(
        ['17:00', '17:30', '18:00', '18:30', '19:00',
            '19:30', '20:00', '20:30', '21:00',
            '21:30',  '22:00']
    );
})


test('updateTimes returns provided time', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const dateField = screen.getByLabelText('Choose date');
    act(() => {
        fireEvent.change(dateField, {target: {value: "2024-05-17"}})
    });
    await new Promise((r) => setTimeout(r, 2000));

    const timeSelector = screen.getByLabelText('Choose time');
    const options = screen.getAllByRole('option', {container: timeSelector});
    expect(options[0]).toHaveTextContent('17:00')
    expect(options[1]).toHaveTextContent('18:00')
    expect(options[2]).toHaveTextContent('18:30')
    expect(options[3]).toHaveTextContent('19:00')
    expect(options[4]).toHaveTextContent('20:30')

    expect(screen.queryByText('17:30')).toBeNull();
    expect(screen.queryByText('19:30')).toBeNull();
    expect(screen.queryByText('20:00')).toBeNull();
    expect(screen.queryByText('21:00')).toBeNull();
    expect(screen.queryByText('21:30')).toBeNull();
    expect(screen.queryByText('22:00')).toBeNull();
})

test('Empty name is rejected', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const nameField = screen.getByLabelText('Name');
    act(() => {
        fireEvent.change(nameField, {target: {value: ''}})
        fireEvent.focus(nameField);
        fireEvent.blur(nameField);
    });
    await new Promise((r) => setTimeout(r, 500));

    const errorElement = screen.getByText('You must provide a name');
    expect(errorElement).toBeInTheDocument();
});

test('Accepts nonempty names', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const nameField = screen.getByLabelText('Name');
    act(() => {
        fireEvent.change(nameField, {target: {value: 'Name'}});
        fireEvent.focus(nameField);
        fireEvent.blur(nameField);
    });
    await new Promise((r) => setTimeout(r, 500));
    expect(screen.queryByText('You must provide a name')).toBeNull();

});

test('Date must be set', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const dateField = screen.getByLabelText('Choose date');
    act(() => {
        fireEvent.focus(dateField);
        fireEvent.blur(dateField);
    });
    await new Promise((r) => setTimeout(r, 500));

    const errorElement = screen.getByText('You must pick a date');
    expect(errorElement).toBeInTheDocument();
});

test('Accepts a valid date', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const dateField = screen.getByLabelText('Choose date');
    act(() => {
        fireEvent.focus(dateField);
        fireEvent.blur(dateField);
        fireEvent.change(dateField, {target: {value: '2024-05-07'}})
    });
    await new Promise((r) => setTimeout(r, 500));
    expect(screen.queryByText('You must pick a date')).toBeNull();
});


test('Time must be set', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const timeField = screen.getByLabelText('Choose time');
    act(() => {
        fireEvent.focus(timeField);
        fireEvent.blur(timeField);
    });
    await new Promise((r) => setTimeout(r, 500));

    const errorElement = screen.getByText('You must pick a time');
    expect(errorElement).toBeInTheDocument();
});

test('No time error message if time set', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const timeField = screen.getByLabelText('Choose time');
    act(() => {
        fireEvent.focus(timeField);
        fireEvent.blur(timeField);
        fireEvent.change(timeField, {target: {value: '17:00'}});
    });
    await new Promise((r) => setTimeout(r, 500));

    const errorElement = screen.queryByText('You must pick a time');
    expect(screen.queryByText('You must pick a time')).toBeNull();
});


test('Invalid numbers number of guests inputs not accepted', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const guestsField = screen.getByLabelText('Number of guests');
    const errorText = 'You must provide a number between 1 and 10';
    const timeDelay = 500;

    const setValue = (v) => {act(() => {
            fireEvent.change(guestsField, {target: {value: v}})  });
    };
    const testErrorPresent = () => {
        const errorElement = screen.getByText(errorText);
        expect(errorElement).toBeInTheDocument();
    };
    const testErrorNotPresent = () => {
        const errorElement = screen.getByText(errorText);
        expect(errorElement).toBeNull();
    };

    act(() => {
        fireEvent.focus(guestsField);
        fireEvent.blur(guestsField);
    });
    setValue(0);
    await new Promise((r) => setTimeout(r, timeDelay));
    testErrorPresent();

    setValue(15);
    await new Promise((r) => setTimeout(r, timeDelay));
    testErrorPresent();

    setValue(-2);
    await new Promise((r) => setTimeout(r, timeDelay));
    testErrorPresent();

    setValue(2.5);
    await new Promise((r) => setTimeout(r, timeDelay));
    testErrorPresent();

    setValue('ee');
    await new Promise((r) => setTimeout(r, timeDelay));
    testErrorPresent();
});

test('Value number of  guests accepted', async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);
    const guestsField = screen.getByLabelText('Number of guests');
    act(() => { fireEvent.change(guestsField, {target: {value: 2}}) });
    await new Promise((r) => setTimeout(r, 500));
    expect(
        screen.queryByText('You must provide a number between 1 and 10')
    ).toBeNull();
});

test("Submit button is not disabled with valid input", async () => {
    render(<MemoryRouter><BookingPage/></MemoryRouter>);

    const nameField = screen.getByLabelText('Name');
    const dateField = screen.getByLabelText('Choose date');
    const timeField = screen.getByLabelText('Choose time');
    const guestsField = screen.getByLabelText('Number of guests');
    const occasionField = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole("button", {type: "submit"})

    act(() => {
        fireEvent.change(nameField, {target: {value: ''}})
        fireEvent.focus(nameField);
        fireEvent.blur(nameField);

        fireEvent.change(dateField, '2024-05-17');
        fireEvent.focus(dateField);
        fireEvent.blur(dateField);

        fireEvent.change(timeField, '17:00');
        fireEvent.focus(timeField);
        fireEvent.blur(timeField);

        fireEvent.change(guestsField, 2)
        fireEvent.focus(guestsField);
        fireEvent.blur(guestsField);

        fireEvent.change(occasionField, 'Birthday')
    });
    await new Promise((r) => setTimeout(r, 500));
    expect(submitButton.getAttribute('disabled')).toBe("");
    act(() => {fireEvent.click(submitButton)});
  });

test('SubmitAPI returns true', async () => {
    const dataToSubmit = {
        name: 'Name',
        date: '2024-05-17',
        time: '17:00',
        guests: 3,
        occasion: 'Birthday'
    };

    await expect(submitAPI(dataToSubmit)).resolves.toBe(true);
})