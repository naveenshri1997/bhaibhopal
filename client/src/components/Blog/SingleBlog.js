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
const SingleBlog = () => {


    const { id } = useParams();
    const [blog, setblog] = useState([]);
    useEffect(() => {
        const res = fetch(`https://bhaibhopal.onrender.com/showoneblog/${id}`, {
            method: 'GET',
        }).then((res) => res.json()).then((data) => {
            setblog(data.data);
        })
    }, [id])
    const imageval = String(blog.image);
    const str = imageval.slice(14);
    const url = `https://bhaibhopal.onrender.com/${str}`;
    console.log('uirl', url);
    const lurl = "https://bhaibhopal.onrender.com";

    return (
        <>
            <Topbar />
            <Navbar />
            <section className='laws'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>                             
                            <div className="card all_law">
                                    <div className="card-body">
                                        <h4>{blog.title}</h4>
                                            <hr/>
                                            <h5>{blog.subtitle}</h5>              
                                            {blog.details}
                                            <iframe src={url} width="100%" height="800px" />
                                            <br />
                                            <br />

                                                <div className='row'>
                                                    <div className='col'>
                                                    Share at:
                                                    <ul className='law_list'>
                                                        <li style={{ 'float': 'left' }}><FacebookShareButton url={`${lurl}+/blog/${blog._id}`}>
                                                        <FacebookIcon size={40} round={true} />
                                                        </FacebookShareButton></li>
                                                        <li style={{ "float": "left" }}> <WhatsappShareButton url={`${lurl}+/blog/${blog._id}`}>
                                                        <WhatsappIcon size={40} round={true} />
                                                        </WhatsappShareButton></li>
                                                        <li style={{ "float": "left" }}><TwitterShareButton url={`${lurl}+/blog/${blog._id}`}>
                                                        <TwitterIcon size={40} round={true} />
                                                        </TwitterShareButton></li>
                                                        <li style={{ "float": "left" }}><LinkedinShareButton url={`${lurl}+/blog/${blog._id}`}>
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
            </section>
        </>
    )
}
export default SingleBlog
