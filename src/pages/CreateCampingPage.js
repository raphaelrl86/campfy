import {useState} from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreateCampingPage = () => { 

    const [campName, setCampName] = useState('')
    const [campImage, setcampImage] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCoutry] = useState('')
    const [address, setAddress] = useState('')
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
            description,
            convenience
        }

        axios.post('http://localhost:3001/camps', newCamp)
            .then(response => {
                console.log(response.data)

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
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={campImage}
                            onChange={e => setcampImage(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={state}
                            onChange={e => setState(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={country}
                            onChange={e => setCoutry(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={convenience}
                            onChange={e => setConvenience(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Criar</button>
                    
                </form>
        </div>
     );
}
 
export default CreateCampingPage;