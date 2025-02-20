
"use client"


import Footer from "@/app/_components/Footer";
import "bootstrap/dist/css/bootstrap.css"
import "../../singleProduct.css"
import Favorites from "@/app/_components/Favorites";
import Header from "@/app/_components/Header";
import "../../globals.css"
import {useFetch} from "@/app/_hooks/useFetch";

export default function Products ( { params } ){


    const { data:comics,error,loading} = useFetch(process.env.NEXT_PUBLIC_API_URL);

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error: {error}</p>;

    const { slug } = params;

    return <>

        <Header/>

            { comics.map(( comic )=>{
                console.log(typeof(comic.id))

                return ( comic.id ===  slug )?
                    (
                        <div className="MainContainer productContainer">
                            <div className="singleProductWrapper d-flex justify-content-between " key={ comic.id }>

                                <div className="singleProductImg">
                                    <img src={ comic.imgURL } alt={comic.title}/>
                                </div>
                                <div className="singleProductTitle">
                                    <h1>{ comic.title }</h1>
                                    <p>author:{ comic.author }</p>
                                    <hr/>
                                    <h5>Descripton</h5>
                                    <i>{ comic.description }</i>
                                    <p>{ comic.format }</p>
                                    <div className="position-relative"><Favorites comicId={ comic.id }/></div>

                                </div>

                            </div>
                        </div>

                    )
                    :
                    ("")
            })}


        <Footer/>
    </>


};

