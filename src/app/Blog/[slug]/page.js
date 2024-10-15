
"use client"

import {useRecoilState, } from "recoil";


import {useEffect, useState} from "react";
import Navbar from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import "bootstrap/dist/css/bootstrap.css"
import "../../singleProduct.css"
import "../../globals.css"
import {BlogState} from "@/app/_libs/States/BlogState";


export default function Blog ({params}){


    const [blogPosts, setBlogPosts] = useRecoilState(BlogState);
    const [isMounted,setIsMounted] = useState(false)


    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted){
        return <h5>loading..</h5>
    }

    const { slug } = params;
    const blogExist = blogPosts.some(item => item.id === parseInt(slug));

    if(!blogExist) {
        return <div>
            <Navbar/>
            <h1>page doesnt exist</h1>
        </div>
    }



    return <>

        <Navbar/>

        {blogPosts.map((blog,index)=>{

            return (blog.id===parseInt(slug))?
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
                :
                ""

        })}


        <Footer/>
    </>


};

