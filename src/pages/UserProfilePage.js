import { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { AuthContext } from "../context/auth.context"
import axios from 'axios'
import ProfileCard from '../components/ProfileCard'
import CommentaryCard from '../components/CommentaryCard'




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
            {/* <h1> Olá { !isLoading && user.name }, </h1> */}
            <ProfileCard user={user} key={user._id}/>

            {/* <div className="row">
                        { user.commentary.length > 0 && user.commentary.map(commentary => {
                            return (
                                <CommentaryCard commentary={commentary} key={commentary._id} />       
                            )
                        })}
            </div> */}

            {/* <Link className="btn btn-primary" to={`/edit/users/${user._id}`}>Editar</Link>
            <div className="row">
                <div className="col-3">
                    <img width="100%" src={user.profileImage} alt="profileImage" />
                </div> */}
                {/* <div className="col-9">
                     */}
                
                
                    {/* <p>Nome: {user.name} {user.surname}</p> */}
                    {/* <p>Email: {user.email}</p> */}
                    {/* <p>Endereço: {user.address}</p> */}
                    
                    {/* <p>{user.commentary}</p> */}
                {/* </div> */}
            {/* </div> */}
            {/* <div className="row">
                <h2>Usuario</h2> */}
                {/* <div className="row">
                    { user.length > 0 && user.map(user => {
                        return (
                            <ProfileCard user={user} key={user._id} />       
                        )
                    })}
                </div> */}
            {/* </div> */}

                

        </div>
    )
}

export default UserProfilePage