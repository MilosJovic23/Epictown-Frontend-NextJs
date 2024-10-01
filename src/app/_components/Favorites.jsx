"use client"


import { HiOutlineStar,HiStar } from "react-icons/hi2";
import { useRecoilState } from "recoil";
import { FavoriteComics } from "@/app/_libs/States/Favorites";


const Favorites = ({comicId}) =>{

    const [favorites, setFavorites] = useRecoilState(FavoriteComics);

    const addToFavorites = () =>{

        setFavorites((prevFavorites) => {

            const currentFavorites = Array.isArray(prevFavorites) ? prevFavorites : [];

            return currentFavorites.includes(comicId)
                ? currentFavorites.filter((id) => id !== comicId)
                : [...currentFavorites, comicId]
        });

    }

        const isFavorite = favorites.includes(comicId);


    return <>
        <div onClick= { addToFavorites } className="like-button" style={{ cursor: 'pointer' }}>
        {
            !isFavorite ?  (
                <HiOutlineStar style={{ fontSize: '1.7rem', color: 'black' }} />
            ):(
                <HiStar style={{ fontSize: '1.7rem', color: 'gold' }} />
            )
        }
        </div>





    </>
}


export default Favorites;