
"use client"

import {useRecoilState, useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import fetchComics from "@/app/_functions/fetchComics";
import {useEffect, useState} from "react";



export default function Products ({params}){

    const [isMounted, setIsMounted] = useState(false);
    const [comics, setComics] = useRecoilState(ComicsState);

    useEffect(() => {
        fetchComics(setComics);
        setIsMounted(true);
    }, []);

    const slugId=params.slug;
    if(!isMounted){
        return <h1>loading..</h1>
    }
    else if(slugId > comics.length)  {
        return <h1>this page doesnt exist</h1>
    }

    return <>

        {comics.map((comic)=>{

            return (comic.id===parseInt(params.slug))?
                (
                    <div className="singleComicWrapper" key={comic.id}>
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
                )
                :
                ("")

        })}

    </>


};