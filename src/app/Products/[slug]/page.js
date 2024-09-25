
"use client"

import { useRecoilValue } from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";

import {useEffect, useState} from "react";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";



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
        <Navbar/>
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
    <Footer/>
    </>


};