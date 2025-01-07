


export async function searchAllProducts(query){

    const response = await fetch(process.env.PRODUCT_API_URL+`?q=${query}`);
    return await response.json();

}