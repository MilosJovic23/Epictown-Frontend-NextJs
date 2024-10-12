
"use client"

import Footer from "@/app/_components/Footer";
import Favorites from "@/app/_components/Favorites";
import fetchComics from "@/app/_functions/fetchComics";
import {useEffect, useState} from "react";
import Header from "@/app/_components/Header";
import "../../globals.css"

export default function AllProducts() {

    const [ comics, setComics ] = useState([]);

    useEffect(() => {
        const getComics = async () => {
            await fetchComics(setComics);
        };

        getComics();
    }, []);


    let sortedProducts = [...comics].sort((a, b) => b.rating - a.rating);


    return <>

        <Header/>
        <div className="MainContainer py-4">

            <div className="d-flex flex-wrap py-2 gap-4  justify-content-center justify-content-sm-between">
                {
                    sortedProducts.map(( comic, index) => {

                        return <div className="singleComicWrapper w-25" key={ index }>

                            <a href={`/Products/${ comic.id }`} target="_blank">
                                <div className="singleComicImg noSelect">
                                    <img src={ comic.imgURL }/>
                                </div>
                            </a>
                            <div className="comicTitle text-dark noSelect">
                                <h5>{ comic.title }</h5>
                                <p>author:{ comic.author }</p>
                                <Favorites comicId={ comic.id }/>
                            </div>


                        </div>


                    })}
            </div>

        </div>

        <Footer/>


    </>


};