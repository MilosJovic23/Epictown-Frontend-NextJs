

'use client'

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import {useRecoilState} from "recoil";
import {BlogState} from "@/app/_libs/States/BlogState";


export default function  Blog(){

    const [blogPosts, setBlogPosts] = useRecoilState(BlogState);

    return<>

        <Header/>

        <div className="MainContainer my-5">
            <h1 className="text-center">Blog Posts</h1>

                    <ul className="list-group ">
                        {blogPosts.map((post, postIndex) => (
                            <li className="list-group-item  py-4" key={postIndex}>
                                <a href={post.link} className="fw-bold fs-5">{post.title}</a>
                                <span className="text-muted"> - Date: {post.date}</span>
                                <p>{post.description}</p>
                            </li>
                        ))}
                    </ul>

        </div>



        <Footer/>
    </>
};