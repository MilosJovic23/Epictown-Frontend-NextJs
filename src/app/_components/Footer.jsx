
import 'bootstrap/dist/css/bootstrap.css'
import '../footer.css'
import Image from "next/image";
import logo from "@/app/_images/epictown.svg";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
const Footer = () =>{


    return <>
      <footer className="footerContainer">

          <div className="MainContainer d-flex py-5 flex-wrap justify-content-between">
              <div className="col-3">

                  <ul>
                      <h4>ABOUT</h4>
                      <li><a href='#'>about</a></li>
                      <li><a href='#'>blog</a></li>
                      <li><a href='#'>contact</a></li>
                  </ul>
              </div>

              <div className="col-3">
                  <ul>
                      <h4>PRODUCTS</h4>
                      <li><a href='#'>manga</a></li>
                      <li><a href='#'>dc comics</a></li>
                      <li><a href='#'>indie</a></li>
                  </ul>
              </div>

              <div className="col-3">
                  <ul>
                      <h4>USEFUL LINKS</h4>
                      <li><a href='#'>new releases</a></li>
                      <li><a href='#'>coming soon</a></li>
                      <li><a href='#'>comic series</a></li>
                      <li><a href='#'>events</a></li>
                  </ul>
              </div>

              <div className="col-3">
                  <div className="mx-5 d-flex flex-column gap-2">
                      <a href="/"><Image className="logo-img" src={logo} alt="Picture of the author" width="20px" height="20px"/></a>
                      <p className="mt-3 mb-0">FOLLOW US</p>
                      <div className="d-flex  gap-2">
                          <span><BsInstagram/></span>
                          <span><BsFacebook/></span>
                          <span><BsTwitterX/></span>
                      </div>
                  </div>


              </div>
          </div>
          <div className="MainContainer d-flex gap-2 align-items-center justify-content-center">
              <a href="#"><p>Website Terms</p></a>
              <div className="vr"></div>
              <a href="#"><p>Privacy policy</p></a>
              <div className="vr"></div>
              <a href="#"><p>Copyright Infringement</p></a>
              <div className="vr"></div>
              <a href="#"><p>Terms and Conditions</p></a>
              <div className="vr"></div>
              <a href="#"><p>Submissions</p></a>
              <div className="vr"></div>
              <a href="#"><p>FAQ</p></a>
              <div className="vr"></div>
              <a href="#"><p>Press Releases</p></a>
          </div>
          <div className="MainContainer footer-copyrights"><p>@2024 Epictown inc. Fictional Adress street 5 , Belgrade, Serbia 11005</p></div>
      </footer>

    </>
}


export default Footer;