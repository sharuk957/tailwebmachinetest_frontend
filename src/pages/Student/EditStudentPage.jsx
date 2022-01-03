import React, { useState,useEffect } from 'react'
import '../Signup/Signup.css'
import EditStudent from '../../components/Student/EditStudent'
import axios from 'axios'

function EditStudentPage(props) {
    const [token,SetToken] = useState(localStorage.getItem('access_token'))
    const [name,setName] = useState('')
    const [subject,setSubject] = useState('')
    const [mark,setMark] = useState('')
    const handleSubmit = ()=>{

        const data = {
            'name':name,
            'subject':subject,
            'mark':mark
        }
        axios.put(`http://127.0.0.1:8000/student/${props.id}/`,data,{ headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            console.log(res.data)
            props.setEdit(false)
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
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/student/${props.id}/`,{ headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            const instance = res.data
            setMark(instance.mark)
            setName(instance.name)
            setSubject(instance.subject)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="title">
                    Edit Student
                </div>
                <div className="body">
                    <EditStudent setName={setName} setMark={setMark} setSubject={setSubject} name={name} subject={subject} mark={mark}/>
                    
                </div>
                <div className="footer">
               
                    <button
                    onClick={handleSubmit}
                >
                    Submit
                </button>
                <button
                    onClick={()=>{props.setEdit(false)}}
                >
                    cancel
                </button>
                    
                </div>
            </div>
        </div>
    )
}

export default EditStudentPage
