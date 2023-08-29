import { event } from 'jquery';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const auth = localStorage.getItem('user');
  const history = useNavigate();
  const logout = () => {
    localStorage.clear();
    history('/adminlogin');
  }
  return (
    <>
      <div className="sidebar shadow">
        <div className="admin_brand d-flex justify-content-between align-items-baseline">
          <div>
            <a className="nav-link fw-bold" href="#">
              <span className="icon"><i className="fas fa-code"></i></span>
              <span className="menu">Admin Panel</span>
            </a>
          </div>
          <div className="d-block d-md-none">
            <a href="javascript:void(0)" id="close_sidebar"><i className="fas fa-times-circle fa-lg"></i></a>
          </div>
        </div>

        <ul className="nav nav-pills flex-column">

          <li className="nav-item active">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Dashboard"><i className="fas fa-dashboard"></i></span>
              <span className="menu">Dashboard</span>
            </a>
          </li>
          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse1" role="button" aria-expanded="false" aria-controls="masterCollapse1">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Laws</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse1">
            <li className="nav-item">
              <Link className="nav-link" to="/addlaw">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Law</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showlaw">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/update Laws</span>
              </Link>
            </li>
          </div>
          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse2" role="button" aria-expanded="false" aria-controls="masterCollapse2">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Judgement</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse2">
            <li className="nav-item">
              <Link className="nav-link" to="/addjudgement">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Judgement</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showjudgement">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/Update Judgement</span>
              </Link>
            </li>
          </div>

          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse3" role="button" aria-expanded="false" aria-controls="masterCollapse3">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Slider</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse3">
            <li className="nav-item">
              <Link className="nav-link" to="/addslider">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Slider</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showslider">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/Update Slider</span>
              </Link>
            </li>
          </div>

          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse4" role="button" aria-expanded="false" aria-controls="masterCollapse4">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Template</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse4">
            <li className="nav-item">
              <Link className="nav-link" to="/addtemplate">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Template</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showtemplate">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/Update Template</span>
              </Link>
            </li>
          </div>

          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse5" role="button" aria-expanded="false" aria-controls="masterCollapse5">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">About</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse5">
            <li className="nav-item">
              <Link className="nav-link" to="/addabout">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add About</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showabout">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/Update About</span>
              </Link>
            </li>
          </div>

          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse6" role="button" aria-expanded="false" aria-controls="masterCollapse6">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Blog</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse6">
            <li className="nav-item">
              <Link className="nav-link" to="/addblog">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Blog</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showblog">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/Update Blog</span>
              </Link>
            </li>
          </div>

          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse7" role="button" aria-expanded="false" aria-controls="masterCollapse7">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Enquiry</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse7">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/addcontact">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Contact</span>
              </Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/showcontact">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Show Enquiry</span>
              </Link>
            </li>
          </div>

          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse8" role="button" aria-expanded="false" aria-controls="masterCollapse8">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Meeting</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse8">
            <li className="nav-item">
              <Link className="nav-link" to="/addmeeting">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Meeting</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showmeeting">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/Update Meeting</span>
              </Link>
            </li>
          </div>

          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse9" role="button" aria-expanded="false" aria-controls="masterCollapse9">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Gallery</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse9">
            <li className="nav-item">
              <Link className="nav-link" to="/addgallery">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Gallery</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showgallery">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/Update Gallery</span>
              </Link>
            </li>
          </div>

          <li className="nav-item position-relative" data-bs-toggle="collapse" href="#masterCollapse10" role="button" aria-expanded="false" aria-controls="masterCollapse10">
            <a className="nav-link" href="#">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Master">
                <i className="fas fa-cubes"></i>
              </span>
              <span className="menu">Heros</span>
            </a>
          </li>
          <div className="collapse" id="masterCollapse10">
            <li className="nav-item">
              <Link className="nav-link" to="/addhero">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child One">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Add Hero</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/showhero">
                <span className="icon" data-bs-toggle="tooltip" data-bs-title="Child Two">
                  <i className="fas fa-cube"></i>
                </span>
                <span className="menu">Edit/Update Hero</span>
              </Link>
            </li>
          </div>

          <li className="nav-item">
            {auth ? <Link onClick={logout} className="nav-link" to="/adminlogin">
              <span className="icon" data-bs-toggle="tooltip" data-bs-title="Logout"><i className="fas fa-sign-out"></i></span>
              <span className="menu">Logout</span>
            </Link> : ''}
          </li>

        </ul>
      </div>


    </>
  )
}

export default Sidebar