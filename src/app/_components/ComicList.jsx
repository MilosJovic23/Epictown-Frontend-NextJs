"use client"

import { useEffect } from "react";

import { useRecoilState } from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";

import fetchComics from "@/app/_functions/fetchComics";


const ComicList = ()=>{

    const [comics, setComics] = useRecoilState(ComicsState);

    useEffect(() => {
        fetchComics(setComics);
    }, []);


    console.log(comics)


    return<>
        <div className="MainContainer py-5">

        <div className="d-flex justify-content-between py-3">
            <a>Best sellers</a>
            <a>view all</a>
        </div>
        <div className="d-flex flex-wrap gap-1 align-self-center">
            {
                comics.map((comic)=>{
                    return <div className="singleComicWrapper" key={comic.id}>
                        <a href={`/Products/${comic.id}`} target="_blank">
                            <div className="singleComicImg">
                                <img src={comic.imgURL}/>
                            </div>
                            <div className="comicTitle text-dark">
                                <h5>{comic.title}</h5>
                                <p>author:{comic.author}</p>
                            </div>

                        </a>
                    </div>


                })}
        </div>

        </div>
    </>
}


export default ComicList;