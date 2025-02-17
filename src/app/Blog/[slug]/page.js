
"use client"

import Navbar from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import "bootstrap/dist/css/bootstrap.css"
import "../../singleProduct.css"
import "../../globals.css"
import {useFetch} from "@/app/_hooks/useFetch";



export default function Blog ({params}){

    // const {data:blogPosts,loading,error} = useFetch("https://epictown.infinityfreeapp.com/restapi/blog/api.php");
    fetch("http://epictown.infinityfreeapp.com/restapi/blog/api.php?i=1")
        .then(response => response.text()) // Use .text() first to check the raw response
        .then(data => {
            console.log("Raw API Response:", data); // Log the raw response
            try {
                const jsonData = JSON.parse(data);  // Attempt to parse the JSON
                console.log("Parsed JSON:", jsonData);
            } catch (error) {

                console.error("Error parsing JSON:", error);
            }
        })
        .catch(error => console.error("Error fetching data:", error));
    // if ( loading ) return <p>Loading...</p>
    // if ( error ) return <p>Error: {error}</p>;

    const { slug } = params;

    return <>

        <Navbar/>
        {/*{blogPosts.map((blog,index)=>{*/}

        {/*    return ( (blog.id === slug) &&*/}

        {/*        (*/}

        {/*            <div className="BlogContainer productContainer" key={index}>*/}
        {/*                <div className="singleProductWrapper d-flex justify-content-between ">*/}
        {/*                    <div className="singleProductTitle text-start w-auto ">*/}
        {/*                        <h1>{blog.title}</h1>*/}
        {/*                        <p>{blog.description}</p>*/}
        {/*                        <hr/>*/}
        {/*                        <h4>{blog.content}</h4>*/}

        {/*                    </div>*/}

        {/*                </div>*/}
        {/*            </div>*/}

        {/*        )*/}
        {/*    )*/}

        {/*})}*/}


        <Footer/>
    </>


};

