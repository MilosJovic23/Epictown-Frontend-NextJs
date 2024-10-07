"use client"


import Header from "@/app/_components/Header";
import "../dashboard.css"
import "bootstrap/dist/css/bootstrap.css"

import {useEffect, useState} from "react";

import fetchComics from "@/app/_functions/fetchComics";
import createNewItem from "@/app/_functions/CreateNewItem";
import CreateNewItem from "@/app/_functions/CreateNewItem";

export default function Dashboard() {

    const [formData, setFormData] = useState({
        title: "" ,
        author: "" ,
        description: "" ,
        id: null ,
        imgUrl: "" ,
        rating: null
    });
    const [ comics, setComics ] = useState([]);

    useEffect(() => {
        fetchComics(setComics);

    }, []);


    const handleInputChange = (e)=>{
        const { name, value } = e.target;

        setFormData((prevData)=>({
            ...prevData,
            [name]:value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };



    useEffect(()=>{

        const IdCheck = comics.some(comic => comic.id !== parseInt(formData.id) );
        console.log(IdCheck);

        // if ( IdCheck || formData.id !== null ){
        //
        //     console.log("there is no item with that id")
        // }

    },[handleSubmit]);







    return <>
        <Header/>


        <div className="MainContainer">

            <form className="row gap-2" onSubmit={handleSubmit}>

                <div className="col">
                    <input
                        type={'text'} placeholder="Title" value={formData.title} name="title" onChange={handleInputChange}  className="form-control"
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="Description" value={formData.description} name="description" onChange={handleInputChange} className="form-control"
                    />

                </div>

                <div className="col">
                    <input
                        type="text" placeholder="Author" value={formData.author} name="author" onChange={handleInputChange} className="form-control"
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="Format" value={formData.format} name="format" onChange={handleInputChange} className="form-control"
                    />
                </div>

                <div className="col">
                    <input
                        placeholder="Rating" value={formData.rating} type="number" min="0" max="5.0" name="rating" onChange={handleInputChange} className="form-control"
                    />
                </div>

                <div className="col">
                    <input
                        type="number" placeholder="Id" value={formData.id} name="id" onChange={handleInputChange} className="form-control"
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="imgUrl" value={formData.imgUrl} name="imgUrl" onChange={handleInputChange} className="form-control"
                    />
                </div>
                <button className="btn btn-dark w-auto" type="submit">submit</button>

            </form>
        </div>

        <div>
            <table className="table table-striped table-dark table-hover">
                {
                    comics.map((comic) => {
                        return <>

                        <tr>
                            <td className="table-danger">{ comic.title }</td>
                        </tr>

                    </>
                    })
                }
            </table>
        </div>


    </>
};