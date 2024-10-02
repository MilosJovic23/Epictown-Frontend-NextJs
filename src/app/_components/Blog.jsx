
"use client"

import "bootstrap/dist/css/bootstrap.css"
import "../Blog.css"
import {useEffect} from "react";
import {useRecoilState} from "recoil";

import {BlogState} from "@/app/_libs/States/BlogState";
import fetchBlogPosts from "@/app/_functions/fetchBlogPosts";
const Blog = ()=>{

    const [blogPosts, setBlogPosts] = useRecoilState(BlogState);

    useEffect(() => {
        fetchBlogPosts(setBlogPosts)
    }, []);


    console.log(blogPosts);
    return <>

        <section className="blogSection">

            <main className="MainContainer gridContainer">
                {
                    blogPosts.map(blog => {
                        return <>
                            <article className={`blogItem item blog-item-${blog.id}`}>
                                <a href={`/Blog/${blog.id}`}>
                                    <div>
                                        <div>
                                            <h2>{blog.title}</h2>
                                        </div>
                                        <div>
                                            <p>{blog.date}</p>
                                        </div>
                                    </div>
                                    <i>{blog.description}</i>
                                </a>

                            </article>
                        </>
                    })
                }

            </main>
        </section>


    </>
}


export default Blog;