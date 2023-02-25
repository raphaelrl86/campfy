import {useState} from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const CreateCampingPage = () => { 

    const [campName, setCampName] = useState('')
    const [campImage, setcampImage] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCoutry] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')
    const [convenience, setConvenience] = useState('')

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const newCamp = {
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

        axios.post('http://localhost:3001/camps', newCamp)
            .then(response => {
                console.log(response.data)
                Swal.fire('Acampamento criado!')
                navigate('/')


            })
            .catch(err => console.log(err))

    }

    return ( 
        <div>
            <h1>Criar camping</h1>
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
                            placeholder="País"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Endereço"
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
                            placeholder="Descrição"
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
                    <button type='submit'>Criar</button>
                    
                </form>
        </div>
     );
}
 
export default CreateCampingPage;