
"use client"


import Header from "@/app/_components/Header";
import "../dashboard.css"
import "bootstrap/dist/css/bootstrap.css"
import { useState} from "react";
import Footer from "@/app/_components/Footer";
import {useFetch} from "@/app/_hooks/useFetch";

export default function Dashboard () {

    const { data:comics,error,loading,refetch} = useFetch(process.env.NEXT_PUBLIC_API_URL);
    const [ EditComicId,setEditComicId ] = useState(null);
    const [ loadingAddNew ,setLoadingAddNew ] = useState(false);
    const [ message ,setMessage ] = useState(null);
    const [ formData, setFormData ] = useState({
        title: "" ,
        author: "" ,
        description: "" ,
        id: "" ,
        format:"",
        imgURL: "" ,
        rating: ""
    });
    const [ EditFormData, setEditFormData ] = useState({
        title: "" ,
        author: "" ,
        description: "" ,
        id: "" ,
        format:"",
        imgURL: "" ,
        rating: ""
    });

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error: {error}</p>;

    const handleSubmit = async (e) => {

        e.preventDefault();
        try{
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( {
                    title: formData.title,
                    author: formData.author,
                    description: formData.description,
                    format: formData.format,
                    imgURL: formData.imgURL,
                    rating: formData.rating,
                })

            })
            const result = await response.json();
            setMessage(result.message);

        }
        catch(error){
            console.error("there was an error trying to create new comic", error);
            setMessage( error || "Failed to add comic book" );
        }
        finally {
            setLoadingAddNew(false);
            refetch();
        }
        setFormData({
            title: "" ,
            author: "" ,
            description: "" ,
            id: "" ,
            imgURL: "" ,
            rating: ""
        })

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

    const deleteItem = async (comicbookId) =>{

        try{
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({"id":comicbookId})
            })

        }
        catch(error){
            console.error("there was an error trying to delete item", error);
        }
        finally {
            refetch();
        }

    }
    const EditComic = (comicbook)=>{
        setEditComicId(comicbook.id);
        setEditFormData(comicbook);
    }
    const handleEditSubmit = async (e,comicbook) => {

        e.preventDefault();
        try{
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "id":comicbook.id,
                    "title":EditFormData.title,
                    "author":EditFormData.author,
                    "description":EditFormData.description,
                    "rating":EditFormData.rating,
                    "format":EditFormData.format,
                    "imgURL":EditFormData.imgURL,
                })
            })
            const result = await response.json();
            console.log(result.message);
        }
        catch(error){
            console.error("there was an error trying to delete item", error);
        }
        finally {
            refetch();
        }

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
                <button className="btn btn-dark w-auto" type="submit">{ loadingAddNew? "Loading...": "Add"}</button>

            </form>
            {message && <p>{message}</p>}
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
                    comics.map((comicbook) => {

                        return (
                            <>
                            <tbody key={comicbook.id} >
                            {
                                EditComicId === comicbook.id ?

                                        <tr key={`edit-${comicbook.id}`}>
                                        <td colSpan="7" >
                                            <form className="d-flex gap-1" onSubmit={e => handleEditSubmit(e, comicbook) } >

                                                <input
                                                    type='text' placeholder="Title" defaultValue={comicbook.title}
                                                    name="title"
                                                    onChange={handleEditInputChange} className="form-control"
                                                />
                                                <input
                                                    type="text" placeholder="Description"
                                                    defaultValue={comicbook.description}
                                                    name="description" onChange={handleEditInputChange}
                                                    className="form-control"
                                                />
                                                <input
                                                    type="text" placeholder="Author" defaultValue={comicbook.author}
                                                    name="author"
                                                    onChange={handleEditInputChange} className="form-control"
                                                />
                                                <input
                                                    type="text" placeholder="Format" defaultValue={comicbook.format}
                                                    name="format"
                                                    onChange={handleEditInputChange} className="form-control"
                                                />
                                                <input
                                                    placeholder="Rating" type="number" defaultValue={comicbook.rating}
                                                    step="0.1"
                                                    min="0.0" max="5.0" name="rating" onChange={handleEditInputChange}
                                                    className="form-control"
                                                />
                                                <input
                                                    type="text" placeholder="imgURL" defaultValue={comicbook.imgURL}
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

                                    <tr key={`view-${comicbook.id}`} >
                                        <td>{comicbook.id}</td>
                                        <td>{comicbook.title}</td>
                                        <td>{comicbook.author}</td>
                                        <td>{comicbook.rating}</td>
                                        <td>
                                            <a type="button" className="btn btn-outline-dark btn-sm"
                                               onClick={() => EditComic(comicbook)}>Edit</a>
                                        </td>

                                        <td>
                                            <a type="button" className="btn btn-outline-danger btn-sm"
                                               onClick={() => deleteItem(comicbook.id)}>Delete</a>
                                        </td>

                                    </tr>
                            }

                            </tbody>
                        </>
                        )
                    }

                    )
                }
            </table>
        </div>
        <Footer/>

    </>
};

