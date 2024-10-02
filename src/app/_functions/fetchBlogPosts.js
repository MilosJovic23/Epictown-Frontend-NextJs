
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/app/firebase";


const fetchBlogPosts= async(setBlogPosts)=>{

    try{
        const blogCollection = collection(db, 'blog');

        const comicSnapshot = await getDocs(blogCollection);

        const blogList = comicSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        setBlogPosts(blogList);
    }catch (error) {
        console.error('Error fetching blog posts: ', error);
    }
};

export default fetchBlogPosts;