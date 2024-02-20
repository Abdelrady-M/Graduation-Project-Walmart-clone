
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useForm } from 'react-hook-form';

export const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onChange' });
  const [visible, setVisible] = useState(false);

  const onSubmit = (data) => {
    // Handle registration logic here
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} >

        {/* name */}
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" {...register("name", { required: true })} />
        {errors.name && <p className="text-danger">Name is required</p>}
      </Form.Group>

        {/* Username */}
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" {...register("username", { required: true })} />
        {errors.username && <p className="text-danger">Username is required</p>}
      </Form.Group>

        {/* Email */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
        {errors.email && <p className="text-danger">Invalid Email</p>}
      </Form.Group>
         {/* password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div>
          <Form.Control type={visible ? "text" : "password"} placeholder="Password" {...register('password', { required: true, minLength: 8 })} />
          <div className='p-2' onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
        {errors.password && <p className="text-danger">Invalid Password</p>}
      </Form.Group>
      {/* Confirm Passwor */}
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type={visible ? "text" : "password"} placeholder="Confirm Password" {...register('confirmPassword', { required: true, validate: (value) => value === watch('password') })} />
        <div className='p-2' onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        {errors.confirmPassword && <p className="text-danger">Passwords do not match</p>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default Register;
