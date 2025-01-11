


export default async function handler (req,res) {

    if( req.method !== 'GET' ){
        return res.status(405).json( {message:"Method not implemented,can only handle GET method"} );
    }

    try {

        const query = req.query;

        const response = await fetch(process.env.API_ENDPOINT,{
            method: "POST",
            header:{
                "Content-Type": "application/json",
            },
            body : JSON.stringify({ search: query }),

        })
        const data = await response.json();
        console.log(data);

        res.status(200).json({data});


    }

    catch(error){
        console.error(error);
    }

}