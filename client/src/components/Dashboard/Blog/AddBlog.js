import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';
const AddBlog = () => {
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
    const [subtitle, setsubtitle] = useState('');
    const [details, setdetails] = useState('');
    const [category] = useState('blog');
    const [image, setimage] = useState('');
    const [error, seterrror] = React.useState(false);
    const addblog = async (e) => {        

        e.preventDefault();
        if (!title || !subtitle || !details) {
            seterrror(true);
            return false
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('details', details);
        formData.append('category', category);
        formData.append('image', image);


        console.log("add", formData);

        const res = await fetch('http://localhost:5000/addblog', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        if (res.status == 500 || !data) {
            window.alert("data not added");
        } else {
            history('/addblog');
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
                                            <div className="fs-4 text-secondary fw-bolder">Add Blog</div>
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
                                            <label className="col-sm-3 col-form-label">Subtitle</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={subtitle} onChange={(e) => setsubtitle(e.target.value)} />
                                                {error && !subtitle && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Details</label>
                                            <div className="col-sm-9">
                                                <JoditEditor
                                                    ref={editor}
                                                    value={details}
                                                    tabIndex={1} // tabIndex of textarea
                                                    onBlur={newContent => setdetails(newContent)} // preferred to use only this option to update the content for performance reasons
                                                    onChange={newContent => { }}
                                                />
                                                {error && !details && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Upload File</label>
                                            <div className="col-sm-9">
                                                <input type="file" className="form-control" onChange={(e) => setimage(e.target.files[0])} />
                                                {error && !image && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        {/* <input type="hidden" className="form-control" value="judgement" onChange={(e) => setcategory(e.target.value)} /> */}

                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">
                                                <input type="submit" onClick={addblog} value="Add Blog" className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
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
export default AddBlog;