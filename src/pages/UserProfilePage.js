import { useEffect, useState } from "react"
import axios from 'axios'
import {useParams} from "react-router-dom"
import UserCard from "../components/UserCard"

const UserProfilePage = props => {
    
    const [user, setUser] = useState(null)

    const { userId } = useParams()

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${userId}`, {headers})
        .then(response => {
            setUser(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    // useEffect(() => {
    //     axios.get(`http://localhost:3001/users/${userId}`)
    //     .then(response => {
    //         setUser(response.data)
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    if(!user) {
        return <p>Loading...</p>
    }

    return (
        <div className="container">
            <h1> Olá { user.name }, </h1>

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