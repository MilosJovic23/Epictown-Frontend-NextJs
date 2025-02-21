"use client"

import {useRecoilState} from "recoil";
import {FavoriteComics} from "@/app/_libs/States/Favorites";
import "../globals.css"
import Footer from "@/app/_components/Footer";
import Favorites from "@/app/_components/Favorites";
import "bootstrap/dist/css/bootstrap.css"
import Header from "@/app/_components/Header";
import {useFetch} from "@/app/_hooks/useFetch";

export default  function Wishlist () {


    const [favorites,setFavorites] = useRecoilState(FavoriteComics);
    const { data:comics,error,loading} = useFetch(process.env.NEXT_PUBLIC_ALLPRODUCTS_URL);

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error: {error}</p>;

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