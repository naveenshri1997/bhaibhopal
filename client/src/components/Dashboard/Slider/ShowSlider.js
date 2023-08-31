
import React, { useState, useRef, useMemo, useEffect } from 'react';
import Sidebar from '../Sidebar'
import TopNavbar from '../TopNavbar'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ShowSlider = () => {
    const wrapRef = React.useRef(null);
    const showsidebar = event => {
        wrapRef.current.classList.add("show");
    }
    const overlay = event => {
        wrapRef.current.classList.remove("show");
    }

    const [slider, setslider] = useState([]);
    useEffect(() => {
        getslider();
    }, [])

    const getslider = () => {
        fetch('https://bhaibhopal.onrender.com/showslider', {
            method: 'GET',
        }).then((getslider) => getslider.json()).then((data) => {
            setslider(data.data);
        })
    }

    const deleteslider = async (_id) => {
        const res = await fetch(`https://bhaibhopal.onrender.com/deleteslider/${_id}`, {
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
        getslider();
    }

    const columns = [
        {
            name: "Slider title",
            selector: (row) => row.title,
        },
        {
            name: "Slider Ordering",
            selector: (row) => row.ordering,
        },         
        {
            name: "Document",
            selector: (row) => <>
                <iframe src={`https://bhaibhopal.onrender.com/${row.image.slice(14)}`} width="100%" height="150px" />
            </>,
        },
        {
            name: 'Action',
            cell: row => <><Link className='btn btn-primary' to={"/updateslider/" + row._id}>Edit
            </Link> &nbsp; &nbsp; &nbsp;
                <Link className='btn btn-danger' onClick={() => deleteslider(row._id)}>Delete</Link></>
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
                                            <div className="fs-4 text-secondary fw-bolder">View Slider</div>
                                            <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
                                        </div>
                                        <hr />
                                        <div className="mb-3 row">
                                            <div className="col-sm-12">
                                                <DataTable columns={columns}
                                                    data={slider}
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

export default ShowSlider
