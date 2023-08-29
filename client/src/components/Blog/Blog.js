import React, { useState, useEffect } from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar/Navbar';
import Bloge from './Bloge';
const Blog = () => {
    useEffect(() => {
        allblog();
    }, []);
    const [blog, setblog] = useState([]);
    const allblog = async () => {
        const res =await fetch('http://localhost:5000/showblog', {
            method: 'GET',
        })
        const result = await res.json();
        if (result === 500 || !result) {
            window.alert("data not added");
        } else {
            console.log('ok');
            setblog(result.data);
            console.log(result);
        }
    }
    return (
        <>
            <Topbar />
            <Navbar />
            <section className='laws'>
                <div className='container'>
                    <div className='row'>
                            {blog.map((blogs) => {
                                return (
                                    <div className='col-md-4'>
                                        <Bloge blogs={blogs} />
                                    </div>                              
                                )
                            })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog