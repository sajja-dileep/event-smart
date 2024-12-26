import React from 'react';
import styles from './user.module.css';

const User = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContent}>
          <a href="#" className={styles.navbarBrand}>
            <img
              src="./images/icons8-event-management-80.png"
              alt="Logo"
            />
            Event-Management
          </a>
          <div className={styles.searchAndLogin}>
            <input
              type="search"
              placeholder="Search"
            />
            <button className={styles.button}>
              <a href="#" className={styles.buttonLink}>
                Login
              </a>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Text */}
      <div className={styles.mainText}>
        <h1 className={styles.mainTextTitle}>Everything</h1>
        <h2 className={styles.mainTextSubtitle}>For your events in one place</h2>
      </div>
      <hr className={styles.hrStyle} />

      {/* Cards */}
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img
            src="./images/icons8-event-50.png"
            alt="Service"
            className={styles.cardImgTop}
          />
          <span className={styles.cardText}>Hire-Service</span>
        </div>
        <div className={styles.card}>
          <img
            src="./images/icons8-buy-50.png"
            alt="Buy"
            className={styles.cardImgTop}
          />
          <span className={styles.cardText}>Buy-for-my-event</span>
        </div>
        <div className={styles.card}>
          <img
            src="./images/icons8-rent-50.png"
            alt="Rent"
            className={styles.cardImgTop}
          />
          <span className={styles.cardText}>Rent-for-my-event</span>
        </div>
        <div className={styles.card}>
          <img
            src="./images/icons8-plan-50.png"
            alt="Plan"
            className={styles.cardImgTop}
          />
          <span className={styles.cardText}>Plan-my-event</span>
        </div>
      </div>
    </div>
  );
};


export default User;
