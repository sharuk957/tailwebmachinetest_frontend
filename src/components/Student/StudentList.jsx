import React, { useEffect, useState } from 'react'
import { Form} from 'react-bootstrap'
import './Student.css'
import AddStudentPage from '../../pages/Student/AddStudentPage'
import EditStudentPage from '../../pages/Student/EditStudentPage'
import axios from 'axios'

function StudentList() {
    const [token,SetToken] = useState(localStorage.getItem('access_token'))
    const [addStudent,setAddStudent] = useState(false)
    const [editStudent,setEditStudent] = useState(false)
    const [studList,setStudList] = useState('')
    const [list,setList] = useState('')

    const [id,setId] = useState('')
    const [flag,setFlag] = useState(false)
    const [str,setStr] = useState('')
    const onEdit = (id)=>{
        setId(id)
        setEditStudent(true)

    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/student/',{ headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            setStudList(res.data)
            setList(res.data)
        })
        .catch((err)=>{
            console.log('eror')
        })
    }, [flag])
    const onDelete = (id)=>{
        setId(id)
        axios.delete(`http://127.0.0.1:8000/student/${id}/`,{ headers: {"Authorization" : `Bearer ${token}`} })
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
            console.log('eror')
        })
    }
    const searching = ()=>{
        const data = list.filter((item) =>
              item.name.includes(str)
            )
        setStudList(data)
    }
    const onSearch =(value)=>{
        setStr(value)
        searching()
    }
   
    
    return (
        <div>
            <div className='addstudent'>
                <Form.Control type='text' placeholder='Search' className='inputfield' onChange={(e)=>{onSearch(e.target.value)}}/>
                <button onClick={()=>{setAddStudent(true)}}>
                    Add Student
                </button>
            </div>
            <div className='studenttable'>
                <table>
                    <thead>
                    <tr>
                        <th>No:</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Mark</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {(studList)?(studList.map((value,key)=>{ 
                        return(<tr key={key}> 
                            <td>{key}</td>
                            <td>{value['name']}</td>
                            <td>{value['subject']}</td>
                            <td>{value['mark']}</td>
                            <td>
                                <button onClick={()=>{onEdit(value['id'])}}>
                                    Edit
                                </button> 
                                <button onClick={()=>{onDelete(value['id'])}}>
                                    Delete
                                </button>
                            </td>
                        </tr>)
                        
                    })):
                    (<></>)}
                    </tbody>
                </table>
            </div>
            <div>
                {(addStudent)?(<AddStudentPage setStudent={setAddStudent} setFlag={setFlag} flag={flag}/>):(<></>)}
            </div>
            <div>
                {(editStudent)?(<EditStudentPage setEdit={setEditStudent} id={id} setFlag={setFlag} flag={flag}/>):(<></>)}
            </div>
            
        </div>
    )
}

export default StudentList
