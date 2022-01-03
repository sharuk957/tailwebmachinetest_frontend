import React from 'react'
import '../Signup/Registration.css'
import { Container, Form, Row } from 'react-bootstrap'
import Tilt from 'react-parallax-tilt'

function LoginComponent(props) {
    return (
        <Tilt>
        <div>
            <Container>
            <Row>
                <Form.Control type='text' placeholder='Username' name='username' className='inputfield' onChange={(e)=>{props.setUsername(e.target.value)}}/>
            </Row>
            <Row>
                <Form.Control type='password' placeholder='Password' name='password' className='inputfield' onChange={(e)=>{props.setPassword(e.target.value)}}/>
            </Row>
        </Container>
        </div>
        </Tilt>
    )
}

export default LoginComponent
