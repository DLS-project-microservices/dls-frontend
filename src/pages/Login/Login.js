import React, { useState, useEffect } from 'react';
import './Login.css';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import { useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import Cookies from 'js-cookie';


const Login = () => {
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const signIn = useSignIn();

    console.log(process.env.REACT_APP_AUTH_URL)

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        setIsFormValid(email !== '' && password !== '');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/users/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    frontendUserType: "customer"
                })
            });
            const data = await response.json();
            if (response.ok) {
                signIn({
                    auth: {
                        token: data.token,
                        type: "Bearer",
                    },
                    userState: {
                        email: data.email,
                        firstName: data.firstName,
                        lastName: data.lastName
                    }
                });
                Cookies.set('firstName', data.firstName);
                Cookies.set('lastName', data.lastName);
                Cookies.set('email', data.email);
                navigate('/');
                window.location.reload();
            }
            else {
                toastr.error(data.error);
            }
        }
        catch(error) {
            toastr.error('Something went wrong. Please try again later.')
        }  
    }

    return (
        <div className="page-container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-header">
                            <h1>Login</h1>
                            </div>
                    <div className="form-section">
                        <label>Email:</label>
                        <input className="input-field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-section">
                        <label>Password:</label>
                        <input className="input-field" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-btn-container">
                    <button className="add-item-btn" type="submit" disabled={!isFormValid}>
                        Login
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
