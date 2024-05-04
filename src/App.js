import './App.scss';
import Header from './Components/Header';
import HomePage from './Components/Homepage';
import Footer from './Components/Footer';
import BookingPage from './Components/Booking'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="reservations" element={<BookingPage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
