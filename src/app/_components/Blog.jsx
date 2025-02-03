
"use client"

import "bootstrap/dist/css/bootstrap.css"
import "../Blog.css"

const Blog = ()=>{


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