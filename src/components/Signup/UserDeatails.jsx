import { Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react';
import './Registration.css'


function UserDeatails(props) {
  return (
    <div>
        <Container>
            <Row>
                <Form.Control type='text' placeholder='FirstName' name='first_name' className='inputfield' value={props.first_name} onChange={(e)=>{props.setFirstName(e.target.value)}}/>
            </Row>
            <Row>
                <Form.Control type='text' placeholder='Lastname' name='last_name' className='inputfield' value={props.last_name} onChange={(e)=>{props.setLastName(e.target.value)}}/>
            </Row>
            <Row>
                <Form.Control type='text' placeholder='Email' name='email' className='inputfield' value={props.email} onChange={(e)=>{props.setEmail(e.target.value)}}/>
            </Row>
        </Container>
    </div>
  );
}

export default UserDeatails;
