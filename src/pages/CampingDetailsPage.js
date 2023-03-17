import {useEffect, useState, useContext} from 'react';
import  axios from 'axios';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
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

    const deleteCommentary = commentaryId => {
        axios.delete(`${process.env.REACT_APP_API_URL}/commentary/${commentaryId}`, {headers})
        .then(response => {
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Comentário excluído',
                showConfirmButton: false,
                timer: 1000
              })
            
            setRefresh(!refresh)
        })
        .catch(err => console.log(err))
    }


    if(!camp) {
        return <p>Loading...</p>
    }

    return ( 
            <div>
                
                <CampDetailCard camp={camp} key={camp._id} />

                <div className="row">
                    
                    <h4 className="mb-3">Comentários</h4>
 
                    <form onSubmit={e => handleSubmit(e)}>

                        <div className="d-flex justify-content-center mb-3">
                            <p className="mb-0">
                            
                                <label for="exampleFormControlInput1">Escreva seu comentário</label>
                                <textarea
                                    type='text'
                                    className='form-control m-2'
                                    value={commentary}
                                    onChange={e => setCommentary(e.target.value)}
                                />
                                
                                <label for="exampleFormControlInput1">Avalie sua experiência</label>
                                <input
                                        type='number'
                                        className='form-control m-2'
                                        value={rating}
                                        onChange={e => setRating(e.target.value)}
                                        min="1" 
                                        max="5"
                                />
                            

                            </p>

                        </div>

                        <button className='btn btn-secondary mb-3' type='submit'>Enviar</button>
                        <hr className="my-0 mt-2" />

                    </form>

                        <div className="row">
                            { camp.commentary.length > 0 && camp.commentary.map(commentary => {
                                return (
                                    <CommentaryCard deleteCommentary={deleteCommentary} campComments={camp.commentary} comments={commentary} rating={rating} key={commentary._id} />     
                                )
                            })}
                        </div>
  
                </div>
        </div>
    );
}
 
export default CampingDetailsPage;