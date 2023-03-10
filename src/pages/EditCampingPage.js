import {useEffect, useState, useContext} from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { AuthContext } from "../context/auth.context"



const EditCampingPage = () => { 

    const { campId } = useParams()

    const [campName, setCampName] = useState('')
    const [campImage, setcampImage] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCoutry] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [convenience, setConvenience] = useState('')
    const [loading, setLoading] = useState(true)
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
            setcampImage(campImage)
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

    return ( 

        

        <div>
            <h1>Editar camping</h1>

            {!loading && (

                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <input
                            type='text'
                            value={campName}
                            onChange={e => setCampName(e.target.value)}
                            placeholder="Nome"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={campImage}
                            onChange={e => setcampImage(e.target.value)}
                            placeholder="Imagem"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder="Cidade"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={state}
                            onChange={e => setState(e.target.value)}
                            placeholder="Estado"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={country}
                            onChange={e => setCoutry(e.target.value)}
                            placeholder="Pa??s"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Endere??o"
                        />
                    </div>

                    <div>
                        <input
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="e-mail"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Descri????o"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={convenience}
                            onChange={e => setConvenience(e.target.value)}
                            placeholder="Comodidades"
                        />
                    </div>
                    <button type='submit'>Editar</button>
                    
                </form>
            )}
        </div>
    
     );
    
}
export default EditCampingPage;