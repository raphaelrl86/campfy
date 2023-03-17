import { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import axios from 'axios'
import ProfileCard from '../components/ProfileCard'

const UserProfilePage = () => {
    
    const [user, setUser] = useState('')
    const {isLoading, loggedInUser} = useContext(AuthContext)
    const { userId } = useParams()

    const headers = {      
        'Authorization': `Bearer ${loggedInUser.jwt}`
    }
    useEffect(() => {
        
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {headers})
        .then(response => {
            setUser(response.data)
        })
        .catch(err => console.log(err))
    }, [isLoading])

    if(!loggedInUser) {
        return <p>Logue no site...</p>
    }
    return (
        <div className="container mb-4">
            <ProfileCard user={user} key={user._id}/>
        </div>
    )
}

export default UserProfilePage