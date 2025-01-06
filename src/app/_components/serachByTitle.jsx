"use client"



import {useRecoilValue, useSetRecoilState} from "recoil";
import { ComicsState } from "@/app/_libs/States/ComicsState";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../search.css"
import fetchComics from "@/app/_functions/fetchComics";

const Search = ()=>{

    const [searchTerm,setSearchTerm]=useState("");
    const [searchResults,setSearchResults]=useState([]);

    // const comics = useRecoilValue( ComicsState );
    // const setComics = useSetRecoilState(ComicsState)

    const [data , setData]=useState([]);


    let resultsByTitle=[];

    // const search = ()=>{
    //
    //     data.forEach( comic =>{
    //
    //        if( comic.title.toLowerCase().includes(searchTerm.toLowerCase()) || comic.author.toLowerCase().includes(searchTerm.toLowerCase()) ){
    //            resultsByTitle.push( comic );
    //        }
    //     }
    //     )
    //
    //     setSearchResults(resultsByTitle);
    // }

    const handleSearch = async () => {
        try {
            const response = await fetch(`localhost/Epictown/restapi/search/api.php?query=${searchTerm}`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({searchTerm})
            });
            if (!response.ok){
                throw new Error("Failed to fetch results");
            }
            const data = await response.json();
            console.log(data)
            setData(data);
        }

        catch(error){
            console.log(error)
        }
    }

    // useEffect(() => {
    //     if (searchTerm === "") {
    //         setSearchResults([]);
    //     }
    // }, [searchTerm]);



    return<>

        <div>
            <form className="form-field">
                <div className="searchContainer">
                    <span className="icon"><AiOutlineSearch/></span>
                    <input placeholder="search comics" onClick={handleSearch}
                           onChange={e => setSearchTerm( e.currentTarget.value )} value={ searchTerm }/>
                </div>

            </form>
        </div>


            {/*{*/}
            {/*    searchTerm.length > 0 &&*/}

            {/*    <div className="searchResultsStyle">*/}

            {/*        { data.map(( comic, index) => {*/}
            {/*            return <div className="result-item"  key={ index }>*/}
            {/*                        <div className="resultCard">*/}
            {/*                            <a href={`/Products/${ comic.id }`} target="_blank">*/}

            {/*                                <div className="imgHover">*/}
            {/*                                    <img src={ comic.imgURL }/>*/}
            {/*                                    <div className="text">{ comic.title }</div>*/}
            {/*                                </div>*/}

            {/*                            </a>*/}

            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*        })}*/}

            {/*    </div>*/}


            {/*}*/}



    </>
}

export default Search;