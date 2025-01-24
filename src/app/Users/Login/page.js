
"use client"

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

import {useRouter} from "next/navigation";
import "../../login.css"
import {useForm} from "react-hook-form";
import {useRecoilState} from "recoil";
import {UserState} from "@/app/_libs/States/UserState";
import {useState} from "react";


export default function Login (){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();
    const [userState,setUserState]= useRecoilState(UserState);
    const [message, setMessage] = useState("");


    const onSubmit = async (data) => {

        try{
            const response = await fetch(process.env.NEXT_PUBLIC_LOGIN_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": data.email,
                    "password": data.password,
                })
            });

            if (response.ok) {
                const result = await response.json();
                data.email === "admin@admin.com" ?
                    setUserState({"isLoggedIn": true,"type":"admin"})
                    :
                    setUserState({"isLoggedIn":true})
                router.push('/');
            } else {
                const errorData = await response.json();
                setMessage(`Login failed: ${errorData.message}`);
            }
        }
        catch(error){
            console.error("Error during login:", error);
            setMessage("An error occurred. Please try again.");
        }
    };


    return <>

        <Header/>

        <div className="MainContainer d-flex align-items-center" >
            <form onSubmit={handleSubmit(onSubmit)} className="form">


                <div  className="formGroup">
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {required: 'Email is required'})}
                        className="input"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                    { message && (<p>{message}</p>)}
                </div>

                <div className="formGroup">
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password', {required: 'Password is required'})}
                        className="input"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <button type="submit" className="button">Login</button>
            </form>
        </div>
        <Footer/>
    </>


};