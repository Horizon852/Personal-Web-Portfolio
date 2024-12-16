import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navigation from "./components/Navigation";
import project1 from "./assets/images/project1.jpg"
import project2 from "./assets/images/project2.png"
import project3 from "./assets/images/project3.png"



const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  
  

  

  return (
    <div>
      <Navigation />
      {/* Section: Home */}
      <div id="home" className="section home">
        <h1 className="welcome-text" data-aos="fade-up">
          Hello, I'm
        </h1>
        <h2 className="name" data-aos="fade-right">
          Supachai Butsua
        </h2>
        <div className="profile-circle" data-aos="zoom-in"></div>
      </div>

      {/* Section: About */}
      <section id="about" className="about-section" data-aos="fade-left">
        <h1 className="About">About Me</h1>
        <div className="about-content">
          <img src="./new.jpg" alt="My Profile" className="about-image" />
          <div className="about-text">
            <p>
              "I am a dedicated and creative web developer who enjoys solving problems and bringing ideas to life through code. Beyond my passion for coding, I love exploring new technologies and continuously improving my skills."
            </p>
            <button
              className="contact-button"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>



      {/* Section: Edution */}
      <section id="education" className="education-section" data-aos="fade-left">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {/* Timeline Item 1 */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content left">
            <h3>Computer Engineering</h3>
            <p className="university">Srinakharinwirot university</p>
            <span className="timeline-date">2022 -  2026</span>
          </div>
        </div>
        
        {/* Timeline Item 2 */}
        <div className="timeline-item2">
          <div className="timeline-dot2"></div>
          <div className="timeline-content right">
            <h3>Science and Math</h3>
            <p className="school">Satit valaya alongkorn</p>
            <span className="timeline-date">2019 - 2022</span>
          </div>
        </div>
      </div>
    </section>



    {/* Section: Project*/}
    <section id="projects" className="projects-section">
  <h2 className="projects-title">Projects</h2>
  <div className="projects-container">
    {/* Project 1 */}
    <div className="project-card" data-aos="zoom-in">
    <img src={project1} alt="Dev Portfolio" className="project-image" />


      <div className="project-details">
        <h3 className="project-title">Personal Portfolio</h3>
        <ul>
          <li>Developer Portfolio Website made in React</li>
          <li>Fully customisable and dynamic</li>
          <li>Dark Mode Support</li>
        </ul>
        <div className="project-links">
        <a
            href="https://github.com/zunzureal/SafePassage"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="project-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>Tailwind</span>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card" data-aos="zoom-in">
    <img src={project2} alt="SafePassage" className="project-image" />
      <div className="project-details">
        <h3 className="project-title">Safe Passage</h3>
        <ul>
          <li>Purpose:
          This web application was developed to address security concerns within residential areas by tracking individuals entering and exiting the premises.</li>
          <li>Key Features:
              QR Code Generation: Generates unique QR codes for residents, delivery personnel, and security guards.
              QR Code Scanning: Scans the generated QR code every time someone passes through the main gate.</li>
          {/* <li>Deployed using Heroku</li> */}
        </ul>
        <div className="project-links">
        <a
            href="https://github.com/zunzureal/SafePassage"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="project-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>NodeJS</span>
          <span>Tailwind</span>
        </div>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card" data-aos="zoom-in">
    <img src={project3} alt="SafePassage" className="project-image" />
      <div className="project-details">
        <h3 className="project-title">Sweet Sips</h3>
        <ul>
          <li>Purpose:
          A fully functional E-commerce platform for selling bakery items such as bread, cakes, ice cream, and beverages.</li>
          <li>Key Features:
Product Display: Users can browse and search for products easily.
Shopping Cart: Allows users to add or remove items from their cart dynamically.</li>
        </ul>
        <div className="project-links">
        <a
            href="https://github.com/pay501/cpe231-web"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="project-tags">
          <span>React</span>
          <span>JavaScript</span>
          <span>NodeJS</span>
          <span>Tailwind</span>
        </div>
      </div>
    </div>
  </div>
</section>











      {/* Section: Contact */}
      <section id="contact" className="contact-section" data-aos="fade-left">
        <h1 className="Contact">Contact Me</h1>
        <div className="contact-container">
          <div className="contact-grid">
            {/* Email */}
            <div className="contact-item" data-aos="zoom-in">
              <h2 className="nihao">Email</h2>
              <p>supachaibutsua@gmail.com</p>
              <a href="mailto:supachaibutsua@gmail.com">Email Me </a>
            </div>

            {/* Phone */}
            <div className="contact-item" data-aos="zoom-in">
              <h2 className="nihao">Phone</h2>
              <p>0952523917</p>
              <a href="tel:0952523917">Phone Me </a>
            </div>

            {/* Instagram */}
            <div className="contact-item" data-aos="zoom-in">
              <h2 className="nihao">Instagram</h2>
              <p>punwenin</p>
              <a href="https://instagram.com/punwenin" target="_blank" rel="noopener noreferrer">
                Follow Me 
              </a>
            </div>

            {/* Github */}
            <div className="contact-item" data-aos="zoom-in">
              <h2 className="nihao">Github</h2>
              <p>Horizon852</p>
              <a href="https://github.com/Horizon852" target="_blank" rel="noopener noreferrer">
                Add Me
              </a>
            </div>

            {/* Facebook */}
            <div className="contact-item" data-aos="zoom-in">
              <h2 className="nihao">Facebook</h2>
              <p>Supachai Butsua</p>
              <a href="https://facebook.com/supachai.butsua" target="_blank" rel="noopener noreferrer">
                Add Me 
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-item" data-aos="zoom-in">
              <h2 className="nihao">LinkedIn</h2>
              <p>Supachai Butsua</p>
              <a href="https://linkedin.com/in/supachai-butsua" target="_blank" rel="noopener noreferrer">
                Contact Me 
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
