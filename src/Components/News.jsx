import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'
import image from '../Assests/images/icon-blue-paper-camera.jpg'
const News = () => {
    const [data, setData] = useState()
    const [Load, SetLoad] = useState(true)
    const FetchApi = async () => {
        const response = await axios.get('https://newsapi.org/v2/everything?q=india&apiKey=5bef830707fa4e92b4f4c390fb95dde7')
        setData(response.data.articles)
        setTimeout(() => {
            SetLoad(false)
        }, 2000);
    }
    useEffect(() => {
        FetchApi()
    }, [])
    console.log(data);
    return (
        <>
            {
                Load === true ? <Loader />
                    :
                    <>
                        <div className="container-fluid">
                            <div className="row">
                                <marquee width="100%" direction="left" height="30%">
                                    <h3>This is Home page where You can see all types of News from all over the world</h3>
                                </marquee>
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
                                                        <p className="card-text">{result.description && result.description.slice(0, 55)}...</p>
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
                    </>
            }
        </>
    )
}

export default News