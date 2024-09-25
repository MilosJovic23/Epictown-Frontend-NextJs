
import 'bootstrap/dist/css/bootstrap.css'
import '../footer.css'
import Image from "next/image";
import logo from "@/app/_images/epictown.svg";
const Footer = () =>{


    return <>
      <footer className="footerContainer">

          <div className="MainContainer d-flex py-5 flex-wrap">
              <div className="col">
                  <ul className="mx-5 text-end">
                      <li><a href='#'>about</a></li>
                      <li><a href='#'>blog</a></li>
                      <li><a href='#'>contact</a></li>
                      <li><a href='#'>login</a></li>
                  </ul>
              </div>
              <div className="vr"></div>
              <div className="col">
                  <ul className="mx-5 text-end">
                      <li><a href='#'>about</a></li>
                      <li><a href='#'>blog</a></li>
                      <li><a href='#'>contact</a></li>
                      <li><a href='#'>login</a></li>
                  </ul>
              </div>
              <div className="vr"></div>
              <div className="col">
                  <ul className="mx-5 text-end ">
                      <li><a href='#'>about</a></li>
                      <li><a href='#'>blog</a></li>
                      <li><a href='#'>contact</a></li>
                      <li><a href='#'>login</a></li>
                  </ul>
              </div>
              <div className="vr"></div>
              <div className="col">
                  <div className="mx-5 text-end">
                      <a href="/"><Image className="logo-img" src={logo} alt="Picture of the author" width="20px"
                                         height="20px"/></a>
                      <p>Hello world</p>
                      <p>Hello world</p>
                  </div>


              </div>
          </div>
          <div className="MainContainer footer-copyrights"><p>@2024 Epictown inc. Fictional Adress street 5 , Belgrade, Serbia 11005</p></div>
      </footer>

    </>
}


export default Footer;