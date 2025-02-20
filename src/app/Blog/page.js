
'use client'

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import {useFetch} from "@/app/_hooks/useFetch";

export default function  Blog(){

    const {data:blogPosts,loading,error} = useFetch(process.env.BLOGPOSTS_URL);

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error: {error}</p>;

    return<>

        <Header/>

        <div className="MainContainer my-5">
            <h1 className="text-center">Blog Posts</h1>

                    <ul className="list-group ">
                        {blogPosts.map((post, postIndex) => (
                            <li className="list-group-item  py-4" key={postIndex}>
                                <a href={`/Blog/${post.id}`} className="fw-bold fs-5">{post.title}</a>
                                <span className="text-muted"> - Date: {post.date}</span>
                                <p>{post.description}</p>
                            </li>
                        ))}
                    </ul>

        </div>



        <Footer/>
    </>
};