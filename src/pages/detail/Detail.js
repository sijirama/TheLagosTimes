import React , {useState , useEffect} from 'react'
import {useParams} from "react-router-dom"
import Header from '../../components/header/Header.js' 
import Navbar from '../../components/navbar/Navbar.js'

function Detail() {
    
    const [news , setNews] = useState("")
    const {id} = useParams()
    






  return (
      <main>
        <Header/>
        <Navbar />
        <div>
            {id}
        </div>
      </main>
  )
}

export default Detail
