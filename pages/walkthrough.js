import Card from '../UI/Card/Card';
import classes from '../styles/css_modules/Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Cookies from 'universal-cookie'
import { useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

const cookies = new Cookies();

const inputReducer = (state, action) => {
    if (action.type === 'USER_INPUT'){
        return { value: action.val, isValid: action.val.trim().length > 2};
    }
    if(action.type === "INPUT_BLUR"){
        return {value: state.value, isValid: state.value.trim().length > 2};
    }
    return {value: '', isValid: false}
}

export default function walkthrough() {
    const user_token = cookies.get("USER-DETAILS")
    const token = cookies.get("TOKEN")
    const router = useRouter()
    console.log(user_token);
    console.log(token)
    const [showChild, setShowChild] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false);
    const [linkState, dispatchLinkState] = useReducer(inputReducer, {value: '', isValid: null});
    const [instagramLinkState, dispatchInstagramLinkState] = useReducer(inputReducer, {value: '', isValid: null})
    const [twitterLinkState, dispatchTwitterLinkState] = useReducer(inputReducer, {value: '', isValid: null})
    const [linkedINLinkState, dispatchlinkedINLinkState] = useReducer(inputReducer, {value: '', isValid: null})
    const [profileNameState, dispatchprofileNameState] = useReducer(inputReducer, {value: '', isValid: null})
    const [profileBioState, dispatchprofileBioState] = useReducer(inputReducer, {value: '', isValid: null})
    const [selectedImage, setSelectedImage] = useState(null);

    const {isValid: linkValidity} = linkState
    const {isValid: instagramLinkValidity} = instagramLinkState
    const {isValid: twitterLinkValidity} = twitterLinkState
    const {isValid: linkedINValidity} = linkedINLinkState
    const {isValid: profileNameValidity} = profileNameState
    const {isValid: profileBioValidity} = profileBioState 

    const linkRef = useRef();
    const instagramRef = useRef();
    const twitterRef = useRef();
    const linkedINRef = useRef();
    const profileNameRef = useRef();
    const profileBioRef = useRef();

    useEffect(() => {
        setShowChild(true)
        const identifier = setTimeout(() => {
            console.log('Checking form validity')
            setFormIsValid(
                linkValidity || (instagramLinkValidity && twitterLinkValidity && linkedINValidity) || (profileNameValidity && profileBioValidity)
            )
        , 500})

        return () => {
            console.log("CLEANUP")
            clearTimeout(identifier);
        }
    }, [linkValidity, instagramLinkValidity, twitterLinkValidity,linkedINValidity,profileNameValidity,profileBioValidity])
    if (!showChild) {
        return null
      }
    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid){
            switch(user_token.regProgress){
                case 0:
                    axios
                        .post(`http://localhost:3000/update_user_details/step_0`, {
                            email: user_token.email,
                            link: linkState.value
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        })
                        .then((result) => {
                            console.log(result)
                            router.push("dashboard")
                        })
                    break;
                case 1:
                    axios
                        .post(`http://localhost:3000/update_user_details/step_1`, {
                            email: user_token.email,
                            instagramLink: instagramLinkState.value,
                            twitterLink: twitterLinkState.value,
                            linkedINLink: linkedINLinkState.value
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        })
                        .then((result) => {
                            console.log(result)
                            router.push("dashboard")
                        })
                    break;
                case 2:
                    axios
                        .post(`http://localhost:3000/update_user_details/step_2`, {
                            email: user_token.email,
                            instagramLink: instagramLinkState.value,
                            twitterLink: twitterLinkState.value,
                            linkedINLink: linkedINLinkState.value
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        }).then((result) => {
                            console.log(result)
                            router.push("dashboard")
                        })
                    break;
            }
        }
    }
    const linkChangeHandler = (event) => {
        dispatchLinkState({type: 'USER_INPUT', val: event.target.value});
    }
    const linkValidateHandler = () => {
        dispatchLinkState({type: "INPUT_BLUR"})
    }
    const instagramLinkChangeHandler = (event) => {
        dispatchInstagramLinkState({type: 'USER_INPUT', val: event.target.value});
    }
    const instagramLinkValidateHandler = () => {
        dispatchInstagramLinkState({type: "INPUT_BLUR"})
    }
    const twitterLinkChangeHandler = (event) => {
        dispatchTwitterLinkState({type: 'USER_INPUT', val: event.target.value});
    }
    const twitterLinkValidateHandler = () => {
        dispatchTwitterLinkState({type: "INPUT_BLUR"})
    }
    const linkedINLinkChangeHandler = (event) => {
        dispatchlinkedINLinkState({type: 'USER_INPUT', val: event.target.value});
    }
    const linkedINLinkValidateHandler = () => {
        dispatchlinkedINLinkState({type: "INPUT_BLUR"})
    }
    const profileNameChangeHandler = (event) => {
        dispatchprofileNameState({type: 'USER_INPUT', val: event.target.value});
    }
    const profileNamealidateHandler = () => {
        dispatchprofileNameState({type: "INPUT_BLUR"})
    }
    const profileBioChangeHandler = (event) => {
        dispatchprofileBioState({type: 'USER_INPUT', val: event.target.value});
    }
    const profileBioValidateHandler = () => {
        dispatchprofileBioState({type: "INPUT_BLUR"})
    }
    if (user_token.regProgress === 0){
        return (<Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input 
                    ref  = {linkRef}
                    label = "link"
                    type = "text"
                    id = "link"
                    state = {linkState}
                    onChange = {linkChangeHandler}
                    onBlur={linkValidateHandler}
                    />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Register
                    </Button>
                </div>
            </form>
        </Card>)
    }
    else if(user_token.regProgress === 1){
        return (<Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input 
                    ref  = {instagramRef}
                    label = "instagram"
                    type = "text"
                    id = "instagram"
                    state = {instagramLinkState}
                    onChange = {instagramLinkChangeHandler}
                    onBlur={instagramLinkValidateHandler}
                    />
                <Input 
                    ref  = {twitterRef}
                    label = "twitter"
                    type = "text"
                    id = "twitter"
                    state = {twitterLinkState}
                    onChange = {twitterLinkChangeHandler}
                    onBlur={twitterLinkValidateHandler}
                    />
                <Input 
                    ref  = {linkedINRef}
                    label = "linkedIN"
                    type = "text"
                    id = "linkedIN"
                    state = {linkedINLinkState}
                    onChange = {linkedINLinkChangeHandler}
                    onBlur={linkedINLinkValidateHandler}
                    />
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Register
                    </Button>
                </div>
            </form>
        </Card>)
    }
    return (<Card className={classes.login}>
        <form onSubmit={submitHandler}>
            
            <Input 
                ref  = {profileNameRef}
                label = "name"
                type = "text"
                id = "name"
                state = {profileNameState}
                onChange = {profileNameChangeHandler}
                onBlur={profileNamealidateHandler}
                />
            <Input 
                ref  = {profileNameRef}
                label = "name"
                type = "text"
                id = "name"
                state = {profileNameState}
                onChange = {profileNameChangeHandler}
                onBlur={profileNamealidateHandler}
                />
            <Input 
                ref  = {profileBioRef}
                label = "name"
                type = "text"
                id = "name"
                state = {profileBioState}
                onChange = {profileBioChangeHandler}
                onBlur={profileBioValidateHandler}
                />
            <div className={classes.actions}>
                <Button type="submit" className={classes.btn}>
                    Register
                </Button>
            </div>
        </form>
    </Card>)
}
