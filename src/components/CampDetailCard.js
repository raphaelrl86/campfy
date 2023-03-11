// import {useContext} from 'react'
import  Carousel  from 'nuka-carousel';
// import { Link } from 'react-router-dom'
// import {AuthContext} from '../context/auth.context'


const CampDetailCard = ({camp}) => {

    // const {loggedInUser} = useContext(AuthContext)
    // const admin = process.env.REACT_APP_ADMIN_VALIDATION;
    
    return ( 


        <div className="card m-5">
            
            <Carousel wrapAround={true} zoomScale={0.1} style={{height:"500px"}} >
                <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="card-img-top" alt="Wild Landscape"/>
                <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" className="card-img-top" alt="Wild Landscape"/>
                {/* <img src={campImage} alt='imagem de acampamento' style={{width:"100vw", height:"500px", objectFit: 'cover'}}/>
                <img src={coffeeCampImage} alt='imagem de xícaras de café em acampamento'style={{width:"100vw", height:"500px", objectFit: 'cover'}} />
                <img src={bonfireCampImage} alt='imagem de fogueira em acampamento' style={{width:"100vw", height:"500px", objectFit: 'cover'}} /> */}
            </Carousel>
            
            <div className="card-body">
                <h5 className="card-title">{camp.campName}</h5>
                <p className="card-text">{camp.description}</p>
                <p className="card-text">
                <small className="text-muted">Última atualização em {new Date (camp.updatedAt).toLocaleString('pt-br')}</small>
                </p>
            </div>
        </div>


    );
}
 
export default CampDetailCard;