import React, {useState, useEffect, useContext} from 'react'
import Header from '../../components/header/Header.js'
import { LoadingContext } from '../../context/loading.js'
import {API_KEY, headers , NEWS_URL} from '../../api/index.js'
import axios from 'axios'    
import Navbar from '../../components/navbar/Navbar.js'
import NewsSection from '../../components/newssection/NewsSection.js'

function Home() {

    const [newsdata, setNewsdata] = useState([])
    const [error, setError] = useState([])
    const [loading, setLoading] = useContext(LoadingContext)

    useEffect(() => {
        async function getPost() {
            try{
                const response = await axios.get("https://api.newscatcherapi.com/v2/latest_headlines?countries=NG&topic=business", {headers});
                setNewsdata(response.data.articles);
            }catch(error){
                setError(error.message)
                console.log(error.message)
            }
        }
        getPost();
        console.log(newsdata)
        }, []);

  (
        <div className="home-wrapper">
            <Header />
            <Navbar />
            <NewsSection data={newsdata}/>
        </div>
    )
}

export default Home
