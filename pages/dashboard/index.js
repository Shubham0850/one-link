import React from 'react'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'
import axios from 'axios';
const cookies = new Cookies();

export default function index() {
    const token = cookies.get("TOKEN")
    const router = useRouter()
    if (typeof window === "undefined") return null;
    if (token){
        const configuration = {
            method: "post",
            url: "http://localhost:3000/user_details",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        axios(configuration)
        .then((result) => {
            console.log(result)
            cookies.set("USER-DETAILS", result.data, {
                path:"/",
            })
            switch (result.data.regProgress){
                case 0:
                case 1:
                case 2:
                    router.push("walkthrough")
                    break;
                case 3:
                    router.push("/dashboard/links")
                    break;
            }
        })
        .catch((error) => {
            error = new Error();
        })
    }
    else{
        router.push("/login");
    }
}
