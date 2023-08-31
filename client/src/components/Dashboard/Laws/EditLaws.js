import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import JoditEditor from 'jodit-react';
const EditLaws = () => {
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
    // const [content, setContent] = useState('');
    const [law_title, setlaw_title] = useState('');
    const [law_Subtitle, setlaw_Subtitle] = useState('');
    const [law_details, setlaw_details] = useState('');
    const [category] = useState('law');
    const [error, seterrror] = React.useState(false);

    const updatelaw = async (e) => {
        e.preventDefault();
        if (!law_title || !law_Subtitle || !law_details) {
            seterrror(true);
            return false
        }
        const res = await fetch(`https://bhaibhopal.onrender.com/lawdataone/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                law_details,
                law_title,
                law_Subtitle,
                category
            })
        });
        const data = await res.json();
        console.log("value=", data);
        if (res.status === 400 || !data) {
            window.alert("Law Not Updated");
        } else {
            history('/showlaw');
        }
    }

    useEffect(() => {
        getonelaw();
    }, [])

    const getonelaw = async () => {
        const res = await fetch(`https://bhaibhopal.onrender.com/lawdataone/${id}`);
        const data = await res.json();
        setlaw_title(data.data.law_title);
        setlaw_Subtitle(data.data.law_Subtitle);
        setlaw_details(data.data.law_details);
    }

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
                                    <form method='POST'>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="fs-4 text-secondary fw-bolder">Update Law</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>

                                        <hr />
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Title</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={law_title} onChange={(e) => setlaw_title(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Subtitle</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={law_Subtitle} onChange={(e) => setlaw_Subtitle(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Details</label>
                                            <div className="col-sm-9">
                                                <JoditEditor
                                                    ref={editor}
                                                    value={law_details}
                                                    tabIndex={1} // tabIndex of textarea
                                                    onBlur={newContent => setlaw_details(newContent)} // preferred to use only this option to update the content for performance reasons
                                                    onChange={newContent => { }}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">
                                                <input type="submit" value='Update Law' onClick={updatelaw} className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
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

export default EditLaws
