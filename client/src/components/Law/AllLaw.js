import React, { useEffect, useState } from 'react'
import IpcLaw from './IpcLaw';

const AllLaw = () => {
    const [law, setLaw] = useState([]);
    useEffect(() => {
        const res = fetch('https://bhaibhopal.onrender.com/lawdatanavbar', {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            setLaw(data.data);
        })
    },[])
    return (
        <>
            <section className='laws bg_type1'>
                <div className='container'>
                <div className='row title_heading'>
                        <div className='col-md-12'>
                            <center>        
                                    <h1 style={{'margin-bottom':'50px'}}>Laws</h1>
                            </center>
                        </div>
                    </div> 
                    <div className='row'>
                        
                            {law.map((ipclaw) => {
                                return (
                                    <div className='col-md-4' style={{'min-height':'360px'}}>
                                    <IpcLaw ipclaw={ipclaw}/>
                                    </div>    
                                )
                            })}
                            
                                           
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllLaw
