"use client"



import {useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import {useEffect, useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ()=>{

    const [searchTerm,setSearchTerm]=useState('');
    const [searchResults,setSearchResults]=useState([]);

    const comics= useRecoilValue(ComicsState);


    const resultsByTitle=[];

    const search = ()=>{

        comics.forEach( comic =>{

           if( comic.title.toLowerCase().includes(searchTerm.toLowerCase()) || comic.author.toLowerCase().includes(searchTerm.toLowerCase()) ){

               resultsByTitle.push(comic);

               console.log(searchResults);
           }
        }
        )
        setSearchResults(resultsByTitle);
    }


    return<>

        <div>
            <form className="form-field">
                <input  placeholder="Search comics" onInput={search} onChange={e => setSearchTerm(e.currentTarget.value)}/>
                <span className="icon"><AiOutlineSearch /></span>
            </form>
            <div>

                {
                    searchResults.map((comic,index)=> {

                        return <div  key={index}>
                            <a href={`/Products/${comic.id}`} target="_blank">
                                <div >
                                    <img src={comic.imgURL}/>
                                </div>
                                <div >
                                    <h3>{comic.title}</h3>
                                </div>
                            </a>
                        </div>

                    })


                }
            </div>

        </div>

    </>
}

export default Search;