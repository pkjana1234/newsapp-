import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import image from '../Assests/images/icon-blue-paper-camera.jpg'
const Newsitem = () => {
    const [data, setData] = useState([]);

    const ApiFetch = async () => {
        const res = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=5bef830707fa4e92b4f4c390fb95dde7');
        const result = await res.json();
        // console.log(result);
        const articles = result.articles
        console.log(articles);
        setData(articles)
    }
    useEffect(() => {
        ApiFetch()
    }, [])

    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 4000)
    })
    return (

        <>
            {
                load === true ? <Loader />
                    :
                    <div className="container-fluid">
                        <div className="row">

                            {data && data.map((result, Index) => {
                                return (
                                    <>
                                        <div className="col-md-3 mt-3" key={Index}>
                                            <div className="card" key={Index}>
                                                <div className="card-wrapper">
                                                    <img src={result.urlToImage === null ? image : result.urlToImage} class="card-img-top img-fluid" alt="..." />
                                                </div>
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <p className="text-muted">{result.author}</p>
                                                        <p className="text-muted">{result.publishedAt}</p>
                                                    </div>
                                                    <h5 className="card-title">{result.title.slice(0, 40)}...</h5>
                                                    <p className="card-text">{result.description === null ? '' : result.description.slice(0, 55)}...</p>
                                                    <div className="text-center">
                                                        <a href={result.url} ><button type="" className="btn btn-primary">READ MORE...</button> </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
            }

        </>

    );

}

export default Newsitem