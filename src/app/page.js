
import ComicList from "@/app/_components/ComicList";
import Search from "@/app/_components/serachByTitle";

import "./MainPageStyle.css";
import Navbar from "@/app/_components/Navbar";
import "bootstrap/dist/css/bootstrap.css"
export default function Home() {
  return (
      <>
          <span>
              <Navbar/>
          </span>



                  <ComicList/>




      </>

  );
}
