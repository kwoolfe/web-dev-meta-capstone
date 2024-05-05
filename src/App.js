import './App.scss';
import Header from './Components/Header';
import HomePage from './Components/Homepage';
import Footer from './Components/Footer';
import BookingPage from './Components/Booking'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useReducer} from 'react'

function initializeTimes () {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}
function updateTimes (prev_times, date) {
  return prev_times;
}

function App() {

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes, initializeTimes()
  );

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="reservations" element={
          <BookingPage
            availableTimes = {availableTimes}
            setAvailableTimes = {setAvailableTimes}/>
        }/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export {initializeTimes, updateTimes};
export default App;
