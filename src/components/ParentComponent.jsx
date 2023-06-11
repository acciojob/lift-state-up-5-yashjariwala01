import React, { useState } from 'react'
import ChildCompomponent from './ChildComponent';

function ParentComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div >
            <h1>Parent Component</h1>
            {isLoggedIn ? <p>You are logged in!</p> : <ChildCompomponent setIsLoggedIn={setIsLoggedIn} />}
        </div>
    )
}

export default ParentComponent