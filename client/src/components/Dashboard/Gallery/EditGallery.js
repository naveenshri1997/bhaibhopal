import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import JoditEditor from 'jodit-react';
const EditGallery = () => {
    const { id } = useParams();
    const history = useNavigate();
    const wrapRef = React.useRef(null);

    const showsidebar = event => {
        wrapRef.current.classList.add("show");
    }
    const overlay = event => {
        wrapRef.current.classList.remove("show");
    }

    const editor = useRef(null);
    const [title, settitle] = useState('');
    const [imagecategory, setimagecategory] = useState('');
    const [category] = useState('gallery');
    const [image, setimage] = useState('');

    useEffect(() => {
        showonegallery();
    }, [])

    const showonegallery = async () => {
        const res = await fetch(`https://bhaibhopal.onrender.com/showonegallery/${id}`);
        const data = await res.json();
        console.log('dta', data);
        settitle(data.data.title);
        setimagecategory(data.data.imagecategory);
        setimage(data.data.image);
    }

    const updategallery = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('imagecategory', imagecategory);
        formData.append('category', category);
        formData.append('image', image);

        const res = await fetch(`https://bhaibhopal.onrender.com/updategallery/${id}`, {
            method: "PUT",
            body: formData
        });
        const data = await res.json();
        console.log("value=", data);
        if (res.status === 400 || !data) {
            window.alert("Law Not Updated");
        } else {
            history('/showgallery');
            console.log("edit", formData);
        }
    }
        const url = 'http://localhost:5000/';
    return (
        <>
            <div className="wrapper" ref={wrapRef} >
                <div onClick={overlay} id="overlay" ></div>
                <Sidebar />
                <div className="content">
                    <TopNavbar showsidebar={showsidebar} />
                    <main className="bg-opacity-25 min-vh-100" style={{ background: '#e2e2e2e3' }}>
                        <div className="container-fluid p-3 p-md-4">

                            <div className="card rounded">
                                <div className="card-body">
                                    <form method='POST' encType='multipart/form-data'>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="fs-4 text-secondary fw-bolder">Update Gallery</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>

                                        <hr />
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={title} onChange={(e) => settitle(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Subtitle</label>
                                            <div className="col-sm-9">
                                                {/* <input type="text" className="form-control" value={imagecategory} onChange={(e) => setimagecategory(e.target.value)} /> */}
                                                <select className="form-control" name="cars" id="cars" onChange={(e) => setimagecategory(e.target.value)}>
                                                    <option >{imagecategory}</option>
                                                    <option value="volvo" >Volvo</option>
                                                    <option value="saab" >Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Upload Files</label>
                                            <div className="col-sm-9">
                                                <input type="file"  className="form-control" onChange={(e) => setimage(e.target.files[0])} />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">
                                                <input type="submit" value='Update Gallery' onClick={updategallery} className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
                                            </div>
                                        </div>
                                    </form>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="bg-light shadow text-secondary text-center d-flex flex-column flex-md-row justify-content-between p-3 p-md-4">
                        <div>Copyright &copy; 2022 <a href="#">DCodeMania</a></div>
                        <div>Made with ❤️ in India</div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default EditGallery
