import React from 'react'
import '../../Admin.css'
import '../../Admin.js'
const TopNavbar = ({showsidebar}) => {
    // const wrapRef = React.useRef(null);
    // const showsidebar = event => {
    //     wrapRef.current.classList.add("show");
    // }
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
                <div className="container-fluid px-3">

                    <button onClick={showsidebar} className="navbar-toggler border-0" type="button" id="show_sidebar_phone">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <a className="navbar-brand d-none d-md-block" href="javascript:void(0)" id="show_sidebar_pc">
                        <i className="fas fa-bars fa-lg"></i>
                    </a>

                    <div className="fw-bold text-secondary d-md-none d-block">Admin Panel</div>


                    <div className="ms-auto d-flex align-items-center">

                        <div className="nav-item d-none d-md-block me-2" data-bs-toggle="tooltip" data-bs-title="Full Screen" data-bs-placement="left">
                            <a href="#" className="nav-link" id="fullscreen">
                                <i className="fa-solid fa-expand"></i>
                            </a>
                        </div>

                        <div className="dropdown">

                            <a className="nav-link dropdown-toggle py-1 px-3 rounded-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user-circle me-1"></i>Sahil
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end">
                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-address-card me-2"></i>Profile</a></li>
                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-gear me-2"></i>Account</a></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><a className="dropdown-item" href="#"><i className="fa-solid fa-right-from-bracket me-2"></i>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </nav >
        </>
    )
}

export default TopNavbar