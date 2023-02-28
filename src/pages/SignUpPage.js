import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const SignUpPage = props => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit =e => {
        e.preventDefault()

        const payload = {
            name,
            surname,
            email, 
            address,
            password,
        }

        axios.post('http://localhost:3001/sign-up', payload)
            .then(response => {
                console.log(response.data)
                Swal.fire('Usuário criado!')
                navigate('/')

            })
            .catch(err => console.log(err))
    }


    return ( 

        <div>

            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <input 
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nome"
                    />
                </div>

                <div>
                    <input 
                            type="text"
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            placeholder="Sobrenome"
                    />
                </div>

                <div>
                    <input 
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email"
                    />
                </div>

                <div>
                    <input 
                            type="text"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Endereço"
                    />
                </div>

                <div>
                    <input 
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Senha"
                    />
                </div>

                <button type='submit'>Sign-Up</button>

            </form>

        </div>
    );
}
 
export default SignUpPage;