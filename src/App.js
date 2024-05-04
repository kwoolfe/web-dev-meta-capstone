import './App.scss';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import BookingPage from './Components/Booking'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="reservations" element={<BookingPage/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
