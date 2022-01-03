import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import '../Signup/Registration.css'

function AddStudent(props) {
    const [subjectList,setSubjectList] = useState('')
    const [token,SetToken] = useState(localStorage.getItem('access_token'))

    useEffect(() => {
       axios.get('http://127.0.0.1:8000/student/subject/',{ headers: {"Authorization" : `Bearer ${token}`} })
       .then((res)=>{
           setSubjectList(res.data)
       })
       .catch((err)=>{
           console.log("error")
       })
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Form.Control type='text' placeholder='Name' name='name' className='inputfield' onChange={(e)=>{props.setName(e.target.value)}}/>
                </Row>
                <Row>
                    <Form.Select aria-label="Subject" name='subject' className='selectfield' onChange={(e)=>{props.setSubject(e.target.value)}}>
                        <option>Subject</option>
                        {(subjectList)?(
                            subjectList.map((value,key)=>{return(<option key={key} value={value['subject']}>{value['subject']}</option>)
                                
                            })
                        ):(<></>)}
                    </Form.Select>
                </Row>
                <Row>
                    <Form.Control type='text' placeholder='Mark' name='mark' className='inputfield' onChange={(e)=>{props.setMark(e.target.value)}}/>
                </Row>
            </Container>
        </div>
    )
}

export default AddStudent
