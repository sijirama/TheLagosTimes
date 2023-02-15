import React from 'react'
import './loader.scss'

function loader() {
    
    //Homer loader
    const loadgif = "https://media2.giphy.com/media/3y0oCOkdKKRi0/giphy.gif?cid=ecf05e47gz8foz2r6kq7stgze9w5r9gngh7wtr6j1lr2ylte&rid=giphy.gif&ct=g"



    



  return (
    <div className="loader-wrapper">
        <img src={loadgif} alt="loader" />
    </div>
  )
}

export default loader
