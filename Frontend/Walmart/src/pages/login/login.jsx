import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
//import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useForm } from 'react-hook-form';
import './login.css'; // Import the CSS file

export const Login = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: 'onChange' });
    //const [visible, setVisible] = useState(false);

    // to handle api
    const onSubmit = data => console.log(data);

    return (<>
        <Container className='align-center'>
            <Row className='col-md-5 mx-auto'>
                <header className="h d-b ">
                    <a aria-atomic="true" aria-label="Walmart. Save Money. Live Better. Home Page" href="/">
                        <img loading="lazy" src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png" alt="Walmart logo with link to homepage."
                            height="65" width="64" />
                    </a>
                    <h1 className='h'>Sign in or create your account</h1>
                    <p className="mb4 m0 fontp">Not sure if you have an account?
                        <br /> Enter your email and we’ll check for you.
                    </p>
                </header>


                <Form className='mt-1 mp-1'>

                    <Form.Group className="mb-3" >

                        <Form.Label className='f'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" as="textarea" rows={3} />
                    </Form.Group>
                    <button className='buttonSub' type="submit" id="login-continue-button" >Continue</button>
                    <p className="para">Securing your personal information is our priority.
                        <br /><a className="dark-gray a" target="_blank" href="https://corporate.walmart.com/privacy-security">See our privacy measures.
                        </a></p>
                </Form>

            </Row>
        </Container>
<span className='footspan'>
        <footer  className="foot" style={{ maxWidth: '1280px' }}>
            <div className=" ml-0 mt-4 pb-5 pt-1  flex-shrink-0">© 2024 Walmart. All Rights Reserved.</div>
            <ul className="u list mt-4 mb-0" style={{ flexBasis: '100%' }}>
                <li className="D ml-2">
                    <button className=" footbtn bg-transparent mb-3 ml-3 ml-4-l" type="button" style={{ color: 'rgb(70, 71, 74)', marginLeft: '0px' }}>Give feedback</button>
                </li>
                <li className=" D ml-2">
                    <a className="no-underline tag mb-3 flex items-center" target="_blank" href="https://corporate.walmart.com/privacy-security/california-privacy-rights">
                        <span>CA Privacy Rights</span>
                    </a>
                </li>
                <li className="D ml-4">
                    <a className="no-underline tag mb-3 flex items-center" target="_blank" href="https://www.walmart.com/account/api/ccpa-intake?native=false&amp;app=gm&amp;type=sod">
                        <img loading="lazy" width="29" height="14" src="//i5.walmartimages.com/dfwrs/76316474-d730/k2-_3c5ba298-4f19-46be-9fc3-ac49225d19bd.v1.png" className="mr-1" />
                        <span className="self-baseline">Your Privacy Choices</span>
                    </a>
                </li>
                <li className="D ml-4">
                    <a className="no-underline mb-3 flex items-center" target="_blank" href="https://corporate.walmart.com/privacy-security/walmart-privacy-notice#what-type-of-information-do-we-collect-and-how-do-we-collect-it">
                        <span className="">Notice at Collection</span>
                    
                    </a>
                </li>
                <li className=" D ml-4">
                    <a className="no-underline mb-3 flex items-center"  target="_blank" href="https://www.walmart.com/account/api/ccpa-intake?native=false&amp;app=gm&amp;type=access">
                        <span>Request My Personal Information</span>
                        
                    </a>
                </li>
                <li className="D ml-4">
                    <a className="no-underline mb-3 flex items-center" target="_blank" href="https://corporate.walmart.com/california-transparency">
                        <span className="">California Supply Chains Act</span>
                    </a>
                    </li>
            </ul>
        </footer>
        </span>







    </>
    );
}

export default Login;
