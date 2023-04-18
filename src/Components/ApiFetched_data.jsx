import React,{useState,useEffect} from 'react'

const ApiFetched_data = () => {
    const [data, setData] = useState([]);

    const ApiFetch = async () => {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=1e1037c70d2145489fe315b71fee7a8a');
        const result = await res.json();
        // console.log(result);
        const articles = result.articles
        console.log(articles);
        setData(articles)
    }
    useEffect(() => {
        ApiFetch()
    }, [])
    return (
        {data}
    )
}

export  {ApiFetched_data}
