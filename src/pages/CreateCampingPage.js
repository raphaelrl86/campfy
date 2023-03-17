import {useState, useContext} from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/auth.context"
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
    const [uploading, setUploading] = useState(false)

    const {loggedInUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const headers = {
           
        'Authorization': `Bearer ${loggedInUser.jwt}`

    }

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

        axios.post(`${process.env.REACT_APP_API_URL}/camps`, newCamp, {headers})
            .then(response => {
                console.log(response.data)
                Swal.fire('Acampamento criado!')
                navigate('/')


            })
            .catch(err => console.log(err))

    }

    const handleUpload = e => {
        const uploadData = new FormData()
        uploadData.append('campImage', e.target.files[0])
        axios.post(`${process.env.REACT_APP_API_URL}/camps/upload`, uploadData, {headers})
        .then(response => {
            setcampImage(response.data.url)
            setUploading(false)
            Swal.fire('upload ok')
        })
        .catch(err => console.log(err))
        
    }

    return ( 
        
        <div>

            <div className="py-6 bg-gray-100">
                <div className= 'container-fluid'>
                    <div className='text-center pb-lg-4 pt-5'>
                        <h2 className='h2 mt-2 mb-1'>Criar acampamento</h2>
                    </div>
                </div>
            </div>

            <div class="form-group d-flex justify-content-center">
                <div class="container ">
                    <form onSubmit={e => handleSubmit(e)}>

                        <div className="text-center mb-3">
                            <div class="form-outline mb-4">
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
                            <div class="form-outline mb-4">
                                <input
                                    className='form-control'
                                    id="loginName"
                                    type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <div className="text-center mb-3">
                            <div class="form-outline mb-4">
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
                            <div class="form-outline mb-4">
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
                            <div class="form-outline mb-4">
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
                            <div class="form-outline mb-4">
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
                            <div class="form-outline mb-4">
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
                            <div class="form-outline mb-4">
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
                            <div class="form-outline mb-4">
                                <input
                                    className="form-control"
                                    id="formFile"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={e => handleUpload(e)}
                                    placeholder="Imagem"
                                />
                            </div>
                        </div>

                        <button className='btn btn-secondary mb-5' type='submit' disabled={uploading}>Criar</button>
                        
                    </form>

                </div>
            </div>

                
                
        </div>
     );
}
 
export default CreateCampingPage;