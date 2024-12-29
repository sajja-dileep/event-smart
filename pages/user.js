import React, { useState } from 'react';
import styles from './user.module.css';
import { useRouter } from 'next/router';
import Hire from './Hire-Service.js';
import Buy from './Buy-for-my-event.js';
import Rent from './Rent-for-my-event.js';
import Plan from './plan-event.js';

const User = () => {
  const router = useRouter();
  const { me } = router.query;
  const [activeComponent, setActiveComponent] = useState(null);

  const components = {
    hire: <Hire />,
    buy: <Buy />,
    rent: <Rent />,
    plan: <Plan />,
  };

  const handleCardClick = (component) => {
 
    setActiveComponent((prevComponent) => (prevComponent === component ? null : component));
  };

  return (
    <div>
     
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
            <input type="search" placeholder="Search" />
            <button className={styles.button}>
              <a href="#" className={styles.buttonLink}>
                Login
              </a>
            </button>
          </div>
        </div>
      </nav>


      <div className={styles.mainText}>
        <h1 className={styles.mainTextTitle}>Everything</h1>
        <h2 className={styles.mainTextSubtitle}>For your events in one place</h2>
      </div>
      <hr className={styles.hrStyle} />

     
      <div className={styles.cardsContainer}>
        <button onClick={() => handleCardClick('hire')}>
          <div className={styles.card}>
            <img
              src="./images/icons8-event-50.png"
              alt="Service"
              className={styles.cardImgTop}
            />
            <span className={styles.cardText}>Hire-Service</span>
          </div>
        </button>
        <button onClick={() => handleCardClick('buy')}>
          <div className={styles.card}>
            <img
              src="./images/icons8-buy-50.png"
              alt="Buy"
              className={styles.cardImgTop}
            />
            <span className={styles.cardText}>Buy-for-my-event</span>
          </div>
        </button>
        <button onClick={() => handleCardClick('rent')}>
          <div className={styles.card}>
            <img
              src="./images/icons8-rent-50.png"
              alt="Rent"
              className={styles.cardImgTop}
            />
            <span className={styles.cardText}>Rent-for-my-event</span>
          </div>
        </button>
        <button onClick={() => handleCardClick('plan')}>
          <div className={styles.card}>
            <img
              src="./images/icons8-plan-50.png"
              alt="Plan"
              className={styles.cardImgTop}
            />
            <span className={styles.cardText}>Plan-my-event</span>
          </div>
        </button>
      </div>

     
      {components[activeComponent]}
    </div>
  );
};

export default User;
