import { Link } from 'react-router-dom'
import { useContext } from "react"
import {AuthContext} from '../context/auth.context'


const CampCard = ({deleteCamp, camp}) => {

    const {loggedInUser} = useContext(AuthContext)
    const admin = process.env.REACT_APP_ADMIN_VALIDATION;

    return ( 

            <div className="card m-3">
                <div className="row align-items-center">

                    <div className="col-md-7 px-3 ">
                        <div className="card-block px-6 ">
                            <h4 className="card-title mt-2 p-2">{ camp.campName }</h4>
                            <p className="card-text">{camp.description}</p>
                            <Link to={`/camps/${camp._id}`} className="mt-auto btn btn-primary m-2">Ver detalhes</Link>
                            
                            {loggedInUser.user.email === admin && (
                                <Link to={`/edit/camp/${camp._id}`} className="mt-auto btn btn-primary m-2">Editar</Link> 
                            )}

                            {loggedInUser.user.email === admin && (
                                <button className="mt-auto btn btn-danger m-2" onClick={() => deleteCamp(camp._id)}> Excluir</button>
                            )}

                        </div>
                    </div>
                
                    <div className="col-md-5">


                        <div className="carousel-item active">
                            <img className="d-block" src={ camp.campImage }  style={{width:"500px", height:"300px", objectFit: 'cover'}} alt=""/>
                        </div>

                    </div>

                
            </div>
            
    </div>
            

           
            
            
 

     );
}
 
export default CampCard;