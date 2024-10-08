
"use client"

import "../Hero.css"
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import fetchComics from "@/app/_functions/fetchComics";
import {useEffect, useState} from "react";

const Hero = () =>{

    const [ comics, setComics ] = useState([]);

    useEffect(() => {
        const getComics = async () => {
            await fetchComics(setComics);
        };

        getComics();
    }, []);

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5

        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return<>

        <section className="heroSection">
            <div className="MainContainer d-flex justify-content-between">
                <div className="hero-col">
                    <h1>Graphic novels, comic books and much more</h1>
                    <a id="exploreBtn" href="/Products/AllProducts">explore</a>
                </div>
                <div className="hero-col">
                    <Carousel  responsive={ responsive }>
                        {
                            comics.map( ( comic,index ) => {
                                return <div className="comicCarousel" key={ index }>
                                    <a href={`/Products/${ comic.id }`} target="_blank">
                                        <div className="comicCarouselImg">
                                            <img src={ comic.imgURL }/>
                                        </div>


                                    </a>
                                </div>


                            })}
                    </Carousel>
                </div>
            </div>

        </section>

    </>


}


export default Hero;