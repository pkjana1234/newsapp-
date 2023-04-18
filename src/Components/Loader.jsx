import React, { useEffect, useState } from 'react'
import '../Assests/Custom Css/Loader-Module.css'
const Loader = () => {
    const [load, setLoad] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoad(false)
        }, 4000)
    })
    return (
        <>
            {load === true ?
                <div className='loader'>
                    <div className='scanner'>
                        <span>Loading...</span>
                    </div>
                </div>
                :
                ''

            }





        </>
    )
}

export default Loader
