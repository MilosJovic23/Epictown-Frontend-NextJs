
"use client"

import { HiStar } from "react-icons/hi2";
import Search from "@/app/_components/serachByTitle";
import Image from 'next/image'
import logo from '../_images/epictown.svg'
import "../header.css"
import 'bootstrap/dist/css/bootstrap.css';
import { useRecoilState } from "recoil";
import { UserState } from "@/app/_libs/States/UserState";
const Header =()=>{

    const [userState,setUserState]=useRecoilState( UserState );

    const logout = ( e )=>{
        e.preventDefault();
        setUserState({"isLoggedIn":false});
    }

    return<>

    <div className="navBar">
        <div
            className="MainContainer d-column d-lg-flex  justify-content-center justify-content-lg-between flex-lg-row flex-md-column align-items-md-center gap-md-3">
            <div className="text-center d-sm-flex justify-content-center justify-content-sm-between gap-5 pb-4 pb-lg-0">
                <a href="/"><Image width={150} height={20}   src={logo} alt="epictown logo"/></a>
                <div className="navigation d-sm-flex align-items-sm-center">
                    <ul className="d-sm-flex gap-4">
                        <li><a href={`/About`}>about</a></li>
                        <li><a href={`/Blog`}>blog</a></li>
                        <li><a href={`/Contact`}>contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center d-sm-flex gap-sm-3 secondaryNavItems justify-content-center">
                {
                userState.isLoggedIn &&
                    <a className="favorites align-self-sm-center d-sm-flex pe-2  pe-sm-0 align-items-center" href={`/Wishlist`}><HiStar style={{fontSize: '1.1rem', color: 'red'}}/>wishlist</a>
                }

                {
                (userState.type === 'admin') &&
                    <a className="dashboard align-self-center" href={`/Dashboard`}>dashboard</a>
                }

                <Search/>
                <div className="vr d-none d-sm-block"></div>
                {
                userState.isLoggedIn ?
                <a className="align-self-center" href="#" onClick={e => logout(e)}>Logout</a>
                :
                <a className="align-self-center" href={`/Users/Login`}>Login/Register</a>
                }

            </div>
        </div>
    </div>


    </>


}


export default Header;