import { Link } from 'react-router-dom'
import { useContext } from "react"
import {AuthContext} from '../context/auth.context'

const TesteCard = ({camp}) => {

    const {loggedInUser} = useContext(AuthContext)
    const admin = process.env.REACT_APP_ADMIN_VALIDATION;

    return ( 

            <div className="card m-3">
                <div className="row ">

                    <div className="col-md-7 px-3">
                        <div className="card-block px-6">
                            <h4 className="card-title">{ camp.campName }</h4>
                            <p className="card-text">{camp.description}</p>
                            <p className="card-text">Made for usage, commonly searched for. Fork, like and use it. Just move the carousel div above the col containing the text for left alignment of images</p>
                            <Link to={`/camps/${camp._id}`} className="mt-auto btn btn-primary m-2">Ver detalhes</Link>
                            
                            {loggedInUser.user.email === admin && (
                                <Link to={`/edit/camp/${camp._id}`} className="mt-auto btn btn-primary m-2">Editar</Link> 

                            )}

                        </div>
                    </div>
                
                    <div className="col-md-5">
                        <div id="CarouselTest" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#CarouselTest" data-slide-to="0" className="active"></li>
                                <li data-target="#CarouselTest" data-slide-to="1"></li>
                                <li data-target="#CarouselTest" data-slide-to="2"></li>

                            </ol>

                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <img className="d-block" src="https://picsum.photos/450/300?image=1072" alt=""/>
                            </div>

                            <div className="carousel-item">
                                <img className="d-block" src="https://picsum.photos/450/300?image=855" alt=""/>
                            </div>

                            <div className="carousel-item">
                                <img className="d-block" src="https://picsum.photos/450/300?image=355" alt=""/>
                            </div>

                            <a className="carousel-control-prev" href="#CarouselTest" role="button" data-slide="prev">

                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            
                            <a className="carousel-control-next" href="#CarouselTest" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
            </div>
            
            </div>
            </div>

           
            
            
 

     );
}
 
export default TesteCard;