import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const EditCommentaryPage = ({commentary}) => {

    const [commentary, setCommentary] = useState('')
    const [rating, setRating] = useState('')
    const [loading, setLoading] = useState(true)
    
    const navigate = useNavigate()

    const headers = {
        'Authorization': `Bearer ${loggedInUser.jwt}`
    }
    
    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/commentary/${commentary._id}`, {headers})
        .then(response => {
            let {
                commentary
            } = response.data 
                setCommentary(commentary)
        })
    }, [campId])

    const handleSubmit = e => {
        e.preventDefault()

        const updateCommentary = {
            commentary,
            rating
        }

        axios.put(`${process.env.REACT_APP_API_URL}/commentary/${commentaryId}`, {updateCommentary}, {headers})
        .then(response => {
            Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: 'Comentário editado com sucesso!',
                showConfirmButton: false,
                timer: 1000
              })
            navigate('/') 
        })
        .catch(err => console.log(err))
    }

    return ( 
        <div className="EditCommentaryPage">
            <div className="py-6 bg-gray-100">
                <div className= 'container-fluid'>
                    <div className='text-center pb-lg-4 pt-5'>
                        <h2 className='h2 mt-2 mb-1'>Edite seu comentário</h2>
                    </div>
                </div>
            </div>

            {!loading && (
                
            <div className="container text-center pt-1">
                <div className="row pt-3">
                <form onSubmit={ handleSubmit }>
                    <div class="col-6">
                        <div className='col-md-6'>
                        
                            <input 
                                type='text'
                                className="form-control"
                                value = {commentary}
                                onChange= {e => setCommentary(e.target.value)}
                            />
                        </div>

                        <div className='col-md-6'>
                            <input 
                                type='number'
                                className="form-control"
                                value = {rating}
                                onChange= {e => setRating(e.target.value)}
                            />

                        </div>
                    </div>
                        
                    
                </form>
                </div>
            </div>

            
            )}
        </div>

    );
}
 
export default EditCommentaryPage;