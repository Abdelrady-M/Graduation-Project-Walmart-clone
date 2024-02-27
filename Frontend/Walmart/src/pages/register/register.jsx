import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import './register.css'; // Import the CSS file

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
                    <h1 className='h'>Create your Walmart account</h1>
                </header>
                <div className="flex mb-2 div2">
                    <p className='mb-0'>Email address</p>
                    <div>
                        <span className="mt-0">alshimaaa529@gmail.com</span>
                        <a className="ml-2 underline" style={{ color: "black" }} href="/account/login">Change</a>
                    </div>
                </div>

                <Form className='mt-1 mp-1'>
                    <label htmlFor="firstName" style={{ fontWeight: "bold" }}>First name</label>
                    <div className='inContainer'>
                        <div className='indiv'>
                            <input type="text" maxLength="25" name="firstName" className="in" value="" />
                        </div>
                    </div>

                    <label htmlFor="lastName" style={{ fontWeight: "bold" }}>Last name</label>
                    <div className='inContainer'>
                        <div className='indiv'>
                            <input type="text" maxLength="25" name="lastName" className="in" value="" />
                        </div>
                    </div>

                    <label htmlFor="password" style={{ fontWeight: "bold" }}>password</label>
                    <div className='inContainer'>
                        <div className='indiv'>
                            <input type="password" maxLength="8" name="password" className="in" value="" />
                            <span className="showS">
                                <button className="showbtn" type="button">Show</button></span>
                        </div>

                    </div>

                    {/* checkboxes part */}
                    <div>

                        <div className='flex pt-2 pb-2'>
                            <label htmlFor="ld_checkbox_0" className='checkLabel add-i'>
                                <input className="check-in mr-1" id="ld_checkbox_0" type="checkbox" /> 
                                {/* <i className='i'></i> */}
                                Keep me signed in
                        </label>
                        </div>

                        <div className='pb-2 pt-2 flex'>

                            <label htmlFor="ld_checkbox_1" className='checkLabel add-i'>
                                <input className="check-in" id="ld_checkbox_0" type="checkbox" />
                                {/* <i className='i'></i> */}
                            </label>
                            <label className="ml-2 v-top mr-1">Send me emails about new arrivals, hot items,<br /> daily savings, & more.</label>
                        </div>
                    </div>
                    <p className="para0">By clicking Create Account, you acknowledge you have read and agreed to our
                        <a style={{ color:"black"}} target="_blank" href="https://help.walmart.com/app/answers/detail/a_id/8">Terms of Use</a>
                        <span> and </span>
                        <a style={{ color: "black" }} target="_blank" href="http://corporate.walmart.com/privacy-security/walmart-privacy-policy">Privacy Policy</a>.
                    </p>




                    <button className='buttonSub' type="submit" id="login-continue-button" >Continue</button>
                    <p className="para">Securing your personal information is our priority.
                        <br /><a style={{ color: "black" }} target="_blank" href="https://corporate.walmart.com/privacy-security">See our privacy measures.
                        </a></p>
                </Form>

            </Row>
        </Container>
        <span className='footspan'>
            <footer className="foot" style={{ maxWidth: '1280px' }}>
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
                        <a className="no-underline mb-3 flex items-center" target="_blank" href="https://www.walmart.com/account/api/ccpa-intake?native=false&amp;app=gm&amp;type=access">
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
