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

const IpcLaw = ({ ipclaw }) => {
    const url = "http://localhost:5000";
    return (
        <>
            <Link to={`/law/${ipclaw._id}`}>
                <div className="card all_law mb-4">
                    <div className="card-body">
                        <h6 className='law_category'>{ipclaw.category}</h6>
                        <h4>{ipclaw.law_title}</h4>
                        <h5>{ipclaw.law_Subtitle}</h5>
                        {ipclaw.law_details.length > 250 ?
                            `${ipclaw.law_details.substring(0, 250)}...` : ipclaw.law_details
                        }
                        <br/>
                        <br/>                        

                        <div className='row'>
                        <div className='col-md-6'>
                            Share at: 
                                <ul className='law_list'>
                                   <li style={{ 'float': 'left' }}><FacebookShareButton url={`${url}+/law/${ipclaw._id}`}>
                                    <FacebookIcon size={40} round={true} />
                                </FacebookShareButton></li>
                                <li style={{ "float": "left" }}> <WhatsappShareButton url={`${url}+/law/${ipclaw._id}`}>
                                    <WhatsappIcon size={40} round={true} />
                                </WhatsappShareButton></li>
                                <li style={{ "float": "left" }}><TwitterShareButton url={`${url}+/law/${ipclaw._id}`}>
                                    <TwitterIcon size={40} round={true} />
                                </TwitterShareButton></li>
                                <li style={{ "float": "left" }}><LinkedinShareButton url={`${url}+/law/${ipclaw._id}`}>
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
            </Link>
        </>
    )
}

export default IpcLaw