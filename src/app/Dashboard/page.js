"use client"


import Header from "@/app/_components/Header";
import "../dashboard.css"
import "bootstrap/dist/css/bootstrap.css"

import { useState } from "react";



import {collection, addDoc, query, getDocs,where } from "firebase/firestore";
import {db} from "@/app/firebase";
import Footer from "@/app/_components/Footer";
import deleteDocument from "@/app/_functions/deleteDocFirestore";
import useFirestoreCollection from "@/app/_functions/firestoreCollection";
import editDocument from "@/app/_functions/editDocFirestore";

import {useRecoilState} from "recoil";
import {UserState} from "@/app/_libs/States/UserState";


export default function Dashboard () {

    const [ formData, setFormData ] = useState({
        title: "" ,
        author: "" ,
        description: "" ,
        id: "" ,
        imgURL: "" ,
        rating: ""
    });

    const [ EditFormData, setEditFormData ] = useState({
        title: "" ,
        author: "" ,
        description: "" ,
        id: "" ,
        imgURL: "" ,
        rating: ""
    });

    const [ addDocError,setAddDocError ] =useState("");
    const [ EditComicId,setEditComicId ] = useState(null)
    const [userState,setUserState]=useRecoilState( UserState );
    const { data: comics, loading } = useFirestoreCollection("comics");

    if (loading) {
        return <div>Loading...</div>;
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const q = query(collection(db, 'comics'), where('id', '==', formData.id));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                setAddDocError('Comic with the same id already exists!');

            } else {
                const docRef = await addDoc(collection(db, 'comics'), formData);
                console.log('Document written with ID: ', docRef.id);

            }
        } catch (error) {
            console.error('Error adding document: ', error);
        }
        setFormData({ title: "" ,
            author: "" ,
            description: "" ,
            id: "" ,
            imgURL: "" ,
            rating: ""})
    };



    const handleInputChange =  (e)=>{
        const { name, value } = e.target;

        const newValue =  (name === 'rating' || name === "id") ? Number(value) : value;

        setFormData((prevData)=>({
            ...prevData,
            [name]:newValue
        }));
    }

    const handleEditInputChange =  (e)=>{
        const { name, value } = e.target;

        const newValue =  (name === 'rating' || name === "id") ? Number(value) : value

        setEditFormData((prevData)=>({
            ...prevData,
            [name]:newValue
        }));
    }

    const deleteItem = async (comicId) =>{

        const q = query(collection(db, "comics"), where("id", "==", comicId ));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            deleteDocument("comics",doc.id)
        });

    }
    const EditComic = (comic)=>{
        setEditComicId(comic.id);
        setEditFormData(comic);
        console.log(EditFormData,EditComicId)
    }
    const handleEditSubmit = async (e,comic) => {
        e.preventDefault();


        const q = query(collection(db, "comics"), where("id", "==", EditComicId ));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach( (doc)  => {
            editDocument("comics",doc.id,EditFormData)
        });

        setEditComicId(null);
    }




    return <>
        <Header/>
        <div className="MainContainer my-4 pt-5">
            <h4 className="py-2">Add new item to database</h4>
            <form className="d-flex gap-2 flex-wrap" onSubmit={handleSubmit}>

                <div className="col-12 col-sm-12 col-md">
                    <input
                        type={'text'} placeholder="Title" value={formData.title} name="title"
                        onChange={handleInputChange} className="form-control" required
                    />
                </div>

                <div className="col-12 col-sm-12 col-md">
                    <input
                        type="text" placeholder="Description" value={formData.description} name="description"
                        onChange={handleInputChange} className="form-control" required
                    />

                </div>

                <div className="col-12 col-sm-12 col-md">
                    <input
                        type="text" placeholder="Author" value={formData.author} name="author"
                        onChange={handleInputChange} className="form-control" required
                    />
                </div>

                <div className="col-12 col-sm-12 col-md">
                    <input
                        type="text" placeholder="Format" value={formData.format} name="format"
                        onChange={handleInputChange} className="form-control" required
                    />
                </div>

                <div className="col-12 col-sm-12 col-md">
                    <input
                        placeholder="Rating" value={formData.rating} type="number" step="0.1" min="0.0" max="5.0"
                        name="rating" onChange={handleInputChange} className="form-control" required
                    />
                </div>

                <div className="col-12 col-sm-12 col-md">
                    <input
                        type="number" placeholder="Id" value={formData.id} name="id" id="floatingInputInvalid"
                        onChange={handleInputChange}
                        className="form-control" required
                    />
                </div>

                <div className="col-12 col-sm-12 col-md">
                    <input
                        type="text" placeholder="imgUrl" value={formData.imgURL} name="imgURL"
                        onChange={handleInputChange} className="form-control"
                    />
                </div>
                <button className="btn btn-dark w-auto" type="submit">Add</button>

            </form>
        </div>

        <div className="MainContainer my-5 table-responsive">
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
                            {
                                EditComicId === comic.id ?
                                    <tr>
                                        <td>
                                            <form className="d-flex gap-1" onSubmit={e => handleEditSubmit(e, comic)}>

                                                <input
                                                    type='text' placeholder="Title" defaultValue={comic.title}
                                                    name="title"
                                                    onChange={handleEditInputChange} className="form-control"
                                                />
                                                <input
                                                    type="text" placeholder="Description"
                                                    defaultValue={comic.description}
                                                    name="description" onChange={handleEditInputChange}
                                                    className="form-control"
                                                />
                                                <input
                                                    type="text" placeholder="Author" defaultValue={comic.author}
                                                    name="author"
                                                    onChange={handleEditInputChange} className="form-control"
                                                />
                                                <input
                                                    type="text" placeholder="Format" defaultValue={comic.format}
                                                    name="format"
                                                    onChange={handleEditInputChange} className="form-control"
                                                />
                                                <input
                                                    placeholder="Rating" type="number" defaultValue={comic.rating}
                                                    step="0.1"
                                                    min="0.0" max="5.0" name="rating" onChange={handleEditInputChange}
                                                    className="form-control"
                                                />
                                                <input
                                                    type="text" placeholder="imgURL" defaultValue={comic.imgURL}
                                                    name="imgURL"
                                                    onChange={handleEditInputChange} className="form-control"
                                                />

                                                <button className="btn btn-outline-primary btn-sm w-auto"
                                                        type="submit">update
                                                </button>

                                            </form>
                                        </td>
                                    </tr>
                                    :
                                    <tr>
                                        <td>{comic.id}</td>
                                        <td>{comic.title}</td>
                                        <td>{comic.author}</td>
                                        <td>{comic.rating}</td>
                                        <td>
                                            <a type="button" className="btn btn-outline-dark btn-sm"
                                               onClick={() => EditComic(comic)}>Edit</a>
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <a type="button" className="btn btn-outline-danger btn-sm"
                                               onClick={() => deleteItem(comic.id)}>Delete</a>
                                        </td>

                                    </tr>
                            }

                            </tbody>

                        </>
                    })
                }
            </table>
        </div>
        <Footer/>

    </>
};

