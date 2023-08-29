import React, { useState, useEffect } from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar/Navbar';
import { useParams } from "react-router-dom";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from "react-share";
const Singlejudgement = () => {


    const { id } = useParams();
    const [judgements, setjudgements] = useState([]);
    useEffect(() => {
        const res = fetch(`http://localhost:5000/getonejudgement/${id}`, {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            setjudgements(data.data);
        })
    }, [id])
    const imageval = String(judgements.image);
    const str = imageval.slice(14);
    const url = `http://localhost:5000/${str}`;
    console.log('uirl', url);
    const lurl = "http://localhost:5000";
    
    return (
        <>
            <Topbar />
            <Navbar />
            <section className='laws'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>                            
                            <div className="card">               
                                <div className="card all_law">
                                    <div className="card-body">
                                        <h4>{judgements.title}</h4>
                                            <hr/>
                                            <h5>{judgements.subtitle}</h5>              
                                            {judgements.details}
                                            <iframe src={url} width="100%" height="800px" />
                                            <br />
                                            <br />

                                                <div className='row'>
                                                    <div className='col'>
                                                    Share at:
                                                    <ul className='law_list'>
                                                        <li style={{ 'float': 'left' }}><FacebookShareButton url={`${lurl}+/judgement/${judgements._id}`}>
                                                        <FacebookIcon size={40} round={true} />
                                                        </FacebookShareButton></li>
                                                        <li style={{ "float": "left" }}> <WhatsappShareButton url={`${lurl}+/judgement/${judgements._id}`}>
                                                        <WhatsappIcon size={40} round={true} />
                                                        </WhatsappShareButton></li>
                                                        <li style={{ "float": "left" }}><TwitterShareButton url={`${lurl}+/judgement/${judgements._id}`}>
                                                        <TwitterIcon size={40} round={true} />
                                                        </TwitterShareButton></li>
                                                        <li style={{ "float": "left" }}><LinkedinShareButton url={`${lurl}+/judgement/${judgements._id}`}>
                                                        <LinkedinIcon size={40} round={true} />
                                                        </LinkedinShareButton></li>
                                                    </ul>
                                                    </div>                    
                                                </div>
                                        </div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Singlejudgement