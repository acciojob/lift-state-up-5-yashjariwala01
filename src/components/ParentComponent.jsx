import React, {useState} from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const [showForm, setShowForm] = useState(true);

  return (
    <div>
        {showForm && (<form action="">
            <label htmlFor="username">Username</label>
            <input type="text" id='username' />
            <br />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
        </form>)}
      <ChildComponent isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn} setShowForm={setShowForm} />
    </div>
  )
}

export default ParentComponent
