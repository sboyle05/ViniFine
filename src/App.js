import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './tailwind.css';
import './App.css';
import LandingPage from './components/landingPage/landingPage';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Services from './components/services/services';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
    <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://d2e39dj8x3uchh.cloudfront.net/vinifine.mp4"
    type="video/mp4"
  >
    Your browser does not support the video tag.
  </video>
    <Router>
      <section className="relative overflow-hidden h-screen w-full">
        <Navbar />
        <div className="relative z-10">
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </div>
      </section>
    </Router>
    </>
  );
}

export default App;
