"use client"

import {useRecoilState} from "recoil";
import {FavoriteComics} from "@/app/_libs/States/Favorites";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import {useEffect} from "react";
import Navbar from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Favorites from "@/app/_components/Favorites";


export default  function Wishlist () {


    const [favorites,setFavorites] = useRecoilState(FavoriteComics);
    const [comic,setComics] = useRecoilState(ComicsState);

    const filteredFavorites = comic.filter((el)=> favorites.includes(el.id) )

    console.log(filteredFavorites);



    return <>
        <Navbar/>

        <div className="MainContainer d-flex flex-wrap  justify-content-center gap-2 py-5 ">
        {
            filteredFavorites.length === 0 ?
                <h3>Nothing here. Add comics to your wishlist</h3>
                :
                filteredFavorites.map((comic, index) => {

                    return <div className="singleComicWrapper h-25" key={index}>

                        <a href={`/Products/${comic.id}`} target="_blank">
                            <div className="singleComicImg noSelect">
                                <img src={comic.imgURL}/>
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