import React from 'react'
import "./navbar.scss"

function Navbar() {

  //const date = "Wednesday 16, Febrary 2023"
  const date = getCurrentDate() 

  function getCurrentDate(separator=' '){
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
        }

  return (
    <div className="nav">
        <h5>
            {date}
        </h5>
    </div>
)}

export default Navbar
