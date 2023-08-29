import React from 'react'
import { Link } from 'react-router-dom'
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
const Judgem = ({ judge }) => {
    const url = "https://bhaibhopal.onrender.com";

    return (
        <>
          
            <Link to={`/judgement/${judge._id}`}>
                <div className="card">                   

                <div className="card all_law mb-4">
                    <div className="card-body">
                        <h6 className='law_category'>{judge.category}</h6>
                        <h4>{judge.title}</h4>
                        <h5>{judge.subtitle}</h5>
                        {judge.details.length > 250 ?
                            `${judge.details.substring(0, 250)}...` : judge.details
                        }
                        <br/>
                        <br/>                        

                        <div className='row'>
                        <div className='col-md-6'>
                            Share at: 
                                <ul className='law_list'>
                                <li style={{ 'float': 'left' }}><FacebookShareButton url={`${url}+/judgement/${judge._id}`}>
                                    <FacebookIcon size={40} round={true} />
                                </FacebookShareButton></li>
                                <li style={{ "float": "left" }}> <WhatsappShareButton url={`${url}+/judgement/${judge._id}`}>
                                    <WhatsappIcon size={40} round={true} />
                                </WhatsappShareButton></li>
                                <li style={{ "float": "left" }}><TwitterShareButton url={`${url}+/judgement/${judge._id}`}>
                                    <TwitterIcon size={40} round={true} />
                                </TwitterShareButton></li>
                                <li style={{ "float": "left" }}><LinkedinShareButton url={`${url}+/judgement/${judge._id}`}>
                                    <LinkedinIcon size={40} round={true} />
                                </LinkedinShareButton></li>
                            </ul>
                        </div>
                        <div className='col-md-6'>
                                <h6 className='dummy_btn'>Read More</h6>
                        </div>
                    </div>          
                    </div>                    
                </div>
                  
                </div>
            </Link>
        </>
    )
}

export default Judgem
