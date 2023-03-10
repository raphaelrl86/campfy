import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

const IsLogged = props => {

    const { isLoading, loggedInUser} = useContext (AuthContext)
    

    if(isLoading){
        return <p>Loading...</p>
    }
    // const token = localStorage.getItem(loggedInUser.jwt)
    

    if(!loggedInUser.user._id) {
        console.log(loggedInUser)
        return <Navigate to="/login"/>
    } 
    

    return props.children
}

export default IsLogged