import {useEffect, useState} from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "../context/auth.context"
import CommentaryCard from '../components/CommentaryCard';



const CampingDetailsPage = props => { 

    const [camp, setCamp] = useState(null)

    const {isLoading, loggedInUser} = useContext(AuthContext)

    const { campId } = useParams()

    const navigate = useNavigate()

    // const token = localStorage.getItem('token')

    const [commentary, setCommentary] = useState('')
    const [rating, setRating] = useState('')
    const headers = {
           
        'Authorization': `Bearer ${loggedInUser.jwt}`

    }
    // const [user, setUser] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        const newCommentary = {
            commentary,
            rating,
            // user,
            camp 
        }

        axios.post(`${process.env.REACT_APP_API_URL}/camps/${campId}/commentary`, newCommentary, {headers}) 
        .then(response => {
            console.log(response.data)
            Swal.fire('Comentário criado!')
            navigate(`/camps/${campId}`)


    })
    .catch(err => console.log(err))

    }   

        
    useEffect (() => {

        // const headers = {
           
        //     'Authorization': `Bearer ${loggedInUser.jwt}`

        // }

        axios.get(`${process.env.REACT_APP_API_URL}/camps/${campId}`, {headers})
        .then(response => {
           setCamp(response.data)
    })
        .catch(err => console.log(err))
    }, [isLoading])

    if(!camp) {
        return <p>Loading...</p>
    }

    console.log(camp)
    
    return ( 
        

            <div class="row">
            <div class="col-md-8">
                <div class="pb-3">
                
                    <img width="100%" src={camp.campImage} alt="profileImage" />
               
                </div>
                <div class="row">

                    <div class="col-md-6">
                        <p>{camp.campName}</p>
                        <p>{camp.email}</p>
                        <p>{camp.address}</p>
                        <p>{camp.city}, {camp.state} | {camp.country}</p>
                    </div>

                    <div class="col-md-6">
                        <p>{camp.description}</p>
                    </div>

                </div>
            </div>
            
            <div class="col-md-4 mt-5">

                    { camp.convenience.length > 0 && camp.convenience.map(convenience => {
                        return (
                            <li> {convenience} </li>    
                        )
                    })}
            </div>
        
            

            {/* <div className="row">
                <div className="col-3">
                    <img width="100%" src={camp.campImage} alt="profileImage" />
                </div>
                <div className="col-9">
                    <p>Nome: {camp.campName}</p>
                    <p>Email: {camp.email}</p>
                    <p>Endereço: {camp.address}</p>
                    <p>Cidade: {camp.city}</p>
                    <p>Estado: {camp.state}</p>
                    <p>País: {camp.country}</p>
                    <p>Descrição: {camp.description}</p>
                    <p>Comodidades: {camp.convenience}</p>
                    <p>Comentários: {camp.commentary}</p>
                </div>
            </div> */}
            <div className="row">
                <h2>Comentários</h2>

                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <input
                            type='number'
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            placeholder="Nota"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={commentary}
                            onChange={e => setCommentary(e.target.value)}
                            placeholder="Comentário"
                        />
                    </div>
{/* 
                    <div>
                        <input
                            type='text'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="Cidade"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={state}
                            onChange={e => setState(e.target.value)}
                            placeholder="Estado"
                        />
                    </div> */}

                    <button type='submit'>Enviar Comentário</button>
                    
                </form>
                    

                    <div className="row">
                        { camp.commentary.length > 0 && camp.commentary.map(commentary => {
                            return (
                                <CommentaryCard commentary={commentary} key={commentary._id} />       
                            )
                        })}
                    </div>
                    
            </div>
        </div>
           
    );
}

 
export default CampingDetailsPage;