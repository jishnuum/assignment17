import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../axios/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [values,setValues]=useState({
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
        axiosInstance.post("/user/login",values).then((res)=>{
            console.log(res);
            navigate("/home")
            
        }).catch((error)=>{
            console.log(error);
            alert("something went wrong")
            
        })
        
    }


    return (
        <div className=' loginpage container '>
            <Form onSubmit={handleSubmit} className='loginForm'>

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
                    <p className='mb-0'>Dont have an account? </p>
                    <button className='loginBtn mb-3' onClick={()=>navigate("/")}>Register</button>
                </div>

        </div>
    )
}

export default Login
