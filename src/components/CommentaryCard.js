import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../context/auth.context"
import axios from 'axios'
import Swal from 'sweetalert2'

const CommentaryCard = ({comments, deleteCommentary}) => { 

    const [rating, setRating] = useState('')
    const [commentary, setCommentary] = useState('')
    const [refresh, setRefresh ] = useState(true)
    const navigate = useNavigate()
    
    const {loggedInUser} = useContext(AuthContext)
    
    const headers = {
        'Authorization': `Bearer ${loggedInUser.jwt}`
    }

    useEffect(() => {
        console.log("commentary", commentary)
        console.log("rating", rating)
    });

    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/commentary/${comments._id}`, {headers})
        .then(response => {
            let {
                commentary,
                rating

            } = response.data 
                setCommentary(commentary)
                setRating(rating)
        })
    },[comments._id, refresh])

    const handleSubmit = e => {
        e.preventDefault()

        const updateCommentary = {
            commentary,
            rating
        }

        axios.put(`${process.env.REACT_APP_API_URL}/commentary/${comments._id}`, updateCommentary, {headers})
        .then(response => {
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Comentário editado com sucesso!',
                showConfirmButton: false,
                timer: 1000
              })
    
            setRefresh(!refresh)
        })
        .catch(err => console.log(err))
    }

    return ( 

        <div classNameName='col-3'>

            <section>
                <form onSubmit={ e => handleSubmit(e) }>
                    <div className="container my-2 py-2 ">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-12 col-lg-10">
                            
                                        <div className="d-flex justify-content-center mt-5">
                                            
                                            <img className="rounded-circle shadow-1-strong me-3"
                                            src={comments.user.profileImage} alt="avatar" style={{width:"60px", height:"60px"}}/>
                                            
                                            <div>
                                                
                                                
                                                <h6 className="fw-bold mb-1 d-flex justify-content-flex-start">{comments.user.name} </h6>
                                                <p className="mb-0 mb-1 d-flex justify-content-flex-start">{new Date (comments.updatedAt).toLocaleString('pt-br')}</p>
                                                
                                                <div className="d-flex align-items-center mb-3">
                                                    <p className="mb-0">
                                                        
                                                        {loggedInUser.user.email === comments.user.email && (
                                                            <button type='submit' className="badge bg-primary m-1"> Editar </button> //TO-DO: ver como chamar o método de update
                                                        )}
                                                        {loggedInUser.user.email === comments.user.email && (
                                                            <button className="badge bg-danger m-1" onClick={() => deleteCommentary(comments._id)}> Deletar </button>
                                                        )}  
                                                    </p>
                                                    
                                                </div>

                                                <div className="d-flex align-items-center mb-3">
                                                    <p className="mb-0">

                                                        <textarea 
                                                            type="text" 
                                                            className="form-control text-center mb-2" 
                                                            value={commentary}
                                                            onChange= {e => setCommentary(e.target.value)}
                                                        />

                                                        <input 
                                                            type="number" 
                                                            className="form-control" 
                                                            value={rating}
                                                            onChange= {e => setRating(e.target.value)}
                                                            min="1" 
                                                            max="5"
                                                        />
                                                  
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            

        </div>

    );
}
 
export default CommentaryCard;