import React from 'react'
import "./navbar.scss"

function Navbar() {

  const date = "Wednesday 16, Febrary 2023"

  return (
    <div className="nav">
        <h5>
            {date}
        </h5>
    </div>
)}

export default Navbar
