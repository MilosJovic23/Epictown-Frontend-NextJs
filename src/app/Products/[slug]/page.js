
"use client"

import { useRecoilState } from "recoil";
import { ComicsState } from "@/app/_libs/States/ComicsState";

import { useEffect, useState } from "react";
import Navbar from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import "bootstrap/dist/css/bootstrap.css"
import "../../singleProduct.css"
import Favorites from "@/app/_components/Favorites";
import Header from "@/app/_components/Header";
import fetchComics from "@/app/_functions/fetchComics";


export default function Products ( { params } ){

    const [isMounted, setIsMounted] = useState(false);
    const [ comics, setComics ] = useState([]);




    useEffect(() => {
        const getComics = async () => {
            await fetchComics(setComics);
        };

        getComics();
    }, []);


    useEffect(() => {
        setIsMounted(true);
    }, [comics,setComics]);

    if(!isMounted){
        return <h5>loading..</h5>
    }

    const { slug } = params;
    const exists = comics.some( item => item.id === parseInt(slug));

    if(!exists) {
        return <div>
            <Header/>
            <h1>page doesnt exist</h1>
        </div>
    }
    ;


    return <>

        <Header/>

            { comics.map(( comic )=>{

                return ( comic.id === parseInt( slug ) )?
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

