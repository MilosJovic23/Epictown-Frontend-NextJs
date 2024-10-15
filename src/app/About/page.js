


import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import "bootstrap/dist/css/bootstrap.css"

export default function  Blog(){

    return <>

    <Header/>

    <div className="MainContainer my-5">
        <p class="lead">Welcome to EpicTown, your ultimate destination for comics and graphic novels!</p>

        <section class="my-4">
            <h2 class="text-danger">Our Story</h2>
            <p>Founded in 2024, EpicTown was born from a passion for storytelling and artistry. We believe that comics
                and graphic novels are more than just entertainment – they're a unique form of literature and art that
                can inspire, educate, and transform.</p>
        </section>

        <section class="my-4">
            <h2 class="text-danger">Our Mission</h2>
            <p>At EpicTown, our mission is to:</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Provide a vast selection of comics and graphic novels from both established
                    publishers and independent creators.
                </li>
                <li class="list-group-item">Foster a community of comic enthusiasts where fans can discover new titles
                    and discuss their favorites.
                </li>
                <li class="list-group-item">Support and promote emerging artists and writers in the comic industry.</li>
                <li class="list-group-item">Make comics accessible to everyone, from longtime fans to newcomers
                    exploring the medium for the first time.
                </li>
            </ul>
        </section>

        <section class="my-4">
            <h2 class="text-danger">What We Offer</h2>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">A curated collection of thousands of titles across various genres</li>
                <li class="list-group-item">Regular updates with the latest releases and hard-to-find classics</li>
                <li class="list-group-item">Competitive prices and frequent promotions</li>
                <li class="list-group-item">A user-friendly interface for easy browsing and purchasing</li>
                <li class="list-group-item">Detailed product descriptions and preview pages</li>
                <li class="list-group-item">Customer reviews and ratings to help you make informed choices</li>
                <li class="list-group-item">Fast, secure shipping to get your comics to you as quickly as possible</li>
            </ul>
        </section>

        <section class="my-4">
            <h2 class="text-danger">Our Team</h2>
            <p>EpicTown is run by a dedicated team of comic lovers who are committed to providing the best possible
                experience for our customers. From our customer service representatives to our content curators,
                everyone at EpicTown shares a deep appreciation for the art of comics.</p>
        </section>

        <section class="my-4">
            <h2 class="text-danger">Connect With Us</h2>
            <p>We love hearing from our customers! Whether you have a question, suggestion, or just want to chat about
                your favorite comics, we're here for you.</p>
            <div class="card bg-light">
                <div class="card-body">
                    <p class="card-text"><strong>Email:</strong> info@epictown.com</p>
                    <p class="card-text"><strong>Phone:</strong> (555) 123-4567</p>
                    <p class="card-text"><strong>Social Media:</strong> @EpicTown on Twitter, Instagram, and Facebook
                    </p>
                </div>
            </div>
        </section>

        <p class="mt-4">Thank you for choosing EpicTown as your go-to source for comics and graphic novels. Happy
            reading!</p>

    </div>


    <Footer/>
</>
};