// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import linkedinlogo from '../images/linkedinbwlogo.png';
import githublogo from '../images/githublogo.png';
import cvLogo from '../images/cvlogo.png';
import cvMza from '../pdf/CV-MauricioZavala.pdf';
import '../css/Header.css'

function Header() {
  const linkedinURL = 'https://www.linkedin.com/in/mauricio-zavala';
  const githubURL = 'https://github.com/MauricioZavalaAr?tab=repositories';

  return (
    <header>
      <nav>
      <div className="social-links">
               
        </div>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <img src={linkedinlogo} alt="LinkedIn" className="social-icon" width={'30px'} height={'30px'}/>
        </a></li>
          <li><a href={githubURL} target="_blank" rel="noopener noreferrer">
          <img src={githublogo} alt="GitHub" className="social-icon" width={'30px'} height={'30px'} />
        </a></li>
        <li><a href={cvMza} download> 
          <img src={cvLogo} alt="Download PDF" className="social-icon" width={'30px'} height={'30px'} />
        </a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;