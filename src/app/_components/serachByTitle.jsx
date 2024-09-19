"use client"



import {useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import {useEffect, useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ()=>{

    const [searchTerm,setSearchTerm]=useState();
    const [searchResults,setSearchResults]=useState([]);

    const comics= useRecoilValue(ComicsState);


    let resultsByTitle=[];

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

    useEffect(() => {
        if (searchTerm === "") {
            setSearchResults([]);
        }
    }, [searchTerm]);

    console.log(searchTerm);

    return<>

        <div>
            <form className="form-field">
                <div className="searchContainer">
                    <span className="icon"><AiOutlineSearch/></span>
                    <input placeholder="Search comics" onInput={search}
                           onChange={e => setSearchTerm(e.currentTarget.value)} value={searchTerm}/>
                </div>

            </form>
        </div>
        <div className="searchResultsContainer">

            {
                    searchResults.map((comic, index) => {
                        return <div  key={index}>
                            <div className="resultCard">
                                <a href={`/Products/${comic.id}`} target="_blank">

                                    <img src={comic.imgURL}/>
                                    <div className="resultCard-title">
                                        <p>{comic.title}</p>
                                    </div>


                                </a>

                            </div>

                        </div>
                    })


            }

        </div>


    </>
}

export default Search;