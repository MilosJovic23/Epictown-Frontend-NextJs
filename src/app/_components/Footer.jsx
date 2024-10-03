
import 'bootstrap/dist/css/bootstrap.css'
import '../footer.css'
import Image from "next/image";
import logo from "@/app/_images/epictown.svg";
import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
const Footer = () =>{


    return <>
      <footer className="footerContainer">

          <div className="w-75 m-auto d-flex  py-5 flex-wrap justify-content-between flex-column flex-sm-row ">
              <div className="col-12 col-sm-6 col-md-3 text-start">

                  <ul>
                      <li><h4>ABOUT</h4></li>
                      <li><a href='#'>about</a></li>
                      <li><a href='#'>blog</a></li>
                      <li><a href='#'>contact</a></li>
                  </ul>
              </div>

              <div className="col-12 col-sm-6 col-md-3 text-start">
                  <ul>
                      <li><h4>PRODUCTS</h4></li>
                      <li><a href='#'>manga</a></li>
                      <li><a href='#'>dc comics</a></li>
                      <li><a href='#'>indie</a></li>
                  </ul>
              </div>

              <div className="col-12 col-sm-6 col-md-3 text-start">
                  <ul>
                      <li><h4>USEFUL LINKS</h4></li>
                      <li><a href='#'>new releases</a></li>
                      <li><a href='#'>coming soon</a></li>
                      <li><a href='#'>comic series</a></li>
                      <li><a href='#'>events</a></li>
                  </ul>
              </div>

              <div className="col-12 col-sm-6 col-md-3 ps-4 text-start">
                  <div className=" d-flex  flex-column gap-2">
                      <a href="/"><Image className="logo-img" src={logo} alt="logo" width="100%" height="100%"/></a>
                      <p className="mt-3 mb-0">FOLLOW US</p>
                      <div className="d-flex  gap-2 m-0 text-center">
                          <span><BsInstagram/></span>
                          <span><BsFacebook/></span>
                          <span><BsTwitterX/></span>
                      </div>
                  </div>


              </div>
          </div>
          <div className="col-6 col-lg-12 m-auto d-flex flex-column gap-2 align-items-center justify-content-center justify-content-lg-between-center  flex-lg-row">
              <a href="#"><p>Website Terms</p></a>
              <div className="vr d-none d-lg-block"></div>
              <a href="#"><p>Privacy policy</p></a>
              <div className="vr d-none d-lg-block"></div>
              <a href="#"><p>Copyright Infringement</p></a>
              <div className="vr d-none d-lg-block"></div>
              <a href="#"><p>Terms and Conditions</p></a>
              <div className="vr d-none d-lg-block"></div>
              <a href="#"><p>Submissions</p></a>
              <div className="vr d-none d-lg-block"></div>
              <a href="#"><p>FAQ</p></a>
              <div className="vr d-none d-lg-block"></div>
              <a href="#"><p>Press Releases</p></a>
          </div>
          <div className="MainContainer footer-copyrights"><p>@2024 Epictown inc. Fictional Adress street 5 , Belgrade, Serbia 11005</p></div>
      </footer>

    </>
}


export default Footer;