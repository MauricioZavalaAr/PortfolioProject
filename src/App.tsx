import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import 'Routes' instead of 'Switch'
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Header />
        <div className="content">
        <Routes> {/* Use 'Routes' instead of 'Switch' */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        </div>
      </div>
      
    </Router>
  );
}

export default App;