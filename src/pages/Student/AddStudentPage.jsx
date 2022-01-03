import React, { useState } from 'react'
import '../Signup/Signup.css'
import AddStudent from '../../components/Student/AddStudent'
import axios from 'axios'

function AddStudentPage(props) {
    const [token,SetToken] = useState(localStorage.getItem('access_token'))
    const [name,setName] = useState('')
    const [subject,setSubject] = useState('')
    const [mark,setMark] = useState('')
    const handlSubmit = ()=>{
        const data = {
            'name':name,
            'subject':subject,
            'mark':mark
        }
        console.log(data)
        axios.post('http://127.0.0.1:8000/student/',data,{ headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            console.log(res.data)
            props.setStudent(false)
            if(props.flag){
                props.setFlag(false)
            }
            else{
                props.setFlag(true)
            }
        }).catch((err)=>{
            console.log(err)
        })
        
    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    Add Student
                </div>
                <div className="body">
                    <AddStudent setName={setName} setMark={setMark} setSubject={setSubject}/>
                </div>
                <div className="footer">
               
                    <button
                    onClick={handlSubmit}
                >
                    Submit
                </button>
                <button
                    onClick={()=>{props.setStudent(false)}}
                >
                    cancel
                </button>
                    
                </div>
            </div>
        </div>
    )
}

export default AddStudentPage
