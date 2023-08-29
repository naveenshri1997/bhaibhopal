import React, { useEffect, useState } from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar/Navbar';
import Judgem from './Judgem';
const Judgement = () => {

    useEffect(() => {
        alljudgement();
    }, []);

    const [judgements, setjudgements] = useState([]);  
    const alljudgement = async () => {
        const res = await fetch('http://localhost:5000/showjudgement', {
            method: 'GET',
        })
        const result = await res.json();
        if (result === 500 || !result) {
            window.alert("data not added");
        } else {
            console.log('ok');
            setjudgements(result.data);
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
                            {judgements.map((judge) => {
                                return (
                                    <Judgem judge={judge} />
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

export default Judgement