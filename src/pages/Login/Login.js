import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignIn from 'react-auth-kit/hooks/useSignIn';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = useSignIn();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/users/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        console.log(data.email);
        if (response.ok) {
            signIn({
                auth: {
                    token: data.token,
                    type: "Bearer",
                },
                userState: {
                    email: data.email
                }
            })
            
            navigate('/')
            window.location.reload();
        }
    }

    return (
        <div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    );
}

export default Login;
