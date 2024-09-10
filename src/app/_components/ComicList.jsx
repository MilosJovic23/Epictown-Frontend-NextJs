"use client"

import { db } from "../firebase"
import { collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from "react";
import fetchComics from "@/app/_functions/FetchComics";
const ComicList = ()=>{

    const [comics,setComics]=useState([]);

    useEffect(() => {

        fetchComics();
    }, []);

    console.log(comics);

    return<>


        {comics.map((comic)=>{
            return <div key={comic.id}>
                <a href={`/products/${comic.id}`} target="_blank">
                    <h3>{comic.title}</h3>
                    <p>author:{comic.author}</p>
                    <p>artist:{comic.artist}</p>
                    <img src={comic.imgURL}/>
                </a>
                </div>



        })}
    </>
}


export default ComicList;