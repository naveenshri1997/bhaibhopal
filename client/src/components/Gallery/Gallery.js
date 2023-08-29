import React, { useEffect, useState } from 'react'
import Topbar from '../Topbar';
import Navbar from '../Navbar/Navbar';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const Gallery = () => {

    useEffect(() => {
        allgalllery();
    }, []);

    const [galllery, setgalllery] = useState([]);
    const allgalllery = async () => {
        const res = await fetch('https://bhaibhopal.onrender.com/showgallery', {
            method: 'GET',
        })
        const result = await res.json();
        if (result === 500 || !result) {
            window.alert("data not added");
        } else {
            console.log('ok');
            setgalllery(result.data);
            console.log(result);
        }
    }
    const url = `https://bhaibhopal.onrender.com/`;
    return (
        <>
            <Topbar />
            <Navbar />
            <section className='laws'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <ResponsiveMasonry
                                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                            >
                                <Masonry columnsCount={3} gutter="10px">
                                    {galllery.map((data, i) => (
                                        < img
                                            key={i}
                                            src={url + data.image.slice(14)}
                                            style={{ width: "100%", display: "block" }}
                                            alt=""
                                        />
                                        
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>                            
                        </div>                       
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery
