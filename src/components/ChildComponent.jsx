import React, { useState } from 'react'

function ChildCompomponent ({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id='username' value={username} onChange={(e) => {setUsername(e.target.value)}} />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input type="text" id='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                <br /><br />
                <button type='submit'>Log in</button>
            </form>
        </div>
    )
}

export default ChildCompomponent