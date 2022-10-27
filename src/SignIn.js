import './SignIn.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'


export default function SignIn() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                setError(true)
                
                // ..
            });
    }
   

    return (
        <div>
            <section className="vh-100 background">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleLogin}>
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" />

                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" placeholder='Email' onChange={(event) => {setEmail(event.target.value)}} />
                                                        <label className="form-label" htmlFor="form3Example3c"></label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" placeholder='Password' onChange={(event) => {setPassword(event.target.value)}} />
                                                        <label className="form-label" htmlFor="form3Example4c"></label>
                                                    </div>

                                                </div>
                                                {error && (<span className='wrong-cred'>
                                                    Wrong Email or Password!
                                                </span>)}
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw" />

                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" >
                                                    <button type="submit" className="btn btn-dark btn-lg" style={{ color: 'white' }}>SignIn</button>
                                                </div>
                                                <p className="text-center text-muted mt-5 mb-0">Don't an account? <a href="/SignUp" className="fw-bold text-body"><u>Sign-up Here</u></a></p>

                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://media.istockphoto.com/photos/travel-planning-background-picture-id1309040743?b=1&k=20&m=1309040743&s=170667a&w=0&h=eyIzT1oSW2B5gPMPqgybEseIYIUrY96cxPTE_B0ewVs=" className="img-fluid" alt="Sample image" />
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

