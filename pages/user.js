import React from 'react';

const User = () => {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: '#f8f9fa',
          padding: '1rem',
          position: 'sticky',
          top: '0',
          zIndex: '1000',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <a
            href="#"
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '1.5rem',
              fontWeight: '600',
            }}
          >
            <img
              src="./images/icons8-event-management-80.png"
              alt="Logo"
              style={{ width: '40px', height: '40px', marginRight: '0.5rem' }}
            />
            Event-Management
          </a>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <input
              style={{
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '0.375rem',
                fontSize: '1rem',
                transition: 'border 0.3s',
              }}
              type="search"
              placeholder="Search"
            />
            <button
              style={{
                backgroundColor: '#198754',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#145a32')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#198754')}
            >
              <a href="#" style={{ textDecoration: 'none', color: 'white' }}>
                Login
              </a>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Text */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '5rem',
          animation: 'fadeIn 1.5s ease-out',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '700',
            animation: 'fadeIn 1.5s ease-out',
          }}
        >
          Everything
        </h1>
        <h2
          style={{
            fontSize: '2rem',
            marginTop: '1rem',
            animation: 'fadeIn 2s ease-out 0.5s',
          }}
        >
          For your events in one place
        </h2>
      </div>
      <hr
        style={{
          marginTop: '3rem',
          border: '1px solid #ccc',
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />

      {/* Cards */}
      <div
        style={{
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '2rem',
          padding: '0 2rem',
        }}
      >
        <div style={cardStyle}>
          <img
            src="./images/icons8-event-50.png"
            alt="Service"
            style={{
              width: '50px',
              height: '50px',
              marginBottom: '1rem',
              transition: 'transform 0.3s ease-in-out',
            }}
            className="card-img-top"
          />
          <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            Hire-Service
          </span>
        </div>
        <div style={cardStyle}>
          <img
            src="./images/icons8-buy-50.png"
            alt="Buy"
            style={{
              width: '50px',
              height: '50px',
              marginBottom: '1rem',
              transition: 'transform 0.3s ease-in-out',
            }}
            className="card-img-top"
          />
          <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            Buy-for-my-event
          </span>
        </div>
        <div style={cardStyle}>
          <img
            src="./images/icons8-rent-50.png"
            alt="Rent"
            style={{
              width: '50px',
              height: '50px',
              marginBottom: '1rem',
              transition: 'transform 0.3s ease-in-out',
            }}
            className="card-img-top"
          />
          <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            Rent-for-my-event
          </span>
        </div>
        <div style={cardStyle}>
          <img
            src="./images/icons8-plan-50.png"
            alt="Plan"
            style={{
              width: '50px',
              height: '50px',
              marginBottom: '1rem',
              transition: 'transform 0.3s ease-in-out',
            }}
            className="card-img-top"
          />
          <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>
            Plan-my-event
          </span>
        </div>
      </div>
    </div>
  );
};

// Card Style for all cards
const cardStyle = {
  padding: '1.5rem',
  textAlign: 'center',
  backgroundColor: '#fff',
  borderRadius: '0.375rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  ':hover': {
    backgroundColor: '#e8f5e9',
    transform: 'translateY(-5px)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
};

export default User;
