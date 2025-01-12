"use client"

import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../search.css"


const Search = ()=>{

    const [searchTerm,setSearchTerm]=useState("");
    const [searchResults,setSearchResults]=useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try{

                const response = await fetch("/api/search?search="+searchTerm);
                const result = await response.json();
                setSearchResults( Array.isArray(result.data) ? result.data : [] );

            }
            catch(error){
                console.error("error fetching data:",error);
            }
        }
        if (searchTerm === "") {
            setSearchResults([]);
        }
        if ( searchTerm ) {
            fetchData();
        }
    }, [searchTerm]);



    return<>

        <div>
            <form className="form-field">
                <div className="searchContainer">
                    <span className="icon"><AiOutlineSearch/></span>
                    <input placeholder="search comics"
                           onChange={e => setSearchTerm( e.currentTarget.value )} value={ searchTerm }/>
                </div>

            </form>
        </div>


            {
                searchTerm.length > 0 &&

                <div className="searchResultsStyle">

                    {
                        searchResults.map((comic, index) => {
                            return <div className="result-item" key={index}>
                                <div className="resultCard">
                                    <a href={`/Products/${comic.id}`} target="_blank">

                                        <div className="imgHover">
                                            <img src={comic.imgURL}/>
                                            <div className="text">{comic.title}</div>
                                        </div>

                                    </a>

                                </div>
                            </div>
                        })
                    }

                </div>


            }


    </>
}

export default Search;