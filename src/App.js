import { useContext } from 'react'
import { LoadingContext } from './context/loading.js'
import Home from './pages/home/Home.js'
import Detail from './pages/detail/Detail.js'
import Loading from './components/loader/loader.js'
import {Routes , Route} from "react-router-dom"

function App() {
    
    //NOTE: to eve call or use loading
    const [loading ] = useContext(LoadingContext)

    //WARN: this should be removed after testing the loader animation
    //NOTE: this can be used to set loader off and on in every other component
    //const [loading, setLoading] = useContext(LoadingContext)
    //setLoading(true)

    return (
      !loading? (
          <div className="app">
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/detail/:id' element={ <Detail /> } />
                </Routes>
          </div>
            ):(
                <Loading />)

    )}

export default App;
