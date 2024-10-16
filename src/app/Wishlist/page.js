"use client"

import {useRecoilState} from "recoil";
import {FavoriteComics} from "@/app/_libs/States/Favorites";
import "../globals.css"
import {useEffect, useState} from "react";

import Footer from "@/app/_components/Footer";
import Favorites from "@/app/_components/Favorites";
import fetchComics from "@/app/_functions/fetchComics";
import "bootstrap/dist/css/bootstrap.css"
import Header from "@/app/_components/Header";

export default  function Wishlist () {


    const [favorites,setFavorites] = useRecoilState(FavoriteComics);
    const [ comics, setComics ] = useState([]);

    useEffect(() => {
        const getComics = async () => {
            await fetchComics(setComics);
        };

        getComics();
    }, []);

    const filteredFavorites = comics.filter((el)=> favorites.includes(el.id) )



    return <>
        <Header/>

        <div className="MainContainer d-flex flex-wrap  justify-content-center gap-2 py-5 ">
        {
            filteredFavorites.length === 0 ?
                <h3>Nothing here. Add comics to your wishlist</h3>
                :
                filteredFavorites.map((comic, index) => {

                    return <div className="singleComicWrapper h-25" key={index}>

                        <a href={`/Products/${comic.id}`} target="_blank">
                            <div className="singleComicImg noSelect">
                                <img src={comic.imgURL} alt={comic.title}/>
                            </div>
                        </a>
                        <div className="comicTitle text-dark noSelect">
                            <h5>{comic.title}</h5>
                            <p>author:{comic.author}</p>
                            <Favorites comicId={comic.id}/>
                        </div>


                    </div>

                })

        }

        </div>
        <Footer/>
    </>
};