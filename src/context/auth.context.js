import {createContext, useEffect, useState} from 'react'


const AuthContext = createContext()

const AuthProvider = (props) => {

    const [loggedInUser, setLoggedInUser] = useState({user: {}})
    // const [loggedInUser, setLoggedInUser] = useState({token: '', user: {}})
    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)
    

    const logout = () => {
        localStorage.removeItem('loggedInUser')
        setLoggedInUser({user: {}})
        
    }
    

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser')
        const parsedUser = JSON.parse(storedUser) || {}

        if(parsedUser.user){
            console.log(loggedInUser)
            setLoggedInUser({...parsedUser})
            
        }
        setIsLoading(false)
    }, [refresh])

    
    
    return ( 
        <AuthContext.Provider value={{refresh, setRefresh, logout, isLoading, loggedInUser, setLoggedInUser}}>
            {props.children}
        </AuthContext.Provider>

    );
}
 
export {AuthContext, AuthProvider}  