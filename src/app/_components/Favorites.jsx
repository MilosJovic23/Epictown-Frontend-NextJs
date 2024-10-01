"use client"


import { HiOutlineStar,HiStar } from "react-icons/hi2";
import { useSetRecoilState} from "recoil";
import {FavoritesComics} from "@/app/_libs/States/Favorites";
import {useEffect, useState} from "react";

const Favorites = ({comicId}) =>{

    const [ IsClicked , setIsClicked ] = useState(false)
    const setFavorites = useSetRecoilState(FavoritesComics);
    const favorites = useSetRecoilState(FavoritesComics);


    const addToFavorites = () =>{


        setFavorites((prevFavorites) => {

            const currentFavorites = Array.isArray(prevFavorites) ? prevFavorites : [];

            return currentFavorites.includes(comicId)
                ? currentFavorites.filter((id) => id !== comicId)
                : [...currentFavorites, comicId]
        });

        setIsClicked(!IsClicked);



    }




    return <>
        <div onClick= { addToFavorites } className="like-button" style={{ cursor: 'pointer' }}>
        {
            !IsClicked ?  (
                <HiOutlineStar style={{ fontSize: '1.7rem', color: 'black' }} />
            ):(
                <HiStar style={{ fontSize: '1.7rem', color: 'gold' }} />
            )
        }
        </div>





    </>
}


export default Favorites;