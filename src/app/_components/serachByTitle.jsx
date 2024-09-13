"use client"



import {useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import {useEffect, useState} from "react";


const Search = ()=>{


    const [searchTerm,setSearchTerm]=useState('');
    const comics= useRecoilValue(ComicsState);

    let searchByTitleId= [];


    const search = ()=>{

        comics.forEach( comic =>{

           if( comic.title.toLowerCase().includes(searchTerm.toLowerCase()) ){

               searchByTitleId.push(comic.id);

           }

        })
    }
    useEffect(() => {
        searchByTitleId=[]
    }, [search]);

    return<>

        <div>
            <form >
                <input type="text" placeholder="search comics" onChange={e=>setSearchTerm(e.currentTarget.value)}/>
                <button type="button" onClick={search}>search</button>
            </form>

        </div>
        { searchByTitleId &&
            comics.map((comic)=>{
                    const arrFilter=searchByTitleId.filter(searchId=>searchId===comic.id)
                    console.log(arrFilter)
                if(arrFilter){

                   return <div className="singleComicWrapper" key={comic.id}>
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
               }
            }
            )


                }
    </>
}

export default Search;