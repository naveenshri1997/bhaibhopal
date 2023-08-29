import React, { useEffect, useState } from 'react'
import Topbar from '../Topbar'
import Navbar from '../Navbar/Navbar';
import IpcLaw from './IpcLaw';

const Law = () => {
    const [law, setLaw] = useState([]);
    useEffect(() => {
        const res = fetch('https://bhaibhopal.onrender.com/lawdata', {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            setLaw(data.data);
        })
    },[])
    return (
        <>
            <Topbar />
            <Navbar />
            <section className='laws'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            {law.map((ipclaw) => {
                                return (
                                    <IpcLaw ipclaw={ipclaw}/>
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

export default Law
