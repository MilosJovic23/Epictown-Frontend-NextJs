"use client"



import {useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import {useEffect, useState} from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ()=>{

    const [searchTerm,setSearchTerm]=useState('');
    const [searchResults,setSearchResults]=useState([]);

    const comics= useRecoilValue(ComicsState);




    const search = ()=>{


        comics.forEach( comic =>{

           if( comic.title.toLowerCase().includes(searchTerm.toLowerCase()) || comic.author.toLowerCase().includes(searchTerm.toLowerCase()) ){

               setSearchResults([...items, `${items.length + 1}`]);
               console.log(searchResults);
           }
        }
        )
    }
    // useEffect(() => {
    //     searchByTitleId=[];
    // }, [search]);



    return<>

        <div>
            <form className="form-field">
                <input  placeholder="Search comics" o onChange={e => setSearchTerm(e.currentTarget.value)}/>
                <span className="icon"><AiOutlineSearch /></span>
                <button type="button" onClick={search} >search</button>
            </form>
            {/*<div>*/}

            {/*    {*/}
            {/*        searchResults.map((comic,index)=> {*/}

            {/*            return <div  key={index}>*/}
            {/*                <a href={`/Products/${comic.id}`} target="_blank">*/}
            {/*                    <div >*/}
            {/*                        <img src={comic.imgURL}/>*/}
            {/*                    </div>*/}
            {/*                    <div >*/}
            {/*                        <h3>{comic.title}</h3>*/}
            {/*                    </div>*/}
            {/*                </a>*/}
            {/*            </div>*/}

            {/*        })*/}


            {/*    }*/}
            {/*</div>*/}

        </div>

    </>
}

export default Search;