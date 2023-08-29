
import React, { useState, useRef, useMemo, useEffect } from 'react';
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ShowMeeting = () => {
    const wrapRef = React.useRef(null);
    const showsidebar = event => {
        wrapRef.current.classList.add("show");
    }
    const overlay = event => {
        wrapRef.current.classList.remove("show");
    }

    const [meeting, setmeeting] = useState([]);
    useEffect(() => {
        getmeeting();
    }, [])

    const getmeeting = () => {
        fetch('http://localhost:5000/showmeeting', {
            method: 'GET',
        }).then((getmeeting) => getmeeting.json()).then((data) => {
            setmeeting(data.data);
        })
    }

    const deletemeeting = async (_id) => {
        const res = await fetch(`http://localhost:5000/deletemeeting/${_id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        console.log("value=", data);
        toast.error('Deleted Sucessfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        getmeeting();
    }

    const columns = [
        {
            name: "Meeting name",
            selector: (row) => row.name,
        },
        {
            name: "Meeting Venue",
            selector: (row) => row.venue,
        },
        {
            name: "Meeting Time",
            selector: (row) => row.time,
        },
        {
            name: "Meeting Day",
            selector: (row) => row.day,
        },
        {
            name: "Meeting Contact",
            selector: (row) => row.contact,
        },
        {
            name: "Image",
            selector: (row) => <>
                <iframe src={`http://localhost:5000/${row.image.slice(14)}`} width="100%" height="150px" />                                               
            </>
        },
        {
            name: 'Action',
            cell: row => <><Link className='btn btn-primary' to={"/updatemeeting/" + row._id}>Edit
            </Link> &nbsp; &nbsp; &nbsp;
                <Link className='btn btn-danger' onClick={() => deletemeeting(row._id)}>Delete</Link></>
        }
    ];
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
                                            <div className="fs-4 text-secondary fw-bolder">View Meeting</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>
                                        <hr />
                                        <div className="mb-3 row">
                                            <div className="col-sm-12">
                                                <DataTable columns={columns}
                                                    data={meeting}
                                                    pagination
                                                    responsive
                                                    fixedHeader
                                                    fixedHeaderScrollHeight="500px"
                                                    highlightOnHover
                                                ></DataTable>
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

export default ShowMeeting