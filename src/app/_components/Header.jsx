
"use client"

import { HiStar } from "react-icons/hi2";
import Search from "@/app/_components/serachByTitle";
import Image from 'next/image'
import logo from '../_images/epictown.svg'
import "../header.css"
import 'bootstrap/dist/css/bootstrap.css'
;
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
            <div className="d-flex justify-content-center gap-5 pb-2">
                <a href="/"><Image className="logo-img"  priority="true" src={logo} alt="epictown logo" width="20px"
                                   height="20px"/></a>
                <div className="navigation d-flex align-items-center">
                    <ul className="d-flex gap-4 ">
                        <li><a href={`/About`}>about</a></li>
                        <li><a href={`/Blog`}>blog</a></li>
                        <li><a href={`/Contact`}>contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="d-flex gap-3 secondaryNavItems justify-content-center">
                { userState.isLoggedIn && (

                        <a className="favorites align-self-center d-flex align-items-center" href={`/Wishlist`}><HiStar style={{fontSize: '1.1rem', color: 'red'}}/>wishlist</a>

                )
                }
                {(userState.type === 'admin') && (

                        <a className="dashboard align-self-center" href={`/Dashboard`}>dashboard</a>

                )
                }
                <Search/>
                <div className="vr"></div>
                { userState.isLoggedIn ? (

                         <a className="align-self-center" href="#" onClick={e => logout(e)}>logout</a>


                ) : (

                         <a className="align-self-center" href={`/Users/Login`}>login</a>


                )}

            </div>
        </div>
    </div>


    </>


}


export default Header;