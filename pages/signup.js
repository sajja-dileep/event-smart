import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SignUp = () => {
    const router = useRouter();
    const [details, setDetails] = useState({
        Name: '',
        Phoneno: '',
        Email: '',
        Password: '',
        Role: '',
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'Name' && /\s/.test(value)) {
            return;
        }
        setDetails({ ...details, [name]: value });
    };

    const getRandomThreeDigitInt = () => {
        return Math.floor(Math.random() * 9000) + 1000;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!details.Name || !details.Phoneno || !details.Email || !details.Password || !details.Role) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        setLoading(true);

        const { Name, Phoneno, Email, Password, Role } = details;
        const User = Name + getRandomThreeDigitInt();

        try {
            const res = await fetch(`https://event-managing-2afcd-default-rtdb.firebaseio.com/UserData/credentials.json`);
            if (res.ok) {
                const data = await res.json();
                if (data) {
                    const matches = Object.values(data).filter(entry => {
                        return entry.Phoneno === Phoneno || entry.Email === Email;
                    });
                    if (matches.length > 0) {
                        setErrorMessage('User already exists with the same Phone number or Email.');
                        setLoading(false);
                        return;
                    }
                }
            } else {
                throw new Error('Failed to fetch data.');
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name,
                    Username: User,
                    Phoneno,
                    Email,
                    Password,
                    Role
                    
                })
            };

            const registerResponse = await fetch(`https://event-managing-2afcd-default-rtdb.firebaseio.com/UserData/credentials.json`, options);
            const userInfoResponse = await fetch(`https://event-managing-2afcd-default-rtdb.firebaseio.com/${Role}/${User}.json`, options);

            if (registerResponse.ok && userInfoResponse.ok) {
                setSuccessMessage('SignUp was successful!');
                setTimeout(() => {
                    router.push('/login');
                }, 2000);
            } else {
                throw new Error('Failed to store data.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error occurred while registering user.');
        } finally {
            setLoading(false);
        }
    };

    const login = () => {
        router.push('/login');
    };

    return (
        <>
            <button onClick={login} style={{
                position: 'absolute',
                width: '80px',
                padding: '8px',
                marginTop: '24px',
                color: 'white',
                background: 'transparent',
                border: '2px solid white',
                borderRadius: '8px',
                top: '12px',
                right: '64px',
                cursor: 'pointer'
            }}>
                Login
            </button>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                padding: '16px',
                background: 'linear-gradient(to right, purple, blue)'
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '24px',
                    backgroundColor: 'black',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    opacity: '0.9'
                }}>
                    <h2 style={{ textAlign: 'center', color: 'white', fontSize: '32px' }}>SignUp</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label style={{ color: 'white', marginTop: '16px', display: 'block' }}>Name</label>
                            <input
                                name="Name"
                                value={details.Name}
                                placeholder="Enter your Name"
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    marginTop: '8px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            />
                        </div>
                        <div style={{ marginTop: '16px' }}>
                            <label style={{ color: 'white' }}>Phone Number</label>
                            <input
                                name="Phoneno"
                                type="number"
                                value={details.Phoneno}
                                placeholder="Enter your Phone Number"
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    marginTop: '8px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            />
                        </div>
                        <div style={{ marginTop: '16px' }}>
                            <label style={{ color: 'white' }}>Email</label>
                            <input
                                name="Email"
                                value={details.Email}
                                placeholder="Enter your Email"
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    marginTop: '8px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            />
                        </div>
                     
                        <div style={{ marginTop: '16px' }}>
                            <label style={{ color: 'white' }}>Role</label>
                            <select
                                name="Role"
                                value={details.Role}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    marginTop: '8px',
                                    background: 'rgb(0, 0, 0)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            >
                                <option value="" disabled>Select Role</option>
                                <option value="User">User</option>
                                <option value="ServiceProvider">ServiceProvider</option>
                                <option value="EventManager">EventManager</option>
                            </select>
                        </div>
                        <div style={{ marginTop: '16px' }}>
                            <label style={{ color: 'white' }}>Password</label>
                            <input
                                name="Password"
                                type="password"
                                value={details.Password}
                                placeholder="Enter your Password"
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    marginTop: '8px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    border: 'none',
                                    borderRadius: '4px',
                                    color: 'white'
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            style={{
                                width: '100%',
                                padding: '12px',
                                marginTop: '24px',
                                background: 'white',
                                color: 'black',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                opacity: loading ? 0.5 : 1
                            }}
                        >
                            {loading ? 'Signing Up...' : 'Submit'}
                        </button>
                        {successMessage && <p style={{ color: 'green', marginTop: '16px' }}>{successMessage}</p>}
                        {errorMessage && <p style={{ color: 'red', marginTop: '16px' }}>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;
