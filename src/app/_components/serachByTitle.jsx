"use client"



import {useRecoilValue} from "recoil";
import {ComicsState} from "@/app/_libs/States/ComicsState";
import {useEffect, useState} from "react";


const Search = ()=>{

    const [searchTerm,setSearchTerm]=useState([]);

    const comics= useRecoilValue(ComicsState);

    let searchByTitleId= [];


    const search = ()=>{

        comics.forEach( comic =>{

           if( comic.title.toLowerCase().includes(searchTerm.toLowerCase()) || comic.author.toLowerCase().includes(searchTerm.toLowerCase()) ){

               searchByTitleId.push(comic);
           }
        }
        )
    }
    useEffect(() => {
        searchByTitleId=[];
    }, [search]);



    return<>

        <div>
            <form >
                <input type="text" placeholder="search comics" onChange={e=>setSearchTerm(e.currentTarget.value)}/>
                <button type="button" onClick={search}>search</button>
            </form>
            {

                !searchByTitleId?( searchByTitleId.map((comic,index)=> {

                        return <div  key={index}>
                            <a href={`/Products/${comic.id}`} target="_blank">
                                <div >
                                    <img src={comic.imgURL}/>
                                </div>
                                <div >
                                    <h3>{comic.title}</h3>
                                    <p>author:{comic.author}</p>
                                </div>
                            </a>
                        </div>

                    }
                )
                ):(
                ''
                )



            }
        </div>

    </>
}

export default Search;