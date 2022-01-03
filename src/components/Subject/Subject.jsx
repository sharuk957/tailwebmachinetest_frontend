import React, { useEffect, useState } from 'react'
import { Form} from 'react-bootstrap'
import './Subject.css'
import axios from 'axios'

function Subject() {
    const [addSubject,SetAddSubject] = useState('')
    const [token,SetToken] = useState(localStorage.getItem('access_token'))
    const [flag,setFlag] = useState(true)
    const onAdd = ()=>{
        console.log(token)
        const data = {'subject':addSubject}
        axios.post('http://127.0.0.1:8000/student/subject/',data,
        { headers: {"Authorization" : `Bearer ${token}`} })
       .then((res)=>{
           console.log(res.data)
           if(flag){
            setFlag(false)
        }
        else{
            setFlag(true)
        }
       })
       .catch((err)=>{
           console.log("error")
       })
    }
    const [subjectList,setSubjectList] = useState('')
    useEffect(() => {
       axios.get('http://127.0.0.1:8000/student/subject/',{ headers: {"Authorization" : `Bearer ${token}`} })
       .then((res)=>{
           console.log(res.data)
           setSubjectList(res.data)

       })
       .catch((err)=>{
           console.log("error")
       })
    }, [flag])
    return (
        <>
            <div className='addsubject'>
                <Form.Control type='text' placeholder='Subject' name='subject' className='inputfield' onChange={(e)=>{SetAddSubject(e.target.value)}}/>
                <button onClick={onAdd}>ADD</button>
            </div>
            <div className='subjectable'>
                <table>
                    <thead>
                    <tr>
                        <th>subject_id</th>
                        <th>Subjectname</th>
                    </tr>
                    </thead>
                    <tbody>
                        {(subjectList)?(
                            subjectList.map((value,key)=>{ return(<tr key={key}>
                                <td>{key}</td>
                                <td>{value['subject']}</td>
                            </tr>)
                                
                                
                            })
                        ):(<></>)}
                    </tbody>
                </table>
            </div>
        </>
        
    )
}

export default Subject
