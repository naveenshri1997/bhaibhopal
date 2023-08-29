import React from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom';
const Topbar = () => {
    return (
        <>
            <div className='topbar_box'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p>Wednesday, Jul 5, 2023</p>
                        </div>
                        <div className='col'>
                            <p style={{ float: 'right' }}>
                            <NavLink className="nav-link" to="adminlogin">Admin Login</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='topbar_box_logo'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img src={logo} width="350px" />
                        </div>
                        <div className='col'>
                            <div className='row'>
                                <div className='col-12'>
                                    <p style={{ float: 'right' }}>24x7 Free Helpline For Men</p>
                                </div>
                                <div className='col-12'>
                                    <h3 style={{ float: 'right' }}>+91-888-2-498-498</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar