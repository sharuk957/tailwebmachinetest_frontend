import React, { useEffect } from 'react'
import UserDeatails from '../../components/Signup/UserDeatails'
import CompanyDeatails from '../../components/Signup/CompanyDeatails'
import './Signup.css'
import {useState} from 'react'
import axios from 'axios'
import Tilt from 'react-parallax-tilt'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [userRegister,setUserRegister] =useState(false)
    const [first_name,setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [last_name,setLastName] = useState('')
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [confirm_password,setConfirmPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = ()=>{
        const data = {
            'username':username,
            'password':password,
            'first_name':first_name,
            'last_name':last_name,
            'email':email
        }
        axios.post('http://127.0.0.1:8000/api/registration/',data)
        .then((res)=>{
            console.log(res.data)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
            

        })
    }
    const handleContinue = ()=>{
        setUserRegister(true)
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
                    Register
                </div>
                <div className="body">
                    {(
                        userRegister
                    )?
                    (
                    <CompanyDeatails setConfirmPassword={setConfirmPassword} setPassword={setPassword} setUserName={setUserName} confirm_password={confirm_password} password={password} username={username}/>
                    ):
                    (
                    <UserDeatails setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} email={email} first_name={first_name} last_name={last_name}/>
                    )}
                    
                </div>
                <div className="footer">
                {(userRegister)?(<><button
                        onClick={() => {setUserRegister(false)
                        }}
                    >
                        Back
                    </button>
                    <button
                    onClick={handleSubmit}
                >
                    Submit
                </button></>):(<button
                        onClick={handleContinue}
                    >
                        Continue
                    </button>)}
                    
                </div>
                <div><button onClick={()=>{navigate('/')}}>Already have an Account?</button></div>

            </div>
            </Tilt>
        </div>
    )
}

export default Signup
