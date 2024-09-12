import {collection, getDocs} from "firebase/firestore";
import {db} from "@/app/firebase";


const fetchComics= async(setComics)=>{

    try{
        const comicCollection = collection(db, 'comics');

        const comicSnapshot = await getDocs(comicCollection);

        const comicList = comicSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        setComics(comicList);
    }catch (error) {
        console.error('Error fetching comics: ', error);
    }
};

export default fetchComics;