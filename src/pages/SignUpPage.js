import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import campIllustration from '../images/campIllustration.png'
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
        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, payload)
            .then(response => {
                console.log(response.data)
                Swal.fire('Usuário criado!')
                navigate('/login')
            })
            .catch(err => console.log(err))
    }
    return ( 
        <div className="SignUpPage">
            <section classNameName="vh-100" style={{backgroundColor: '#013c4c'}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{borderRadius: '25px'}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>                
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            className="form-control"
                                                            id="form3Example1c"
                                                            type="text"
                                                            value={name}
                                                            onChange={e => setName(e.target.value)}
                                                            placeholder="Nome"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            className="form-control"
                                                            id="form3Example1c"
                                                            type="text"
                                                            value={surname}
                                                            onChange={e => setSurname(e.target.value)}
                                                            placeholder="Sobrenome"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            className="form-control"
                                                            id="form3Example3c"
                                                            type="email"
                                                            value={email}
                                                            onChange={e => setEmail(e.target.value)}
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            className="form-control"
                                                            id="form3Example1c"
                                                            type="text"
                                                            value={address}
                                                            onChange={e => setAddress(e.target.value)}
                                                            placeholder="Endereço"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            className="form-control"
                                                            id="form3Example4c"
                                                            type="password"
                                                            value={password}
                                                            onChange={e => setPassword(e.target.value)}
                                                            placeholder="Senha"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type='submit' className="btn btn-primary btn-lg">SignUp</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src={campIllustration}
                                            className="img-fluid" alt="Imagem de cadastro"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                   
            </section>
        </div>
    );
}
export default SignUpPage;