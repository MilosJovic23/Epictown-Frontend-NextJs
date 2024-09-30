
import ComicList from "@/app/_components/ComicList";


import "./Home.css";
import Header from "@/app/_components/Navbar";
import "bootstrap/dist/css/bootstrap.css"
import Hero from "@/app/_components/Hero";
import Footer from "@/app/_components/Footer";
import Favorites from "@/app/_components/Favorites";
export default function Home() {
  return (
      <>
            <Header/>
            <Hero/>
            <ComicList/>
            <Footer/>
      </>

  );
}
