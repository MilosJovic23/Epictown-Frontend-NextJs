"use client"

import {useEffect} from "react";

import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";

import fetchComics from "@/app/_functions/fetchComics";


const ComicList = ()=>{

    const [comics, setComics] = useRecoilState(ComicsState);

    useEffect(() => {
        fetchComics(setComics);
    }, []);




    return<>


        {comics.map((comic)=>{
            return <div class="singleComicWrapper" key={comic.id}>
                <a href={`/Products/${comic.id}`} target="_blank">
                    <div className="singleComicImg">
                        <img src={comic.imgURL}/>
                    </div>
                    <div className="comicTitle">
                        <h3>{comic.title}</h3>
                        <p>author:{comic.author}</p>
                    </div>

                </a>
            </div>


        })}
    </>
}


export default ComicList;