"use client"


import Header from "@/app/_components/Header";
import "../dashboard.css"
import "bootstrap/dist/css/bootstrap.css"

import {useEffect, useState} from "react";

import fetchComics from "@/app/_functions/fetchComics";
import createNewItem from "@/app/_functions/CreateNewItem";

export default function Dashboard() {

    const data = {
        "id":22,
        "title":"New Comic",
        "rating":2.1
    };

    const [ comics, setComics ] = useState([]);

    useEffect(() => {
        fetchComics(setComics);
    }, []);


    const HandleSubmit = () =>{
        console.log("works");
    };

    useEffect(() => {
        createNewItem(data);
    }, [HandleSubmit]);



    return <>
        <Header/>


        <div className="MainContainer">

            <form className="row gap-2" onSubmit={ HandleSubmit }>

                <div className="col">
                    <input
                        type="text" placeholder="comic title" className="form-control" id="inputTitle" aria-label="Enter comic title"
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="description" className="form-control" id="inputDescription"
                    />

                </div>

                <div className="col">
                    <input
                        type="text" placeholder="author" className="form-control" id="inputAuthor"
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="format" className="form-control" id="inputFormat"
                    />
                </div>

                <div className="col">
                    <input
                        type="number" placeholder="rating" className="form-control" id="inputFormat"
                    />
                </div>

                <div className="col">
                    <input
                        type="number" placeholder="comicId" className="form-control" id="inputId"
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="imgUrl" className="form-control" id="inputImgUrl"
                    />
                </div>
                <button className="btn btn-dark w-auto" type="button">submit</button>

            </form>
        </div>

        <div>
            {
                comics.map( (comic) => {
                    return <>
                        <h1>{comic.title}</h1>
                    </>
                })
            }
        </div>





    </>
};