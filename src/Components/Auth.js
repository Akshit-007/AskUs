import React, { useState } from "react";
import Navbar from "./Navbar";
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import '../Styles/Auth.css'
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin, signup } from '../actions/auth';
import { ToastContainer, toast } from 'react-toastify';

const Auth = () => {

    const [signIn, setSignIn] = useState(true);
    const [showPassword, setshowPassword] = useState(false);
    const history = useNavigate();
    const dispatch = useDispatch();

    const [signupValues, setSignupValues] = React.useState({
        firstName: '',
        LastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [signinValues, setSigninValues] = React.useState({
        email: '',
        password: '',
    });






    const handleChange = (prop) => (event) => {
        setSignupValues({ ...signupValues, [prop]: event.target.value });
    };
    const handleSigninChange = (prop) => (event) => {
        setSigninValues({ ...signinValues, [prop]: event.target.value });
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        let fn = signupValues.firstName;
        fn = fn.trim();
        let ln = signupValues.LastName;
        ln = ln.trim();
        let em = signupValues.email;
        em = em.trim();
        let pd = signupValues.password;
        pd = pd.trim();
        let cp = signupValues.confirmPassword;
        cp = cp.trim();

        if (fn === "" || ln === "" || em === "" || pd === "" || cp === "") {
            toast.error("No field should be empty")
            return;
        }
        else {
            if (fn.length <= 2 || fn.length >= 20) {
                toast.error("Firstname should have atleat 3 characters")

                return;
            }
            else if (fn.length > 2 && fn.length < 20 && (!(/^[A-Za-z]*$/.test(fn)))) {

                toast.error("Firstame should not contain digits or special character")
                return;
                // console.log(ln);
            }
            else if (ln.length <= 2 || ln.length >= 20) {
                toast.error("Lastname should have atleat 3 characters")

                return;
            }
            else if (ln.length > 2 && ln.length < 20 && (!(/^[A-Za-z]*$/.test(ln)))) {

                toast.error("Lastame should not contain digits or special character")


                return;
            }
            else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em))) {
                toast.error("Email is incorrect")

                return;
            }
            else if (pd.length < 8) {
                toast.error("Password must be more than 8 characters")

                return;
            }

            else if ((pd === pd.toUpperCase()) || (pd === pd.toLowerCase())) {
                toast.error("Password should conatin at leat 1 uppercase and 1 lowercase letter")
                return;
            }
            else if (pd !== cp) {
                toast.error("Confirm Password is different")
                return;
            }

        }






        dispatch(signup(signupValues, history))
            .then(response => {
                if (response === undefined)
                    toast.success('Success sign in');
                else {
                    toast.error("Email already exist")
                }

            })





    }
    const handleSigninSubmit = (event) => {
        event.preventDefault();
        // console.log(signinValues);
        dispatch(signin(signinValues, history))
            .then(response => {
                if (response === undefined) {
                    toast.error('Incorrect email or password')
                }
            })


    }

    const handleShowPassword = () => {
        console.log('hi');
        setshowPassword(!showPassword);
    };




    return (
        <>

            <div >
                <Navbar />
                <br />
                <br />
                <br />
                <br />
                {signIn ?
                    <div className="authenticate_signin">

                        <Paper elevation={6}>
                            <div className="form_header">Sign In</div>
                            <form className="authenticate_form">
                                <TextField id="standard-basic_email_signin" label="E-mail *" placeholder="eg: john@doe.com" variant="standard" value={signinValues.email}
                                    onChange={handleSigninChange('email')} /><br /><br />
                                <TextField id="standard-basic_password_signin" label="Password *" placeholder="eg: John@doe" variant="standard" value={signinValues.password}
                                    onChange={handleSigninChange('password')} type={showPassword ? 'text' : 'password'}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end"><span onClick={handleShowPassword}> {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}</span></InputAdornment>,
                                    }}
                                />


                                <br /><br />


                                <button onClick={handleSigninSubmit} className="sign_btn">Sign In</button>
                                <ToastContainer />
                            </form>
                            <hr />
                            <div className="form_footer">New user? <span className="form_footer_link" onClick={() => setSignIn(!signIn)}  >Create Account</span></div>
                        </Paper>

                    </div>
                    :
                    <div>

                        <div className="authenticate_signup">

                            <Paper elevation={6}>
                                <div className="form_header">Sign up</div>
                                <form className="authenticate_form">
                                    <TextField id="standard-basic_fn_signup" label="First Name *" placeholder="eg: John" variant="standard" value={signupValues.firstName}
                                        onChange={handleChange('firstName')} /><br /><br />
                                    <TextField id="standard-basic_ln_signup" label="Second Name *" placeholder="eg: Doe" variant="standard" value={signupValues.LastName}
                                        onChange={handleChange('LastName')} /><br /><br />
                                    <TextField id="standard-basic_email_signup" label="E-mail *" placeholder="eg: john@doe.com" variant="standard" value={signupValues.email}
                                        onChange={handleChange('email')} /><br /><br />
                                    <TextField id="standard-basic_password_signup" label="Password *" variant="standard" value={signupValues.password}
                                        onChange={handleChange('password')} type={showPassword ? 'text' : 'password'}

                                        InputProps={{
                                            endAdornment: <InputAdornment position="end"><span onClick={handleShowPassword}> {showPassword ? < VisibilityIcon /> : < VisibilityOffIcon />}</span></InputAdornment>,
                                        }}
                                    />

                                    <br /><br />

                                    <TextField id="standard-basic-confirm_password" label="Confirm Password *" variant="standard" value={signupValues.confirmPassword}
                                        onChange={handleChange('confirmPassword')} type={showPassword ? 'text' : 'password'} /><br /><br /><br />
                                    <button onClick={handleSubmit} className="sign_btn">Sign up</button>
                                    <ToastContainer />


                                </form>
                                <hr />
                                <div className="form_footer">Have an account? <span className="form_footer_link" onClick={() => setSignIn(!signIn)}  >Signin</span></div>
                            </Paper>

                        </div>


                    </div>
                }


            </div>
        </>
    );
};


export default Auth;