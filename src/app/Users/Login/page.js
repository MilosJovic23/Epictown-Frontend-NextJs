
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

    const {
        register:registerForm1,
        handleSubmit:handleSubmit1,
        formState: { errors:errors1 }
    } = useForm();
    const {
        register:registerForm2,
        handleSubmit:handleSubmit2,
        formState: { errors:errors2 }
    } = useForm();
    const router = useRouter();
    const [userState,setUserState]= useRecoilState(UserState);
    const [messageForm1, setMessageForm1] = useState("");
    const [messageForm2, setMessageForm2] = useState("");

    const onSubmit1 = async (data) => {

        try{
            const response = await fetch(process.env.NEXT_PUBLIC_LOGIN_URL, {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
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
                setMessageForm1(`Login failed: ${errorData.message}`);
            }
        }
        catch(error){
            console.error("Error during login:", error);
            setMessageForm1("An error occurred. Please try again.");
        }
    };

    const onSubmit2 = async (data) => {

        try{
            const response = await fetch(process.env.NEXT_PUBLIC_REGISTER_URL, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": data.email,
                    "password": data.password,
                })
            })

            const result = await response.json();
            if ( !result ) setMessageForm2(result.message);
            else setMessageForm2(result.message);

        }
        catch(error){
            console.error("Error during login:", error);
            setMessageForm2("An error occurred. Please try again.");
        }

    }


    return <>

        <Header/>

        <div className="MainContainer d-flex align-items-center flex-column">

            <div className="w-50 h-50">
                <form onSubmit={handleSubmit1(onSubmit1)} className="form">

                    <div className="formGroup">
                        <input
                            type="email"
                            placeholder="Email"
                            {...registerForm1('email', {required: 'Email is required'})}
                            className="input"
                        />
                        {errors1.email && <p>{errors1.email.message}</p>}
                        {messageForm1 && (<p>{messageForm1}</p>)}
                    </div>

                    <div className="formGroup">
                        <input
                            type="password"
                            placeholder="Password"
                            {...registerForm1('password', {required: 'Password is required'})}
                            className="input"
                        />
                        {errors1.password && <p>{errors1.password.message}</p>}
                    </div>
                    <button type="submit" className="button">Login</button>
                </form>

            </div>

            <div className="w-50">
                <form onSubmit={handleSubmit2(onSubmit2)} className="form">

                    <div className="formGroup">
                        <input
                            type="email"
                            placeholder="Email"
                            {...registerForm2('email', {required: 'Email is required'})}
                            className="input"
                        />
                        {errors2.email && <p>{errors2.email.message}</p>}
                        {messageForm2 && (<p>{messageForm2}</p>)}
                    </div>

                    <div className="formGroup">
                        <input
                            type="password"
                            placeholder="Password"
                            {...registerForm2('password', {required: 'Password is required'})}
                            className="input"
                        />
                        {errors2.password && <p>{errors2.password.message}</p>}
                    </div>

                    <button type="submit" className="button2">Register</button>

                </form>
            </div>
        </div>
        <Footer/>
    </>

};