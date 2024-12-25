import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [loginDetails, setLoginDetails] = useState({
    PhoneNumber: '',
    UserPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const { PhoneNumber, UserPassword } = loginDetails;
    if (!PhoneNumber || !UserPassword) {
      setErrorMessage('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`https://event-managing-2afcd-default-rtdb.firebaseio.com/UserData/credentials.json`);
      if (res.ok) {
        const data = await res.json();
        if (data) {
          const matches = Object.values(data).filter(
            (entry) => entry.Phoneno === PhoneNumber && entry.Password === UserPassword
          );
          if (matches.length > 0) {
            const user = matches[0].Username;
            localStorage.setItem('token', 'your_token_here');
            setSuccessMessage('Successfully logged in');
            setLoginDetails({
              PhoneNumber: '',
              UserPassword: '',
            });
            if (matches[0].Role=="User"){
                
                router.push(`/user?me=${user}`);
            }
            if (matches[0].Role=="ServiceProvider"){
                
                router.push(`/serviceprovider?me=${user}`);
            }
            if (matches[0].Role=="EventManager"){
                
                router.push(`/eventmanager?me=${user}`);
            }

            
          } else {
            setErrorMessage('Incorrect phone number or password');
          }
        }
      } else {
        throw new Error('Failed to fetch data.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Failed to log in');
    } finally {
      setLoading(false);
    }
  };

  const goToSignUp = () => {
    router.push('/signup');
  };

  return (
    <>
      <button onClick={goToSignUp} className="signup-btn">
        Sign Up
      </button>
      <div className="container">
        <div className="form-container">
          <h2 className="form-title">Login</h2>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              name="PhoneNumber"
              id="phoneNumber"
              value={loginDetails.PhoneNumber}
              className="form-input"
              placeholder="Enter your phone number"
              onChange={handleLoginChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              name="UserPassword"
              id="userPassword"
              value={loginDetails.UserPassword}
              className="form-input"
              placeholder="Enter your password"
              onChange={handleLoginChange}
            />
          </div>
          <button
            className="submit-btn"
            onClick={handleLoginSubmit}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Submit'}
          </button>
          {successMessage && <div className="success-message">{successMessage}</div>}
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
      <style jsx>{`
        .signup-btn {
          position: absolute;
          top: 16px;
          right: 32px;
          padding: 10px 20px;
          background-color: transparent;
          border: 2px solid white;
          color: white;
          cursor: pointer;
          border-radius: 5px;
          transition: 0.3s;
        }

        .signup-btn:hover {
          background-color: white;
          color: black;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(to right, purple, blue);
        }

        .form-container {
          background-color: rgba(0, 0, 0, 0.8);
          padding: 20px;
          border-radius: 8px;
          width: 300px;
        }

        .form-title {
          text-align: center;
          color: white;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          color: white;
          margin-bottom: 5px;
        }

        .form-input {
          width: 100%;
          padding: 8px;
          border: none;
          border-radius: 4px;
        }

        .submit-btn {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: white;
          color: black;
          cursor: pointer;
          font-size: 16px;
        }

        .submit-btn:hover {
          background-color: lightgray;
        }

        .success-message {
          color: green;
          margin-top: 15px;
        }

        .error-message {
          color: red;
          margin-top: 15px;
        }
      `}</style>
    </>
  );
};

export default Login;
