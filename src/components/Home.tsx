
// Header.tsx
import React from 'react'
import '../css/Home.css'; // Import your Contact component CSS file
const Home = () => {
  return (
    <section className="home">
      {/* <h1>Welcome to Mauricio Zavala Portfolio</h1>
      <p>Business strategy</p>
      <p>Project manager</p>
      <p>Continuous improvement</p>
      <p>Data analysis</p>
      <p>Full Stack Developer</p> */}
<div className="container text-center">
  <h1>Welcome to Mauricio Zavala's Portfolio</h1>
  <div className="star">
    <div className="skill-circle">
      <p>Business Strategy</p>
    </div>
    <div className="skill-circle">
      <p>Project Manager</p>
    </div>
    <div className="skill-circle">
      <p>Continuous Improvement</p>
    </div>
    <div className="skill-circle">
      <p>Data Analysis</p>
    </div>
    <div className="skill-circle">
      <p>Full Stack Developer</p>
    </div>
  </div>
</div>
      {/* Add your content here */}
    </section>
  )
}

export default Home;
