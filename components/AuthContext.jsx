import React, { useEffect, useState } from 'react'
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from 'next/router';
const cookies = new Cookies();

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = cookies.get("TOKEN");
        if (token){
            setIsLoggedIn(true);
        }
    },[])

    const logoutHandler = () => {
        setIsLoggedIn(false);
        cookies.remove("TOKEN", { path: "/" });
        // window.location.href = "/";
    }

    const loginHandler = (email, password) => {
        const configuration = {
            method: "post",
            url: "http://localhost:3000/login",
            data: {
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                setIsLoggedIn(true);
                cookies.set("TOKEN", result.data.token, {
                    path:"/",
                })
                router.push("/dashboard/links")
            })
            .catch((error) => { error = new Error(); })
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;