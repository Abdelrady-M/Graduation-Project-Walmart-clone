// Login.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useForm } from 'react-hook-form';
import './login.css'; // Import the CSS file

export const Login = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onChange' });
    const [visible, setVisible] = useState(false);

    // to handle api
    const onSubmit = data => console.log(data);

    return (
        <div className="login-container">
            <Form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="login-input" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                        {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
                    {errors.email && <p className="login-error">Invalid Email</p>}
                </Form.Group>

                <Form.Group className="login-input" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <div>
                        <Form.Control type={visible ? "text" : "password"} placeholder="Password"
                            {...register('password', { required: true, minLength: 8 })} />
                        <div className='p-2' onClick={() => setVisible(!visible)}>
                            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </div>
                    </div>
                    {errors.password && <p className="login-error">Invalid Password</p>}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;
