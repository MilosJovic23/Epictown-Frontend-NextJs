import Search from "@/app/_components/serachByTitle";
import Image from 'next/image'
import logo from '../epictown.svg'

import 'bootstrap/dist/css/bootstrap.css'
import Home from "@/app/page";
const Navbar =()=>{
    return<>


    <div className="navBar">
        <div className="container d-flex  justify-content-between">
            <div className="d-flex w-50 gap-5">
                <Image className="logo-img" src={logo} alt="Picture of the author" width="20px" height="20px"/>
                <div className="navigation d-flex align-items-center">
                    <ul className="d-flex gap-4">
                        <a href={`/About`}>about</a>
                        <a href={`/Blog`}>blog</a>
                        <a href={`/Contact`}>contact</a>
                    </ul>
                </div>
            </div>
            <div className="d-flex gap-3">
                <Search/>
                <div className="vr"></div>
                <a className="align-self-center" href={`/users/login`}>login</a>
            </div>
        </div>
    </div>



    </>


}



export default Navbar;