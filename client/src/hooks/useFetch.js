import { useEffect, useState } from "react"
import { client } from "../client";

const getData = async ({ query }) => {
    try {
        let data = await client.fetch(query);
        return data;
    } catch (error) {
        throw error;
    }
}

const useFetch = (query) => {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    useEffect(() => {
        let fetchData = async () => {
            try {
                let data = await getData({ query: query });
                setData(data);
            } catch (error) {
                console.error(error);
                setError(error);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };
}

export default useFetch;