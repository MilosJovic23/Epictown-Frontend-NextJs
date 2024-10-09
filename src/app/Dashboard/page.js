"use client"


import Header from "@/app/_components/Header";
import "../dashboard.css"
import "bootstrap/dist/css/bootstrap.css"

import {useEffect, useState} from "react";

import fetchComics from "@/app/_functions/fetchComics";

import {collection, addDoc, query, getDocs,where } from "firebase/firestore";
import {db} from "@/app/firebase";
import Footer from "@/app/_components/Footer";
import deleteDocument from "@/app/_functions/deleteDocFirestore";


export default function Dashboard() {

    const [formData, setFormData] = useState({
        title: "" ,
        author: "" ,
        description: "" ,
        id: "" ,
        imgURL: "" ,
        rating: ""
    });

    const [ comics, setComics ] = useState([]);

    useEffect(() => {
        const getComics = async () => {
            await fetchComics(setComics);
        };

        getComics();
    }, []);



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const q = query(collection(db, 'comics'), where('id', '==', formData.id));
            const querySnapshot = await getDocs(q);

            !querySnapshot.empty ?
                console.log('Comic with the same title already exists!')
                :
                console.log('Document written with ID: ', (await addDoc(collection(db, 'comics'), formData)).id);

        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };



    const handleInputChange =  (e)=>{
        const { name, value } = e.target;

        const newValue =  (name === 'rating' || name === "id") ? Number(value) : value;

        setFormData((prevData)=>({
            ...prevData,
            [name]:newValue
        }));
    }


    const deleteItem = async (comicId) =>{

        const filteredComics = comics.filter( comic=> comic.id !== comicId );
        setComics(filteredComics);

        const q = query(collection(db, "comics"), where("id", "==", comicId ));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            console.log(`Document ID: ${doc.id}`);
            deleteDocument("comics",doc.id)
        });

    }



    return <>
        <Header/>


        <div className="MainContainer my-4 pt-5">
            <h4 className="py-2">Add new item to database</h4>
            <form className="row gap-2" onSubmit={handleSubmit}>

                <div className="col">
                    <input
                        type={'text'} placeholder="Title" value={formData.title} name="title" onChange={handleInputChange}  className="form-control" required
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="Description" value={formData.description} name="description" onChange={handleInputChange} className="form-control" required
                    />

                </div>

                <div className="col">
                    <input
                        type="text" placeholder="Author" value={formData.author} name="author" onChange={handleInputChange} className="form-control" required
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="Format" value={formData.format} name="format" onChange={handleInputChange} className="form-control" required
                    />
                </div>

                <div className="col">
                    <input
                        placeholder="Rating" value={formData.rating} type="number" step="0.1" min="0.0" max="5.0" name="rating" onChange={handleInputChange} className="form-control" required
                    />
                </div>

                <div className="col">
                    <input
                        type="number" placeholder="Id" value={formData.id} name="id" onChange={handleInputChange} className="form-control" required
                    />
                </div>

                <div className="col">
                    <input
                        type="text" placeholder="imgUrl" value={formData.imgURL} name="imgURL" onChange={handleInputChange} className="form-control"
                    />
                </div>
                <button className="btn btn-dark w-auto" type="submit">Add</button>

            </form>
        </div>

        <div className="MainContainer my-5">
            <table className="table table-hover">
                <thead>
                <tr>

                    <th>id</th>
                    <th>title</th>
                    <th>author</th>
                    <th>rating</th>

                </tr>
                </thead>
                {
                    comics.map((comic, index) => {
                        return <>

                            <tbody key={index}>
                            <tr>
                                <td>{comic.id}</td>
                                <td>{comic.title}</td>
                                <td>{comic.author}</td>
                                <td>{comic.rating}</td>
                                <td>
                                    <a type="button" className="btn btn-outline-dark btn-sm"
                                       onClick={() => console.log(`Edit comic with id: ${comic.id}`)}>Edit</a>
                                </td>
                                <td>
                                    <a type="button" className="btn btn-outline-danger btn-sm"
                                       onClick={ ()=> deleteItem(comic.id) }>Delete</a>
                                </td>

                            </tr>
                            </tbody>


                        </>
                    })
                }
            </table>
        </div>
        <Footer/>

    </>
};

