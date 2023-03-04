import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import SignUpPage from './SignUpPage'

const LoginPage = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = e => {
        e.preventDefault()

        const payload = {
            email, 
            password
        }

        axios.post(`${process.env.REACT_APP_API_URL}/login`, payload)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                alert('Login Ok')
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
                            <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'}
                                style={{width:"185px"}} alt="logo"/>
                            <h4 className="mt-1 mb-5 pb-1">Frase de efeito</h4>
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
                                placeholder="Email"
                                />
                                
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1">
                                <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type='submit'>Log
                                in</button>
                            </div>

                            <div className="d-flex align-items-center justify-content-center pb-4">
                                <p className="mb-0 me-2">Don't have an account?</p>
                                <Link to={"/signup"}><button type="button" className="btn btn-outline-danger">Create new</button></Link>
                            </div>

                            </form>

                        </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">We are more than just a company</h4>
                            <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>











            {/* <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                </div>
                <div>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type="submit">Login</button>
            </form> */}
        </div>
    )
}

export default LoginPage