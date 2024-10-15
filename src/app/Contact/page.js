



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
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Your Email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your Message"
                                      required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
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