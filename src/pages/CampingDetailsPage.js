import {useEffect, useState} from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import CommentaryCard from '../components/CommentaryCard';


const CampingDetailsPage = props => { 

    const [camp, setCamp] = useState(null)

    const { campId } = useParams()

    const token = localStorage.getItem('token')

    const headers = {
        'Authorization': 'Bearer ' + token
    }

    useEffect (() => {
        axios.get(`http://localhost:3001/camps/${campId}`, {headers})
        .then(response => {
           setCamp(response.data)
    })
        .catch(err => console.log(err))
    }, [])

    if(!camp) {
        return <p>Loading...</p>
    }


    
    return ( 
        <div>
            <h1>Página de detalhe de camping</h1>

            
            

            <div className="row">
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
            </div>
            <div className="row">
                <h2>Camp</h2>
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