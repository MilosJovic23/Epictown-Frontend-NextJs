
import 'bootstrap/dist/css/bootstrap.css'
import '../footer.css'
import Image from "next/image";
import logo from "@/app/_images/epictown.svg";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
const Footer = () =>{


    return <>
      <footer className="footerContainer">

          <div className="MainContainer d-flex py-5 flex-wrap justify-content-between">
              <div className="col3">
                  <ul>
                      <li><a href='#'>about</a></li>
                      <li><a href='#'>blog</a></li>
                      <li><a href='#'>contact</a></li>
                      <li><a href='#'>login</a></li>
                  </ul>
              </div>
              <div className="vr"></div>
              <div className="col3">
                  <ul>
                      <li><a href='#'>about</a></li>
                      <li><a href='#'>blog</a></li>
                      <li><a href='#'>contact</a></li>
                  </ul>
              </div>
              <div className="vr"></div>
              <div className="col3">
                  <ul >
                      <li><a href='#'>about</a></li>
                      <li><a href='#'>blog</a></li>
                      <li><a href='#'>contact</a></li>
                      <li><a href='#'>login</a></li>
                  </ul>
              </div>
              <div className="vr"></div>
              <div className="col3 justify-content-sm-center">
                  <div className="mx-5 d-flex flex-column gap-2">
                      <a href="/"><Image className="logo-img" src={logo} alt="Picture of the author" width="20px" height="20px"/></a>
                      <p className="mt-5 mb-0">FOLLOW US</p>
                      <div className="d-flex  gap-2">
                          <span><BsInstagram/></span>
                          <span><BsFacebook/></span>
                          <span><BsTwitterX/></span>
                      </div>
                  </div>


              </div>
          </div>
          <div className="MainContainer footer-copyrights"><p>@2024 Epictown inc. Fictional Adress street 5 , Belgrade, Serbia 11005</p></div>
      </footer>

    </>
}


export default Footer;