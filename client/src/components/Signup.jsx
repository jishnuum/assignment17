import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../axios/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setValues((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        // console.log(values);
        axiosInstance.post("/user/register",values).then((res)=>{
            console.log(res);
            navigate("/home")
            
        }).catch((error)=>{
            console.log(error);
            alert('something went wrong')
            
        })
        
    }


    return (
        

        <div className="signuppage container">
                    <div className='formSection'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" name='name' onChange={handleChange} />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email'  onChange={handleChange} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"  name='password' onChange={handleChange}/>
                </Form.Group>
 


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="loginNavigate  g-2">
                    <p className='mb-0'>Already you have an account ? </p>
                    <button className='loginBtn mb-3' onClick={()=>navigate("/login")}>login</button>
                </div>

        </div>
        </div>
    )
}

export default Signup
