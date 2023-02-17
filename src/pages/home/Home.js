//NOTE: use context was removed, jsyk
import React, {useState, useEffect} from 'react'
import Header from '../../components/header/Header.js'
//import { LoadingContext } from '../../context/loading.js'
import { headers  } from '../../api/index.js'
import axios from 'axios'    
import Navbar from '../../components/navbar/Navbar.js'
import NewsSection from '../../components/newssection/NewsSection.js'

function Home() {

    const [newsdata, setNewsdata] = useState([])

    //NOTE: error in useState was removed
    const [ setError] = useState([])

    //const [loading, setLoading] = useContext(LoadingContext)

    useEffect(() => {
        async function getPost() {
            try{
                const response = await axios.get("https://api.newscatcherapi.com/v2/latest_headlines?countries=NG", {headers});
                setNewsdata(response.data.articles);
            }catch(error){
                setError(error.message)
                console.log(error.message)
            }
        }
        getPost();
        console.log(newsdata)
        }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
        <div className="home-wrapper">
            <Header />
            <Navbar />
            <NewsSection data={newsdata}/>
        </div>
    )
}

export default Home
