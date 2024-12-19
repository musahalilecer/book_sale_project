import React from "react";
import "../style/Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <header className="profile-header">
        <div className="profile-container">
          <div className="profile-image">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="User Profile"
            />
          </div>
          <div className="profile-info">
            <h1>John Doe</h1>
            <p>Web Developer | Tech Enthusiast</p>
          </div>
        </div>
      </header>
      <main className="profile-content">
        <section className="profile-section">
          <h2>About Me</h2>
          <p>
            I am a passionate web developer with over 5 years of experience in creating responsive and engaging web applications. I specialize in modern JavaScript frameworks like React and Node.js.
          </p>
        </section>
        <section className="profile-section">
          <h2>Contact Information</h2>
          <ul>
            <li>Email: john.doe@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Location: New York, USA</li>
          </ul>
        </section>
        <section className="profile-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML & CSS</li>
            <li>MongoDB</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Profile;
