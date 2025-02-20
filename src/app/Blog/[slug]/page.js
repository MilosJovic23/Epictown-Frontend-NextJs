
"use client"

import Navbar from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import "bootstrap/dist/css/bootstrap.css"
import "../../singleProduct.css"
import "../../globals.css"
import {useFetch} from "@/app/_hooks/useFetch";

export default function Blog ({params}){

    const {data:blogPosts,loading,error} = useFetch(process.env.BLOGPOSTS_URL);

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error: {error}</p>;

    const { slug } = params;

    return <>

        <Navbar/>
        {blogPosts.map((blog,index)=>{

            return ( (blog.id === slug) &&

                (

                    <div className="BlogContainer productContainer" key={index}>
                        <div className="singleProductWrapper d-flex justify-content-between ">
                            <div className="singleProductTitle text-start w-auto ">
                                <h1>{blog.title}</h1>
                                <p>{blog.description}</p>
                                <hr/>
                                <h4>{blog.content}</h4>

                            </div>

                        </div>
                    </div>

                )
            )

        })}


        <Footer/>
    </>


};

