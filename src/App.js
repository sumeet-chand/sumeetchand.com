import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import Biography from './pages/Biography';
import Books from './pages/Books';
import News from './pages/News';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import './App.css';

  

function App() {

  const [darkMode, setDarkMode] = useState(false); // state for dark mode
  const handleToggleDarkMode = () => {setDarkMode(prev => !prev)}; // function to toggle dark mode

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <div className="wrapper">
        <Header 
        onToggleDarkMode={handleToggleDarkMode}
          darkMode={darkMode}
        />
        <div className="main">
          <div className="column1"></div>
          <div className="column2">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<Books />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <div className="column3"></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;