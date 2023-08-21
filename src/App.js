import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
