import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';
const AddContact = () => {
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
    const [contact_no, setcontact_no] = useState('');
    const [email, setemail] = useState('');
    const [details, setdetails] = useState('');
    const [error, seterrror] = React.useState(false);

    const addcontact = async (e) => {
        e.preventDefault();
        if (!name || !contact_no || !email || !details) {
            seterrror(true);
            return false
        }
        const res = await fetch('https://bhaibhopal.onrender.com/addcontact', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                name,
                contact_no,
                email,
                details,
            })
        });
        const data = await res.json();
        console.log("value=", data);
        if (res.status === 500 || !data) {
            window.alert("Contact data not added");
        } else {
            history('/addcontact');
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
                                    <form method='POST'>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="fs-4 text-secondary fw-bolder">Add Contact</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>
                                        <hr />
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} />
                                                {error && !name && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Subtitle</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={contact_no} onChange={(e) => setcontact_no(e.target.value)} />
                                                {error && !contact_no && <span className='error'>Please fil this Field *</span>}
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Subtitle</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={email} onChange={(e) => setemail(e.target.value)} />
                                                {error && !email && <span className='error'>Please fil this Field *</span>}
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
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">
                                                <input type="submit" onClick={addcontact} value="Add Contact" className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
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

export default AddContact
