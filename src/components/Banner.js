import {Link} from 'react-router-dom'

const Banner = () => {
    
    return ( 

        <div className="row">
            <div className="col-sm-6 p-5">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/signup" className="btn btn-primary">Registre-se</Link>
                </div>
                </div>
            </div>
            <div className="col-sm-6 p-5">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <Link to="/camps" className="btn btn-primary">Veja os campings!</Link>
                </div>
                </div>
            </div>
        </div>

    );
}
 
export default Banner;