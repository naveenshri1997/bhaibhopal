import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {
    const [slider, setslider] = useState([]);

    useEffect(() => {
        showslider();
    }, []);

    const showslider = () => {
        fetch('https://bhaibhopal.onrender.com/showslider',
            {
                method: 'GET',
            }).then((showslider) => showslider.json()).then((data) => {
                setslider(data.data);
            })
    }
    const url = 'https://bhaibhopal.onrender.com/';
    return (

        <>
            <Carousel showThumbs={false} dynamicHeight={true} className='carousel'>
                {
                    slider.map((data, i) => {
                        return (
                            <div>
                                <img alt={data.title} src={url + data.image.slice(14)} />
                            </div>
                        )
                    })
                }
            </Carousel >
        </>
    )
}
export default Slider

