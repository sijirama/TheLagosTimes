import { useContext } from 'react'
import { LoadingContext } from './context/loading.js'
import Home from './pages/home/Home.js'
import Loading from './components/loader/loader.js'

function App() {
    
    //NOTE: to eve call or use loading
    //const [loading ] = useContext(LoadingContext)

    //WARN: this should be removes after testing the loader animation
    //NOTE: this can be used to set loader off and on in every other component
    const [loading, setLoading] = useContext(LoadingContext)
    setLoading(true)

    return (
      !loading? (<div className="app">
                    <Home />
                </div>)
                :
                (<Loading />)

    )}

export default App;
