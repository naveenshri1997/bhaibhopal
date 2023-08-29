import React, { useState, useEffect } from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar/Navbar';
import Temp from './Temp';
const Template = () => {
    useEffect(() => {
        alltemplate();
    }, []);
    const [template, settemplate] = useState([]);
    const alltemplate = async () => {
        const res = await fetch('https://bhaibhopal.onrender.com/showtemplate', {
            method: 'GET',
        })
        const result = await res.json();
        if (result === 500 || !result) {
            window.alert("data not added");
        } else {
            console.log('ok');
            settemplate(result.data);
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
                        <div className='col-md-8'>
                            {template.map((temps) => {
                                return (
                                    <Temp temps={temps} />
                                )
                            })}
                        </div>
                        <div className='col-md-4'>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Template
