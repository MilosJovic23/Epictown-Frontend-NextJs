
import ComicList from "@/app/_components/ComicList";
import Search from "@/app/_components/serachByTitle";

import "./MainPageStyle.css";

export default function Home() {
  return (
    <div >
        <div className="comicSearch">
            <Search/>
        </div>

        <div className="comicListWrapper">
            <ComicList/>
        </div>


    </div>
  );
}
