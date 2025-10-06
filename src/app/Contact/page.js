



import "bootstrap/dist/css/bootstrap.css"
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export default function  Contact() {

    return <>
        <Header/>
        <div className="MainContainer my-5">
            <h1 className="text-center">Contact Us</h1>
            <p className="text-center">We'd love to hear from you!</p>

            <div className="row">
                <div className="col-md-6">
                    <h2>Get in Touch</h2>
                </div>
                {/*<div className="col-md-6">*/}
                {/*    <h2>Contact Details</h2>*/}
                {/*    <p><strong>Email:</strong> support@epictown.com</p>*/}
                {/*    <p><strong>Phone:</strong> +1 (555) 123-4567</p>*/}
                {/*    <p><strong>Address:</strong> 123 Epic St, Comic City, CA 90001</p>*/}
                {/*</div>*/}
            </div>
        </div>

    <Footer/>
    </>

}