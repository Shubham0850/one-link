import React, { useContext, useEffect, useReducer, useRef, useState } from 'react'
import AuthContext from '../components/AuthContext';
import Card from '../UI/Card/Card';
import classes from '../styles/css_modules/Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return { value: action.val, isValid: action.val.includes('@')};
    }
    if (action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.includes('@')};
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

const Login = (props) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const ctx = useContext(AuthContext)
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null});
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null});

    const {isValid: emailValidity} = emailState;
    const {isValid: passwordValidity} = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Checking form validity!');
            setFormIsValid(
                emailValidity && passwordValidity
            );
        }, 500);

        return () => {
            console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [emailValidity, passwordValidity]);

    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: 'USER_INPUT', val: event.target.value});
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
            ctx.onLogin(emailState.value, passwordState.value);
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
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}
export default Login