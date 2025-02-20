
"use client"

import "bootstrap/dist/css/bootstrap.css"
import "../Blog.css"
import {useFetch} from "@/app/_hooks/useFetch";

const Blog = ()=>{


    const {data:blogPosts,error,loading} = useFetch(process.env.NEXT_PUBLIC_BLOGPOSTS_URL);

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error: {error}</p>;

    return <>

        <section className="blogSection">
            <main className="MainContainer display-grid">
                    {
                        blogPosts.map( (blog,index) => {
                            return <>
                                <article key={ index } className={`blogItem item blog-item-${ blog.id }`}>
                                    <a href={`/Blog/${ blog.id }`}>
                                        <div>
                                            <div>
                                                <h2>{ blog.title }</h2>
                                            </div>
                                            <div>
                                                <p>{ blog.date }</p>
                                            </div>
                                        </div>
                                        <i>{ blog.description }</i>
                                        {
                                            blog.img && <img src={ blog.img } alt={ blog.title }/>
                                        }

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