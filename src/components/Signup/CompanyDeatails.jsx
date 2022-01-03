import { Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react';
import './Registration.css'

function CompanyDeatails(props) {
  return (
    <div>
        <Container>
            <Row>
                <Form.Control type='text' placeholder='User Name' name='username' className='inputfield' value={props.username} onChange={(e)=>{props.setUserName(e.target.value)}}/>
            </Row>
            <Row>
                <Form.Control type='password' placeholder='Password' name='password' className='inputfield' value={props.password} onChange={(e)=>{props.setPassword(e.target.value)}}/>
            </Row>
            <Row>
                <Form.Control type='password' placeholder='Confirm Password' name='confirm_password' className='inputfield' value={props.confirm_password} onChange={(e)=>{props.setConfirmPassword(e.target.value)}}/>
            </Row>
        </Container>
    </div>
  );
}

export default CompanyDeatails;
