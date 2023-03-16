import { Link, useNavigate, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../context/auth.context"
import axios from 'axios'
import Swal from 'sweetalert2'

const CommentaryCard = ({commentary, deleteCommentary, updateCommentary}) => {

    const [rating, setRating] = useState()
    const [setCommentary] = useState()
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
        axios.get(`${process.env.REACT_APP_API_URL}/commentary/${commentary._id}`, {headers})
        .then(response => {
            let {
                commentary
            } = response.data 
                setCommentary(commentary)
        })
    })/*, [campId])*/

    const handleSubmit = e => {
        e.preventDefault()

        const updateCommentary = {
            commentary,
            rating
        }

        axios.put(`${process.env.REACT_APP_API_URL}/commentary/${commentary._id}`, {updateCommentary}, {headers})
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

        <div classNameName='col-3'>
            {/* <div classNameName="card">  //TO-DO vamos trocar para que o card tenha input ao invés de campos de texto
                <hr class="hr hr-blurry"/>          
                <div classNameName="card-body">
                    <h5 classNameName="card-title">{ commentary.user.name } { commentary.user.surname }</h5>
                    <p classNameName="card-text">{ commentary.commentary }</p>
                    <p classNameName="card-text">{ commentary.rating }</p>
                    <button className="btn btn-primary m-1"onClick={() => updateCommentary(commentary._id)}> Editar </button>
                    <button className="btn btn-danger m-1" onClick={() => deleteCommentary(commentary._id)}> Deletar </button>
                </div>
            </div> */}

                <div classNameName="card">
                <hr class="hr hr-blurry"/>          
                <div classNameName="card-body">
                    <form onSubmit={ handleSubmit }>
                        <h5 classNameName="card-title">{ commentary.user.name } { commentary.user.surname }</h5>
                        <input 
                            type="text" 
                            classNameName="form-control m-2 block px-2" 
                            value={commentary.commentary}
                            onChange= {e => setCommentary(e.target.value)}
                        />
                        <input 
                            type="text" 
                            classNameName="form-control m-2 block px-2" 
                            value={commentary.rating}
                            onChange= {e => setRating(e.target.value)}
                        />
                        <button className="btn btn-primary m-1"onClick={() => updateCommentary(commentary._id)}> Editar </button>
                        <button className="btn btn-danger m-1" onClick={() => deleteCommentary(commentary._id)}> Deletar </button>
                    </form>
                </div>
            </div>

            {/* <div>
            <form onSubmit={e => handleInputChange(e)}>
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
            </div> */}


            {/* estrutura novo card
            
            <section style={{backgroundColor: '#ad655f'}}>
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center">
                    <div className="col-md-12 col-lg-10">
                        <div className="card text-dark">
                        <div className="card-body p-4">
                            <h4 className="mb-0">Recent comments</h4>
                            <p className="fw-light mb-4 pb-2">Latest Comments section by users</p>

                            <div className="d-flex flex-start">
                            <img className="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp" alt="avatar" width="60"
                                height="60" />
                            <div>
                                <h6 className="fw-bold mb-1">Maggie Marsh</h6>
                                <div className="d-flex align-items-center mb-3">
                                <p className="mb-0">
                                    March 07, 2021
                                    <span className="badge bg-primary">Pending</span>
                                </p>
                                <Link to="#!" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></Link>
                                <Link to="#!" className="link-muted"><i className="fas fa-redo-alt ms-2"></i></Link>
                                <Link to="#!" className="link-muted"><i className="fas fa-heart ms-2"></i></Link>
                                </div>
                                <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and
                                scrambled it.
                                </p>
                            </div>
                            </div>
                        </div>

                        <hr className="my-0" />

                        <div className="card-body p-4">
                            <div className="d-flex flex-start">
                            <img className="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp" alt="avatar" width="60"
                                height="60" />
                            <div>
                                <h6 className="fw-bold mb-1">Lara Stewart</h6>
                                <div className="d-flex align-items-center mb-3">
                                <p className="mb-0">
                                    March 15, 2021
                                    <span className="badge bg-success">Approved</span>
                                </p>
                                <a href="#!" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                                <a href="#!" className="text-success"><i className="fas fa-redo-alt ms-2"></i></a>
                                <a href="#!" className="link-danger"><i className="fas fa-heart ms-2"></i></a>
                                </div>
                                <p className="mb-0">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                has roots in a piece of classNameical Latin literature from 45 BC, making it
                                over 2000 years old. Richard McClintock, a Latin professor at
                                Hampden-Sydney College in Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                the cites.
                                </p>
                            </div>
                            </div>
                        </div>

                        <hr className="my-0" style={{height:"1px"}}/>

                        <div className="card-body p-4">
                            <div className="d-flex flex-start">
                            <img className="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp" alt="avatar" width="60"
                                height="60" />
                            <div>
                                <h6 className="fw-bold mb-1">Alexa Bennett</h6>
                                <div className="d-flex align-items-center mb-3">
                                <p className="mb-0">
                                    March 24, 2021
                                    <span className="badge bg-danger">Rejected</span>
                                </p>
                                <a href="#!" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                                <a href="#!" className="link-muted"><i className="fas fa-redo-alt ms-2"></i></a>
                                <a href="#!" className="link-muted"><i className="fas fa-heart ms-2"></i></a>
                                </div>
                                <p className="mb-0">
                                There are many variations of passages of Lorem Ipsum available, but the
                                majority have suffered alteration in some form, by injected humour, or
                                randomised words which don't look even slightly believable. If you are
                                going to use a passage of Lorem Ipsum, you need to be sure.
                                </p>
                            </div>
                            </div>
                        </div>

                        <hr className="my-0" />

                        <div className="card-body p-4">
                            <div className="d-flex flex-start">
                            <img className="rounded-circle shadow-1-strong me-3"
                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp" alt="avatar" width="60"
                                height="60" />
                            <div>
                                <h6 className="fw-bold mb-1">Betty Walker</h6>
                                <div className="d-flex align-items-center mb-3">
                                <p className="mb-0">
                                    March 30, 2021
                                    <span className="badge bg-primary">Pending</span>
                                </p>
                                <a href="#!" className="link-muted"><i className="fas fa-pencil-alt ms-2"></i></a>
                                <a href="#!" className="link-muted"><i className="fas fa-redo-alt ms-2"></i></a>
                                <a href="#!" className="link-muted"><i className="fas fa-heart ms-2"></i></a>
                                </div>
                                <p className="mb-0">
                                It uses a dictionary of over 200 Latin words, combined with a handful of
                                model sentence structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is therefore always free from
                                repetition, injected humour, or non-characteristic words etc.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section> */}



        </div>

    );
}
 
export default CommentaryCard;