import React from 'react'
import { Link } from 'react-router-dom'
const Bloge = ({ blogs }) => {
    const imageval = String(blogs.image);
    const str = imageval.slice(14);
    const url = `https://bhaibhopal.onrender.com/${str}`;
    console.log('uirl', url);
    return (
        <>

            <Link to={`/blog/${blogs._id}`}>
                <div className="card">
                <img style={{"width":'100%',"height":"250px"}} class="card-img-top" src={url}/>
                    <div style={{"height":"150px"}} className="card-body">
                        <h5>{blogs.title}</h5>
                        <h6>{blogs.subtitle}</h6>
                        {blogs.details.length > 50 ?
                            `${blogs.details.substring(0,50)}...` : blogs.details
                        }
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Bloge
