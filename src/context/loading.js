import { createContext , useState } from 'react';

export const LoadingContext = createContext();

const LoadingStateProvider = (props) => {
    //NOTE: this state will be shared with all components 
    const [loading, setLoading] = useState(false);

    return (
        //NOTE: this is the provider providing state
        <LoadingContext.Provider value={[loading, setLoading]}>
            {props.children}
        </LoadingContext.Provider>
    );
};

export default LoadingStateProvider;
