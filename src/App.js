import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FrontPage from './pages/frontPage';
import Navbar from './components/navbar';

function App() {
  return (
   <>
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element={<FrontPage/>}/>

      </Routes>

    </BrowserRouter>
   </>
  );
}

export default App;
