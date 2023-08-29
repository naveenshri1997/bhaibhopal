import React, { useEffect, useState } from 'react'
const SingleHero = () => {
    const [hero, sethero] = useState([]);
    useEffect(() => {
        const res = () => {
            fetch('https://bhaibhopal.onrender.com/showhero', {
                method: 'GET',
            }).then((res) => res.json()).then((data) => {
                sethero(data.data);
            })
        };
        return () => res();
    }, [])
    const url = 'https://bhaibhopal.onrender.com/';
    // console.log('mydata', about)
    return (
        <>

            <section className='hero'>
                <div className='container'>
                    <div className='row title_heading'>
                        <div className='col-md-12'>
                            <center>        
                                    <h1>Our Heros</h1>
                            </center>
                        </div>
                    </div>                    
                    <div className='row'>   
                        <div className='col-md-12'>
                            <div className='row'> 
                            {hero.map((data, i) => {
                                return (
                                    <>
                                            <div className='col-md-4'>
                                                <div className='card hero_box'>
                                                <img width="50%" height="300px" alt={data.title} src={url + data.image.slice(14)} ></img>
                                                </div>
                                                <div>
                                                <h4 className='text-center'>{data.title}</h4>
                                                </div>
                                            </div>
                                    </>
                                )
                            }
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleHero
