"use client"

import {useEffect} from "react";

import {useRecoilState, useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/app/firebase";


const ComicList = ()=>{

    const [comics, setComics] = useRecoilState(ComicsState);

    useEffect(() => {
        const fetchComics= async()=>{

            try{
                const comicCollection = collection(db, 'comics');

                const comicSnapshot = await getDocs(comicCollection);

                const comicList = comicSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setComics(comicList);
            }catch (error) {
                console.error('Error fetching comics: ', error);
            }
        };
        fetchComics()
    }, []);

    const comicsValue=useRecoilValue(ComicsState)
    console.log(comicsValue)

    return<>


        {comicsValue.map((comic)=>{
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