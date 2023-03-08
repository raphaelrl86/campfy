import {useEffect, useState} from 'react';
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
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect (() => {
        axios.get(`http://localhost:3001/users/:${userId}`)
        .then(response => {
            let {
            name,
            surname,
            email, 
            address,
        } = response.data
            setName(name)
            setSurname(surname)
            setEmail(email)
            setAddress(address)
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
        }

        axios.put(`http://localhost:3001/users/:${userId}`, updatedUser)
            .then(response => {
                console.log(response.data)
                Swal.fire('Usuário atualizado!')
                navigate('/')


            })
            .catch(err => console.log(err))

    }

    return (         

        <div>
            <h1>Editar usuário</h1>

            {!loading && (

                <form onSubmit={e => handleSubmit(e)}>
                    <div>
                        <input
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nome"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            placeholder="Sobrenome"
                        />
                    </div>

                    <div>
                        <input
                            type='text'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Estado"
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

                    
                    
                </form>
            )}
        </div>
    
     );
    
}
export default EditUserProfilePage;