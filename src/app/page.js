
import ComicList from "@/app/_components/ComicList";

import "./globals.css"
import "./Home.css";
import Header from "@/app/_components/Header";
import "bootstrap/dist/css/bootstrap.css"
import Hero from "@/app/_components/Hero";
import Footer from "@/app/_components/Footer";

import Blog from "@/app/_components/Blog";
export default function Home() {
  return (
      <>

              <Header/>
              <Hero/>
              <ComicList/>
              <Blog/>
              <Footer/>

      </>

  );
}
