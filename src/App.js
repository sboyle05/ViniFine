import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './tailwind.css';
import './App.css';
import LandingPage from './components/landingPage/landingPage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Services from './components/services/services';
import Navbar from './components/navbar/navbar';

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </Router>

  );
}


export default App;
