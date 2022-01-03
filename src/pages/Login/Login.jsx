import React, { useEffect, useState } from 'react'
import '../Signup/Signup.css'
import LoginComponent from '../../components/Login/LoginComponent'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        const data = {
            'username':username,
            'password':password
        }
        axios.post('http://127.0.0.1:8000/',data)
        .then((res)=>{
            const token = res.data
            localStorage.setItem('access_token',token.access)
            localStorage.setItem('refresh_token',token.refresh)
            navigate('/home')
        }).catch((err)=>{
            console.log(err)
            

        })
    }
    useEffect(() => {
        if(localStorage.getItem('access_token')){
            navigate('/Home')
        }
    }, [])
    return (
            <div className="modalBackground">
            <Tilt>
            <div className="modalContainer">
                <div className="title">
                    Login
                </div>
                <div className="body">
                    <LoginComponent setUsername={setUsername} setPassword={setPassword}/>
                </div>
                <div className="footer">
                <button
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                    
                    
                </div>
                        <div><button onClick={()=>{navigate('/register')}}>Create an Account?</button></div>
                    
            </div>
            </Tilt>
        </div>
    )
}

export default Login
