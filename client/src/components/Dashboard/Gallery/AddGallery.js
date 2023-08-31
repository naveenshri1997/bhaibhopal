import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';
const AddGallery = () => {
    const wrapRef = React.useRef(null);
    const history = useNavigate();
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
    const [error, seterrror] = React.useState(false);

    const addgallery = async (e) => {
        e.preventDefault();
        if (!title || !imagecategory || !image) {
            seterrror(true);
            return false
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('imagecategory', imagecategory);
        formData.append('category', category);
        formData.append('image', image);

        const res = await fetch('https://bhaibhopal.onrender.com/addgallery', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        if (res.status == 500 || !data) {
            window.alert("data not added");
        } else {
            history('/addgallery');
            toast.success('Added Sucessfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            timer();
        }
    }
    const timer = () => {
        setTimeout(() => {
            window.location.reload(false);
        }, 1300);
    }
    return (
        <>
            <div className="wrapper" ref={wrapRef} >
                <div onClick={overlay} id="overlay" ></div>
                <Sidebar />
                <div className="content">
                    <TopNavbar showsidebar={showsidebar} />
                    <ToastContainer />
                    <main className="bg-opacity-25 min-vh-100" style={{ background: '#e2e2e2e3' }}>
                        <div className="container-fluid p-3 p-md-4">
                            <div className="card rounded">
                                <div className="card-body">
                                    <form method='POST' encType='multipart/form-data'>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="fs-4 text-secondary fw-bolder">Add Gallery</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>
                                        <hr />
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={title} onChange={(e) => settitle(e.target.value)} />
                                                {error && !title && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Image category</label>
                                            <div className="col-sm-9">
                                                {/* <input type="text" className="form-control" value={imagecategory} onChange={(e) => setimagecategory(e.target.value)} /> */}
                                                <select className="form-control" name="cars" id="cars" onChange={(e) => setimagecategory(e.target.value)}>
                                                    <option>Select Category</option>
                                                    <option value="volvo" >Volvo</option>
                                                    <option value="saab" >Saab</option>
                                                    <option value="mercedes">Mercedes</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                                {error && !imagecategory && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Upload Files</label>
                                            <div className="col-sm-9">
                                                <input type="file" className="form-control" onChange={(e) => setimage(e.target.files[0])} />
                                                {error && !image && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">
                                                <input type="submit" onClick={addgallery} value="Add Gallery" className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
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
export default AddGallery;
