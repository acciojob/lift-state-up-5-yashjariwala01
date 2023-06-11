import React from 'react'

const ChildComponent = ({isLoggedIn, setIsloggedIn, setShowForm}) => {
  return (
    <div>
        <p>{isLoggedIn && <p>You are logged in!</p>}</p>
      <button onClick={()=>{
                            setIsloggedIn(true)
                            setShowForm(false)
                            }}
                            >Login</button>
    </div>
  )
}

export default ChildComponent
