import React, { useEffect, useState } from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar/Navbar';

const About = () => {
    const [about, setabout] = useState([]);
    useEffect(() => {
        const res = fetch('http://localhost:5000/showabout', {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            setabout(data.data);
        })
    }, [])
    return (
        <>
            <Topbar />
            <Navbar />
            <section className='laws'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            {about.map((data) => {
                                return (
                                    <>
                                        
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About