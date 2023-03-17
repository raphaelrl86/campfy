import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {useContext} from 'react'
import {AuthContext} from '../context/auth.context'
import campIllustration from '../images/campIllustration.png'
import Swal from 'sweetalert2'

const LoginPage = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {refresh, setRefresh} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const payload = {
            email, 
            password
        }
        axios.post(`${process.env.REACT_APP_API_URL}/login`, payload)
            .then(response => {
                localStorage.setItem('loggedInUser', JSON.stringify(response.data))
                Swal.fire('Bem-vindo!')
                setEmail('')
                setPassword('')
                setRefresh(!refresh)
                navigate('/camps')
                
            })
            .catch(err => console.log(err))
    }
    return (
        <div classNameName="container">

            <section className="h-100 gradient-form" style={{backgroundColor: '#013c4c'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                    <div className="row g-0">
                        <div className="col-lg-6">
                        <div className="card-body p-md-5 mx-md-4">
                            <div className="text-center">
                            <img src={campIllustration}
                                style={{width:"185px"}} alt="logo"/>
                            <h4 className="mt-1 mb-5 pb-1">Faça seu login</h4>
                            </div>
                            <form onSubmit={handleSubmit}>
                            <div className="form-outline mb-4">
                                <input 
                                type="email" 
                                id="form2Example11" 
                                className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email" 
                                />
                            </div>
                            <div className="form-outline mb-4">
                                <input 
                                type="password" 
                                id="form2Example22" 
                                className="form-control"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Senha"
                                />                             
                            </div>
                            <div className="text-center pt-1 mb-5 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type='submit'>Log
                                in</button>
                            </div>
                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <p className="mb-0 me-2">Não tem uma conta?</p>
                                <Link to={"/signup"}><button type="button" className="btn btn-outline-danger">Crie uma agora</button></Link>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default LoginPage