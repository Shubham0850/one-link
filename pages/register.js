import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import AuthContext from '../components/AuthContext';
import Card from '../UI/Card/Card';
import classes from '../styles/css_modules/Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import axios from 'axios';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return { value: action.val, isValid: action.val.includes('@')};
    }
    if (action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.includes('@')};
    }
    return {value: '', isValid: false}
}

const nameReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.trim().length > 4};
    }
    if (action.type === "INPUT_BLUR"){
        return {value: state.value, isValid: state.value.trim().length > 4}
    }
    return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return {value: action.val, isValid: action.val.trim().length > 6};
    }
    if (action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.trim().length > 6};
    }
    return {value: '', isValid: false}
}

const Register = (props) => {
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                    })
                    .catch((err) => console.log(err));
            }
        },
        [ user ]
    );

    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const ctx = useContext(AuthContext)
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});
    const [nameState, dispatchName] = useReducer(nameReducer, {value: '', isValid: null});

    const {isValid: emailValidity} = emailState;
    const {isValid: passwordValidity} = passwordState;
    const {isValid: nameValidity} = nameState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking form validity!');
            setFormIsValid(
                emailValidity && passwordValidity && nameValidity
            );
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailValidity, passwordValidity, nameValidity]);

    const nameChangeHandler = (event) => {
        dispatchName({type: 'USER_INPUT', val: event.target.value});
    }
    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    };
    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    }
    const validateNameHandler = () => {
        dispatchName({type: "INPUT_BLUR"})
    }
    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'})
    };
    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(formIsValid){
            const configuration = {
                method: "post",
                url: "http://localhost:3000/register",
                data: {
                    name: nameState.value,
                    email: emailState.value,
                    password: passwordState.value,
                    regProgress: 0,
                }
            }
            axios(configuration)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {error = new Error(); })
        }
        else if(!nameValidity){
            nameRef.current.focus();
        }
        else if(!emailValidity){
            emailRef.current.focus();
        }
        else{
            passwordRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input 
                    ref  = {nameRef}
                    label = "name"
                    type = "text"
                    id = "name"
                    state = {nameState}
                    onChange = {nameChangeHandler}
                    onBlur={validateNameHandler}
                    />
                <Input 
                    ref  = {emailRef}
                    label = "E-mail"
                    type = "email"
                    id = "email"
                    state = {emailState}
                    onChange = {emailChangeHandler}
                    onBlur={validateEmailHandler}
                    />
                <Input 
                    ref = {passwordRef}
                    label="Password"
                    type="password"
                    id="password"
                    state={passwordState}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    />
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Register
                    </Button>
                </div>
            </form>
        </Card>
    )
}
export default Register