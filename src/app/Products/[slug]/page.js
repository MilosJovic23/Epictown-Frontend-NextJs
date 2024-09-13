
"use client"

import {useRecoilState, useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import fetchComics from "@/app/_functions/fetchComics";
import {useEffect, useState} from "react";



export default function Products ({params}){

    const [isMounted, setIsMounted] = useState(false);
    const comics = useRecoilValue(ComicsState);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const slugId=params.slug;
    if(!isMounted){
        return <h5>loading..</h5>
    }
    else if(slugId > comics.length)  {
        return <h1>this page doesnt exist</h1>
    }

    return <>

        {comics.map((comic)=>{

            return (comic.id===parseInt(params.slug))?
                (
                    <div className="singleComicWrapper" key={comic.id}>

                            <div className="singleComicImg">
                                <img src={comic.imgURL}/>
                            </div>
                            <div className="comicTitle">
                                <h3>{comic.title}</h3>
                                <p>author:{comic.author}</p>
                            </div>


                    </div>
                )
                :
                ("")

        })}

    </>


};