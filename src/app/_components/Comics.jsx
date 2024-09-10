"use client"

import { db } from "../firebase"
import { collection, getDocs } from 'firebase/firestore';
import {useEffect, useState} from "react";
const Comics = ()=>{

    const [comics,setComics]=useState([]);

    useEffect(() => {
        const fetchComics= async()=>{
            try{
                const comicCollection = collection(db, 'comics');

                const comicSnapshot = await getDocs(comicCollection);

                const comicList = comicSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setComics(comicList)
            }catch (error) {
                console.error('Error fetching comics: ', error);
            }
        };
        fetchComics();
    }, []);

    console.log(comics);

    return<>


        {comics.map((comic)=>{
            return <h1>{comic.title}</h1>

        })}
    </>
}


export default Comics;