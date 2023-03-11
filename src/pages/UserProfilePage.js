import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import {useParams} from "react-router-dom"
import UserCard from "../components/UserCard"
import { AuthContext } from "../context/auth.context"


const UserProfilePage = props => {
    
    const [user, setUser] = useState('')
    const {isLoading, loggedInUser} = useContext(AuthContext)
    const { userId } = useParams()

    const headers = {
           
        'Authorization': `Bearer ${loggedInUser.jwt}`

    }
  
    useEffect(() => {
        
        axios.get(`http://localhost:3001/users/:${userId}`, {headers})
        .then(response => {
            setUser(response.data)
        })
        .catch(err => console.log(err))
    }, [isLoading])


    if(!loggedInUser) {
        return <p>Logue no site...</p>
    }
   

    return (
        <div className="container">
            <h1> Olá { !isLoading && loggedInUser.user.name }, </h1>

            <div className="row">
                <div className="col-3">
                    <img width="100%" src={user.profileImage} alt="profileImage" />
                </div>
                <div className="col-9">
                    <p>Nome: {user.name} {user.surnam}</p>
                    <p>Email: {user.email}</p>
                    <p>Endereço: {user.address}</p>
                    
                    <p>{user.commentary}</p>
                </div>
            </div>
            <div className="row">
                <h2>Usuario</h2>
                <div className="row">
                    { user.length > 0 && user.map(user => {
                        return (
                            <UserCard star={user} key={user._id} />       
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserProfilePage