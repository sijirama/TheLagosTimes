import React , {useState , useEffect} from 'react'
import {useParams} from "react-router-dom"
import Header from '../../components/header/Header.js' 
import Navbar from '../../components/navbar/Navbar.js'

function Detail() {
    
    const [news , setNews] = useState("") // eslint-disable-line no-used-vars
    const {id} = useParams()
    
    useEffect(() => {
        id && getindividualnewspost()
      }
    , [id])

    const getindividualnewspost = async () => {
    }

  return (

      <main>
        <Header/>
        <Navbar />
        <div className="newspost">
            {id}
        </div>
      </main>

  )
}

export default Detail
