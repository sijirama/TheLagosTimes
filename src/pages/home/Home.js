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
        async function getPost() {
            try{
            //setLoading(true)
                const response = await axios.get(fakeapi);
                setNewsdata(response.data);
            //setLoading(false)
            }catch(error){
                setError(error.message)
                console.log(error.message)
            }
        }

        getPost();

        console.log(newsdata)
        }, []);

    return (
        <div className="home-wrapper">
            <Header />
            {newsdata.map((post, index) => (
                <div key={index}>
                {post.title}
                </div>
            )  )}
        </div>
    )
}

export default Home
