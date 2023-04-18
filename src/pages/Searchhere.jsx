import React, { useEffect, useState } from 'react'
import './SearchModule.css'
import image from '../Assests/images/icon-blue-paper-camera.jpg'
import axios from 'axios'
const Searchhere = () => {
  const [data, setData] = useState([])
  const [Inputdata, SetInputdata] = useState('')
  const ApiFetch = async (e) => {
    const query = e.target.value;
    SetInputdata(query)
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=5bef830707fa4e92b4f4c390fb95dde7`)
    setData(response.data.articles)
  }
  useEffect(() => {
    ApiFetch()
  }, [])
  console.log(data);
  return (
    <>
      <div className="conatiner-fluid">
        <marquee width="100%" direction="left" height="30%">
          <h3>Search News Content as you want!</h3>
        </marquee>
        <div className="text-center mt-1">
          <input placeholder="Search Something" onChange={ApiFetch} className="input" type="text" />
        </div><br />
        {
          Inputdata.length > 0 &&
          <>
            <div className="search-h3">
              <h3 className='text-white '>{`You Searched : ${Inputdata}`}</h3>
            </div>
          </>
        }

        <div className="result">
          <div className="row">
            {
              data.length > 0 && Inputdata.length > 0 && data.map((element) => {
                return (
                  <>
                    <div className="col-md-3 mt-4">
                      <div className="card">
                        <div className="card-wrapper">
                          <img src={element.urlToImage === null ? image : element.urlToImage} class="card-img-top img-fluid" alt="..." />
                        </div>

                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <p className="text-muted">{element.author}</p>
                            <p className="text-muted">{element.publishedAt}</p>
                          </div>
                          <h5 className="card-title">{element.title && element.title.slice(0, 40)}...</h5>
                          <p className="card-text">{element.description && element.description.slice(0, 55)}...</p>
                          <div className="mx-auto text-center">
                            <a href={element.url} ><button type="" className="btn btn-primary">READ MORE...</button> </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchhere