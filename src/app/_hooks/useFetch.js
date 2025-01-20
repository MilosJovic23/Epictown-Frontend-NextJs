import {useEffect, useRef, useState} from "react";



export const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [trigger, setTrigger] = useState(0);

    const refetch =()=>{
        setTrigger(prev=> prev+1);
    }
    useEffect(() => {

            const fetchData = async () => {
                try
                {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const result = await response.json();
                    setData(result);
                }
                catch(error)
                {
                    setError(error.message || "Error fetching data");
                }
                finally
                {
                    setLoading(false);
                }
            }
        fetchData();

    },[url,refetch]);

    return { data, error, loading,refetch};

}