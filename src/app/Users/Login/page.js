
"use client"

import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

import {useRouter} from "next/navigation";
import styles from "../../login.css";
import {useForm} from "react-hook-form";
import {useRecoilState} from "recoil";
import {UserState} from "@/app/_libs/States/UserState";
import users from "@/app/users.JSON"

export default function Login ({params}){

    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();


    const [userState,setUserState]= useRecoilState(UserState);


    const onSubmit = (data) => {

        users.forEach((user)=>{
            if (data.username === user.email || data.password === user.password){
                setUserState({"isLoggedIn":true,"type":user.type});
                router.push('/');
            } else{console.log("wrong credentials") }
        })


    };


    return <>


        <Header/>

        <div className="MainContainer loginContainer d-flex align-items-center" >
            <form onSubmit={handleSubmit(onSubmit)} className="form">


                <div  className="formGroup">
                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {required: 'Email is required'})}
                        className="input"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
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