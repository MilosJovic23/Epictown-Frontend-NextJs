
"use client"


import Favorites from "@/app/_components/Favorites";
import {useFetch} from "@/app/_hooks/useFetch";


const ComicList = ()=> {


    const { data:comics,error,loading} = useFetch(process.env.NEXT_PUBLIC_API_URL);

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error: {error}</p>;

    let sortedProducts = comics.sort((a, b) => b.rating - a.rating).slice(0,7);



    return<>
        <div className="MainContainer py-4">
        <div className="comic-list-text d-flex  justify-content-between py-3">
            <h5>Best rated</h5>
            <a href='/Products/AllProducts'>view all</a>
        </div>
        <div className="d-flex flex-wrap py-2 gap-4  justify-content-center justify-content-sm-between">
            {
                sortedProducts.map(( comic,index)=>{

                    return <div className="singleComicWrapper" key={ index }>

                        <a href={`/Products/${ comic.id }`} target="_blank">
                            <div className="singleComicImg noSelect">
                                <img src={ comic.imgURL } alt={comic.title}/>
                            </div>
                        </a>
                            <div className="comicTitle text-dark noSelect">
                                <h5>{ comic.title }</h5>
                                <p>author:{ comic.author }</p>
                                <Favorites comicId={ comic.id }/>
                            </div>


                    </div>




                })}
        </div>

        </div>
    </>
}


export default ComicList;