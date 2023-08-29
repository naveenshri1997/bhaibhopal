import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';
const AddMeeting = () => {
    const wrapRef = React.useRef(null);
    const history = useNavigate();
    const showsidebar = event => {
        wrapRef.current.classList.add("show");
    }
    const overlay = event => {
        wrapRef.current.classList.remove("show");
    }

    const editor = useRef(null);
    const [name, setname] = useState('');
    const [venue, setvenue] = useState('');
    const [time, settime] = useState('');
    const [day, setday] = useState('');
    const [contact, setcontact] = useState('');
    const [category] = useState('meeting');
    const [image, setimage] = useState('');
    const [error, seterrror] = React.useState(false);
    const addmeeting = async (e) => {        

        e.preventDefault();
        if (!name || !venue || !time||!day||!contact) {
            seterrror(true);
            return false
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('venue', venue);
        formData.append('time', time);
        formData.append('day', day);
        formData.append('contact', contact);
        formData.append('category', category);
        formData.append('image', image);


        console.log("add", formData);

        const res = await fetch('http://localhost:5000/addmeeting', {
            method: 'POST',
            body: formData
        });
        const data = await res.json();
        if (res.status == 500 || !data) {
            window.alert("data not added");
        } else {
            history('/addmeeting');
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
                                            <div className="fs-4 text-secondary fw-bolder">Add Meeting</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>
                                        <hr />
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Name</label> 
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} />
                                                {error && !name && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Venue</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={venue} onChange={(e) => setvenue(e.target.value)} />
                                                {error && !venue && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Time</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={time} onChange={(e) => settime(e.target.value)} />
                                                {error && !time && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Day</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={day} onChange={(e) => setday(e.target.value)} />
                                                {error && !day && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Contact</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={contact} onChange={(e) => setcontact(e.target.value)} />
                                                {error && !contact && <span className='error'>Please fil this Field *</span>}
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
                                                <input type="submit" onClick={addmeeting} value="Add Meeting" className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
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
export default AddMeeting;