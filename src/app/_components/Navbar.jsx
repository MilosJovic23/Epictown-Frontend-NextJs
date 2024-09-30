
"use client"


import Search from "@/app/_components/serachByTitle";
import Image from 'next/image'
import logo from '../_images/epictown.svg'

import 'bootstrap/dist/css/bootstrap.css'
import Home from "@/app/page";
import {useRecoilState} from "recoil";
import {UserState} from "@/app/_libs/States/UserState";
const Header =()=>{


    const [userState,setUserState]=useRecoilState(UserState);


    const logout = (e)=>{
        e.preventDefault();
        setUserState({"isLoggedIn":false})

    }

    return<>

    <div className="navBar">
        <div className="MainContainer d-flex  justify-content-between">
            <div className="d-flex w-50 gap-5">
                <a href="/"><Image className="logo-img" src={logo} alt="Picture of the author" width="20px" height="20px"/></a>
                <div className="navigation d-flex align-items-center">
                    <ul className="d-flex gap-4">
                        <a href={`/About`}>about</a>
                        <a href={`/Blog`}>blog</a>
                        <a href={`/Contact`}>contact</a>
                    </ul>
                </div>
            </div>
            <div className="d-flex gap-3">
                {(userState.type=== 'admin') &&(<a href={`/Products`}>adminDashboard</a>)}
                <Search/>
                <div className="vr"></div>
                {userState.isLoggedIn ? (
                    <a className="align-self-center" href="#" onClick={e=>logout(e)}>logout</a>
                ): (
                    <a className="align-self-center" href={`/Users/Login`}>login</a>
                )}

            </div>
        </div>
    </div>



    </>


}



export default Header;