import {useEffect, useState, useContext} from 'react';
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import { AuthContext } from "../context/auth.context"



const EditUserProfilePage = () => { 

    const { userId } = useParams()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const [loading, setLoading] = useState(true)
    const [uploading, setUploading] = useState(false)
    

    const {loggedInUser} = useContext(AuthContext)

    const navigate = useNavigate()

    const headers = {
           
        'Authorization': `Bearer ${loggedInUser.jwt}`

    }

    useEffect (() => {
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {headers})
        .then(response => {
            let {
            name,
            surname,
            email,
            address,
            profileImage
        } = response.data
            setName(name)
            setSurname(surname)
            setEmail(email)
            setAddress(address)
            setProfileImage(profileImage)
            setLoading(false)
    })
    }, [userId])
    
    const handleSubmit = e => {
        e.preventDefault()

        const updatedUser = {
            name,
            surname,
            email, 
            address,
            profileImage
        }

        axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}`, updatedUser, {headers})
            .then(response => {
                console.log(response.data)
                Swal.fire('Usuário atualizado!')
                navigate('/')


            })
            .catch(err => console.log(err))

    }

    const handleUpload = e => {
        const uploadData = new FormData()
        setUploading(true)
        uploadData.append('profileImage', e.target.files[0])
        axios.post(`${process.env.REACT_APP_API_URL}/users/upload`, uploadData, {headers})
        .then(response => {
            setProfileImage(response.data.url)
            Swal.fire('Foto enviada!')
            setUploading(false)
        })
        .catch(err => console.log(err))
    }

    return (         

        <div>
            <h1>Editar usuário</h1>

            {!loading && (

            <div class="form-group d-flex justify-content-center">
            <div class="container "> 

                <form onSubmit={e => handleSubmit(e)}>
                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nome"
                        />
                    </div>

                    <div>
                        <input
                            className='form-control'
                            type='text'
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            placeholder="Sobrenome"
                        />
                    </div>
                    </div>

                    <div className="text-center mb-3">
                    <div className="form-outline mb-4">
                        <input
                            className='form-control'
                            type='text'
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
                            type='file'
                            onChange={e => handleUpload(e)}
                            placeholder="Foto perfil"
                        />
                    </div>
                    </div>

                    <button className='btn btn-secondary mb-5' type='submit' disabled={uploading}>Salvar alterações</button>
                    
                </form>

                </div>
                </div>
            )}
        </div>
    
     );
    
}
export default EditUserProfilePage;