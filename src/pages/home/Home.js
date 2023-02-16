import React, {useState, useEffect, useContext} from 'react'
import Header from '../../components/header/Header.js'
import { LoadingContext } from '../../context/loading.js'
import {API_KEY} from '../../api/index.js'
import {NEWS_URL} from '../../api/index.js'
import axios from 'axios'    

function Home() {
    const [newsdata, setNewsdata] = useState([])
    const [error, setError] = useState([])
    const [loading, setLoading] = useContext(LoadingContext)
    const newsurl = `${NEWS_URL}apikey=${API_KEY}`
    const fakeapi = "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
            setLoading(true)    

            axios.get(`${fakeapi}`)
                .then((response) => {setNewsdata(response.data)})
                .catch(error => {setError(error)})

            setLoading(false)
    },[])

    
    console.log(newsdata)

    return (
        <div className="home-wrapper">
            <Header />
        </div>
    )
}

export default Home
