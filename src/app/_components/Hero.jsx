
"use client"

import "../Hero.css"
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {useFetch} from "@/app/_hooks/useFetch";

const Hero = () =>{

    const { data:comics,error,loading} = useFetch(process.env.API_ALLPRODUCTS_URL);

    if ( loading ) return <p>Loading...</p>
    if ( error ) return <p>Error: {error}</p>;

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
            breakpoint: { max: 1024, min: 845 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 845, min: 0 },
            items: 1
        }
    };

    return<>

        <section className="heroSection">
            <div className="MainContainer d-sm-flex justify-content-between">
                <div className="hero-title-width text-center text-sm-start hero-title">
                    <h1>Graphic novels, comic books and much more</h1>
                    <a id="exploreBtn" href="/Products/AllProducts">explore</a>
                </div>
                <div className="carousel-width text-center text-sm-start mt-5 mt-sm-0 align-self-center">
                    <Carousel  responsive={ responsive }>
                        {
                            comics.map( ( comic,index ) => {
                                return <div className="comicCarousel" key={ index }>
                                    <a href={`/Products/${ comic.id }`} target="_blank">
                                        <div className="comicCarouselImg">
                                            <img src={ comic.imgURL } alt={comic.title}/>
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