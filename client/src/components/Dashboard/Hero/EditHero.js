import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import JoditEditor from 'jodit-react';
const EditHero = () => {
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
    const [ordering, setordering] = useState('');
    const [subtitle, setsubtitle] = useState('');
    const [details, setdetails] = useState('');
    const [category] = useState('hero');
    const [image, setimage] = useState('');
    
    useEffect(() => {
        getonehero();
    }, [])

    const getonehero = async () => {
        const res = await fetch(`http://localhost:5000/showonehero/${id}`);
        const data = await res.json();
        console.log('dta', data);
        settitle(data.data.title);
        setordering(data.data.ordering);
        setsubtitle(data.data.subtitle);
        setdetails(data.data.details);        
        setimage(data.data.image);
    }

    const updatehero = async (e) => {
        e.preventDefault();     
        const formData = new FormData();
        formData.append('title', title);
        formData.append('ordering', ordering);
        formData.append('subtitle', subtitle);
        formData.append('details', details);
        formData.append('category', category);
        formData.append('image', image);

        const res = await fetch(`http://localhost:5000/updatehero/${id}`, {           
            method: "PUT",
            body: formData
        });
        const data = await res.json();
        console.log("value=", data);
        if (res.status === 400 || !data) {
            window.alert("bout Not Updated");
        } else {
            history('/showhero');
            console.log("edit", formData);
        }
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
                                    <form method='POST' encType='multipart/form-data'>
                                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                                            <div className="fs-4 text-secondary fw-bolder">Update Hero</div>
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
                                            <label className="col-sm-3 col-form-label">Ordering</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={ordering} onChange={(e) => setordering(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Subtitle</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" value={subtitle} onChange={(e) => setsubtitle(e.target.value)} />
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
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label">Upload Files</label>
                                            <div className="col-sm-9">
                                                <input type="file" defaultValue={image} className="form-control" onChange={(e) => setimage(e.target.files[0])} />
                                            </div>
                                        </div>
                                        <div className="mb-3 row">
                                            <label className="col-sm-3 col-form-label"></label>
                                            <div className="col-sm-9">
                                                <input type="submit" value='Update About' onClick={updatehero} className="btn pt-2 pb-2 px-5 bg-secondary bg-gradient text-dark bg-opacity-50" />
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

export default EditHero