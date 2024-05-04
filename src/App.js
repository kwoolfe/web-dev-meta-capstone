import './App.scss';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
