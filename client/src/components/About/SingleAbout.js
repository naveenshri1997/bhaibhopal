import React, { useEffect, useState } from 'react'
const SingleAbout = () => {
    const [about, setabout] = useState([]);
    useEffect(() => {
        const res = () => {
            fetch('http://localhost:5000/showabout', {
                method: 'GET',
            }).then((res) => res.json()).then((data) => {
                setabout(data.data);
            })
        };
        return () => res();
    }, [])
    const url = 'https://bhaibhopal.onrender.com/';
    // console.log('mydata', about)    
    return (
        <>

            <section className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            {about.map((data, i) => {
                                // console.log('mydata',data)
                                for (var count = 0; count <= data.ordering; count++) {
                                    if (data.ordering % 2 == 0) {
                                        return (
                                            <>
                                                <div className='row about_block'>
                                                    <div className='col-md-5 '>
                                                        <div className='card about_block_img'>
                                                            <img width="350px" height="350px" alt={data.title} src={url + data.image.slice(14)}></img>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-7'>
                                                        <h1>{data.title}</h1>
                                                        <h2>   {data.subtitle} </h2>
                                                        {data.details}
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    } else {
                                        return (
                                            <>
                                                <div className='row about_block'>

                                                    <div className='col-md-7'>
                                                        <div className='card about_block_text'>
                                                            <h1>{data.title}</h1>
                                                            <h2>   {data.subtitle} </h2>
                                                            <h5>
                                                                {data.details}
                                                            </h5>   
                                                        </div>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        <div className='card about_block_img'>

                                                            <img width="350px" height="350px" alt={data.title} src={url + data.image.slice(14)}></img>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                }
                            }
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleAbout
