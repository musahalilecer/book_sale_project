import React from "react";
import "../style/Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate();

  const navigateAddBook = () => {
    navigate('/create_book', )
  }

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
            <h1>Jane Doe</h1>
            <p>Book Enthusiast | Premium Member</p>
          </div>
        </div>
      </header>
      <main className="profile-content">
        <section className="profile-section">
          <h2>Account Information</h2>
          <ul>
            <li><strong>Email:</strong> jane.doe@example.com</li>
            <li><strong>Phone:</strong> +1 234 567 890</li>
            <li><strong>Address:</strong> 123 Book Street, Bibliophile City, USA</li>
          </ul>
        </section>

        <section className="profile-section">
          <h2>Order History</h2>
          <ul className="order-list">
            <li>
              <strong>Order #12345</strong> - "The Great Gatsby" - $19.99 - <span>Delivered</span>
            </li>
            <li>
              <strong>Order #12346</strong> - "To Kill a Mockingbird" - $14.99 - <span>Delivered</span>
            </li>
            <li>
              <strong>Order #12347</strong> - "1984" - $12.99 - <span>In Transit</span>
            </li>
          </ul>
        </section>

        <section className="profile-section">
          <h2>Wishlist</h2>
          <ul className="wishlist">
            <li>"Pride and Prejudice" by Jane Austen</li>
            <li>"The Catcher in the Rye" by J.D. Salinger</li>
            <li>"Moby Dick" by Herman Melville</li>
          </ul>
        </section>

        <section className="profile-section">
          <h2>Membership Details</h2>
          <p>
            <strong>Membership Type:</strong> Premium Member<br />
            <strong>Renewal Date:</strong> 2025-01-15
          </p>
        </section>
        <button className="btn btn-primary" onClick={navigateAddBook}>Adding Book</button>
      </main>
    </div>
  );
};

export default Profile;

