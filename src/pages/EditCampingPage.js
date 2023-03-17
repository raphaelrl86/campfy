import {useEffect, useState, useContext} from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { AuthContext } from "../context/auth.context"

const EditCampingPage = () => { 

    const { campId } = useParams()
    const [campName, setCampName] = useState('')
    const [campImage, setCampImage] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCoutry] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [convenience, setConvenience] = useState('')
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)
    const {loggedInUser} = useContext(AuthContext)

    const headers = {      
        'Authorization': `Bearer ${loggedInUser.jwt}`
    }
    const navigate = useNavigate()
    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/camps/${campId}`, {headers})
        .then(response => {
            let {
            campName,
            campImage,
            city,
            state,
            country,
            address,
            email,
            description,
            convenience
        } = response.data
            setCampName(campName)
            setCampImage(campImage)
            setCity(city)
            setState(state)
            setCoutry(country)
            setAddress(address)
            setEmail(email)
            setDescription(description)
            setConvenience(convenience)
            setLoading(false)
    })
    }, [campId])
    const handleSubmit = e => {
        e.preventDefault()

        const updatedCamp = {
            campName,
            campImage,
            city,
            state,
            country,
            address,
            email,
            description,
            convenience
        }
        axios.put(`${process.env.REACT_APP_API_URL}/camps/${campId}`, updatedCamp, {headers})
            .then(response => {
                console.log(response.data)
                Swal.fire('Acampamento atualizado!')
                navigate('/')
            })
            .catch(err => console.log(err))
    }
    const handleUpload = e => {
         const uploadData = new FormData()
         setUploading(true)
        console.log(e.target.files[0])
         uploadData.append('campImage', e.target.files[0])
         axios.post(`${process.env.REACT_APP_API_URL}/camps/upload`, uploadData, {headers})
             .then(response => {
                 console.log(response.data)
                 setCampImage(response.data.url)
                 setUploading(false)
                 Swal.fire('Imagem enviada com sucesso!')
             })
             .catch(err => console.log(err))
     }

    return ( 
        <div>
            <div className="py-6 bg-gray-100">
                <div className= 'container-fluid'>
                    <div className='text-center pb-lg-4 pt-5'>
                        <h2 className='h2 mt-2 mb-1'>Editar acampamento</h2>
                    </div>
                </div>
            </div>
            {!loading && (
            <div class="form-group d-flex justify-content-center">
            <div class="container ">                    
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
                            value={campName}
                            onChange={e => setCampName(e.target.value)}
                            placeholder="Nome"
                        />
                    </div>
                    </div>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    </div>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Endereço"
                        />
                    </div>
                    </div>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="Cidade"
                        />
                    </div>
                    </div>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
                            value={state}
                            onChange={e => setState(e.target.value)}
                            placeholder="Estado"
                        />
                    </div>
                    </div>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
                            value={country}
                            onChange={e => setCoutry(e.target.value)}
                            placeholder="País"
                        />
                    </div>
                    </div>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Descrição"
                        />
                    </div>
                    </div>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
                            value={convenience}
                            onChange={e => setConvenience(e.target.value)}
                            placeholder="Comodidades"
                        />
                    </div>
                    </div>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='file'
                            onChange={e => handleUpload(e)}
                            placeholder="Imagem"
                        />
                    </div>
                    </div>                   
                    <button className='btn btn-secondary mb-5' type='submit' disabled={uploading}>Editar</button>                  
                </form>
                </div>
                </div>
            )}
        </div>  
     );
    
}
export default EditCampingPage;