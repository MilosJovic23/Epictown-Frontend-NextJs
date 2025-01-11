


export default async function handler (req,res) {

    if( req.method !== 'GET' ){
        return throw new Error( "Method not implemented,can only handle GET method" );
    }
    try {
        const response = await fetch(process.env.API_ENDPOINT,{
            method: "POST",
            header:{
                "Content-Type": "application/json",
            },
            body : JSON.stringify({search:"batman"}),

        })
        const data = await response.json();
        return res.status(200).json({data})
    }
    catch(error){
        console.error(error);
    }

}