import { Navigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/auth.context"

const IsAdmin = props => {

    const { isLoading, loggedInUser} = useContext (AuthContext)
    const admin = process.env.REACT_APP_ADMIN_VALIDATION;

    if(isLoading){

        return <p>Loading...</p>
    }
    
    if (!loggedInUser.user._id) {
        return <Navigate to="/login"/>
    } else if (loggedInUser.user.email !== admin) {
        return <Navigate to="/"/>
    }

    return props.children
}

export default IsAdmin;