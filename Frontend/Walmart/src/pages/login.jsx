// import React from 'react';
// import { useState } from 'react';

// const Login = () => {
//    const [user,setUser]= useState({
//         email:'',
//         password:''
//     })

//     const [errors] = useState({
//         emailError:"",
//         passwordError:""
//     })

//     const handleChange=(evt)=>{
//         if(evt.target.name=='email'){
//             setUser({...user,email: evt.target.value}) 
//         }else if(evt.target.name=='password'){
//             setUser({...user,password:evt.target.value});

//         }
//     }
//     return (<>







//     </>
//     );
// }

// export default Login;


















import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useForm } from 'react-hook-form'

export const Login = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onChange' });
  const [visible, setVisible] = useState(false)
  //to handle api
  const onSubmit = data => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
          {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
        {errors.email && <p className="text-danger">Invalid Email</p>}

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div>
          <Form.Control type={visible ? "text" : "password"} placeholder="Password"
            {...register('password', { required: true, minLength: 8 })} />
          <div className='p-2' onClick={() => setVisible(!visible)}>
            {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>

        {errors.password && <p className="text-danger">Invalid Password</p>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;