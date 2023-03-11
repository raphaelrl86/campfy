import {useEffect, useState} from 'react';
import  axios from 'axios';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "../context/auth.context"
import CommentaryCard from '../components/CommentaryCard';
import CampDetailCard from '../components/CampDetailCard';



const CampingDetailsPage = props => { 

    const [camp, setCamp] = useState(null)
    const [refresh, setRefresh ] = useState(true)
    const [commentary, setCommentary] = useState('')
    const [rating, setRating] = useState('')

    const {isLoading, loggedInUser} = useContext(AuthContext)

    const { campId } = useParams()

      
    const headers = {
           
        'Authorization': `Bearer ${loggedInUser.jwt}`

    }


    const handleSubmit = e => {
        e.preventDefault()
        const newCommentary = {
            commentary,
            rating,
            camp 
        }

        axios.post(`${process.env.REACT_APP_API_URL}/camps/${campId}/commentary`, newCommentary, {headers}) 
        .then(response => {
            console.log(response.data)
            Swal.fire('Comentário criado!')
            setRefresh(!refresh)   

    })
    .catch(err => console.log(err))

    }   
    useEffect (() => {

        axios.get(`${process.env.REACT_APP_API_URL}/camps/${campId}`, {headers})
        .then(response => {
           setCamp(response.data)
    })
        .catch(err => console.log(err))
    }, [isLoading, refresh])

    if(!camp) {
        return <p>Loading...</p>
    }

    console.log(refresh)
    
    return ( 
        
            
            <div>

                    <CampDetailCard camp={camp} key={camp._id} />

            
                <div class="mt-5">

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