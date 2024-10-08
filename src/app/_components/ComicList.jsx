
"use client"


import { useRecoilState } from "recoil";
import { ComicsState } from "@/app/_libs/States/ComicsState";

import fetchComics from "@/app/_functions/fetchComics";
import {useEffect, useState} from "react";
import Favorites from "@/app/_components/Favorites";


const ComicList = ()=> {

    // const [comics, setComics] = useRecoilState( ComicsState );


    const [ comics, setComics ] = useState([]);

    useEffect(() => {
        const getComics = async () => {
            await fetchComics(setComics);
        };

        getComics();
    }, []);


    let sortedProducts = [...comics].sort((a, b) => b.rating - a.rating).slice(0,7);


    return<>
        <div className="MainContainer py-4">
        <div className="comic-list-text d-flex  justify-content-between py-3">
            <h5>Best rated</h5>
            <a href='/Products/AllProducts'>view all</a>
        </div>
        <div className="d-flex flex-wrap py-2 gap-4  justify-content-center justify-content-sm-between">
            {
                sortedProducts.map(( comic,index)=>{

                    return <div className="singleComicWrapper" key={ index }>

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
    </>
}


export default ComicList;