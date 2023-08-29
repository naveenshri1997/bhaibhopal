import React, { useEffect, useState } from 'react'
import Topbar from '../Topbar'
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
const SinglePageLaw = () => {
  const { lawId } = useParams();
  const [law, setLaw] = useState([]);
  useEffect(() => {
    const res = fetch(`https://server-dccr.onrender.com/lawdataone/${lawId}`, {
      method: 'GET',
    }).then((res) => res.json()).then((data) => {
      setLaw(data.data);
      console.log(data)
    })
  }, [lawId])
  const url = "https://server-dccr.onrender.com";
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
                  <h4>{law.law_title}</h4>
                  <hr/>
                  <h5>{law.law_Subtitle}</h5>                
                  {law.law_details}
                  <br />
                  <br />

                  <div className='row'>
                    <div className='col'>
                      Share at:
                      <ul className='law_list'>
                        <li style={{ 'float': 'left' }}><FacebookShareButton url={`${url}+/law/${law._id}`}>
                          <FacebookIcon size={40} round={true} />
                        </FacebookShareButton></li>
                        <li style={{ "float": "left" }}> <WhatsappShareButton url={`${url}+/law/${law._id}`}>
                          <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton></li>
                        <li style={{ "float": "left" }}><TwitterShareButton url={`${url}+/law/${law._id}`}>
                          <TwitterIcon size={40} round={true} />
                        </TwitterShareButton></li>
                        <li style={{ "float": "left" }}><LinkedinShareButton url={`${url}+/law/${law._id}`}>
                          <LinkedinIcon size={40} round={true} />
                        </LinkedinShareButton></li>
                      </ul>
                    </div>                    
                  </div>
                </div>
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

export default SinglePageLaw
