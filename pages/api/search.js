
import {searchAllProducts} from "../../services/productServices";
import {query} from "firebase/firestore";


export default async function handler (req,res) {

    if ( req.method !== "GET" ) {
        return res.status(404).json({ message: "Only GET method allowed" });
    }

    try{
        const response = await fetch(process.env.PRODUCT_API_URL,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({search:"batman"}),
        });

        const data = await response.json();
        res.status(200).json(data)

    }
    catch(error){
        console.error("Error fetching data from PHP API:", error);
        res.status(500).json({ message: "Failed to fetch data from PHP API", error: error.message });
    }



}