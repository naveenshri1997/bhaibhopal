import React, { useState, useEffect } from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar/Navbar';
import { useParams } from "react-router-dom";
const SingleTemplate = () => {


    const { id } = useParams();
    const [template, settemplate] = useState([]);
    useEffect(() => {
        const res = fetch(`https://bhaibhopal.onrender.com/showonetemplate/${id}`, {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            settemplate(data.data);
        })
    }, [id])
    const imageval = String(template.image);
    const str = imageval.slice(14);
    const url = `https://bhaibhopal.onrender.com/${str}`;
    console.log('uirl', url);
    return (
        <>
            <Topbar />
            <Navbar />
            <section className='laws'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className="card">
                                {/* {console.log("uri",docs[0])} */}
                                <div className="card-body">
                                    <p> thi is singoe</p>
                                    <h4>{template.title}</h4>
                                    <h5>{template.subtitle}</h5>
                                    <p>{template.details}</p>
                                    <p>{template.image}</p>
                                    <iframe src={url} width="100%" height="800px" />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SingleTemplate
