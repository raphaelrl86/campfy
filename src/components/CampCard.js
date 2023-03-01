import { Link } from 'react-router-dom'

const CampCard = ({camp}) => {
    return ( 

        <div className='col-3'>
            <div className="card">
                
                <img className="card-img-top" src={camp.campImage} alt="Card image cap" />
                
                <div className="card-body">
                    <h5 className="card-title">{ camp.campName }</h5>
                    <p className="card-text">{camp.description}</p>
                    <Link to={`/camps/${camp._id}`} className="btn btn-primary">View Details</Link>
                </div>

            </div>
        </div>

    );
}
 
export default CampCard;