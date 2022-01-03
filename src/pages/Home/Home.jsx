import React, { useEffect, useState } from 'react'
import './Home.css'
import Subject from '../../components/Subject/Subject'
import StudentList from '../../components/Student/StudentList'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Home() {
    const [choice,setChoice] = useState(false)
    const navigate = useNavigate()
    const onLogout = ()=>{
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        navigate('/')
    }
    useEffect(() => {
        if(!localStorage.getItem('access_token')){
            navigate('/')
        }
        
    }, [])
    return (
        <div className='outline'>
            <div>
                <h1>Welcome</h1>
            </div>
            <div className='choice'>
                <button onClick={()=>{setChoice(false)}}>
                    Students
                </button>
                <button onClick={()=>{setChoice(true)}}>
                    Subject
                </button>
            </div>
            <div>
                
                {(choice)?(
                    <>
                        <div className='subheading'>
                            <h2>SUBJECT</h2>
                        </div>
                        <div>
                            <Subject/>
                        </div>
                    </>
                    
                ):(
                    <>
                        <div className='subheading'>
                            <h2>STUDENT</h2>
                        </div>
                        <div>
                            <StudentList/>
                        </div>
                    </>
                )}

                
                
            </div>
            
            <div className='footer'><button onClick={onLogout}>Logout</button></div>
        </div>
    )
}

export default Home
