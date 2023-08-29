import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [nav, setNav] = useState([]);
  const [sublaw, setSubLaw] = useState([]);
  const [blog, setblog] = useState([]);
  const [template, settemplate] = useState([]);
  const [judgement, setjudgement] = useState([]);
  useEffect(() => {
 

    const res1 = fetch('https://bhaibhopal.onrender.com/lawdatanavbar', {
      method: "GET",
    }).then((res1) => res1.json()).then(data => {
      setSubLaw(data.data);
    })

    const res2 = fetch('https://bhaibhopal.onrender.com/showbloglimit', {
      method: 'GET',
    }).then((res2) => res2.json()).then(data => {
      setblog(data.data);

    })

    const res3 = fetch('https://bhaibhopal.onrender.com/showtemplate', {
      method: 'GET',
    }).then((res3) => res3.json()).then(data => {
      settemplate(data.data);

    })

    const res4 = fetch('https://bhaibhopal.onrender.com/showjudgementlimit', {
      method: 'GET',
    }).then((res4) => res4.json()).then(data => {
      setjudgement(data.data);

    }) 

  }, [])

 

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                  </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Law
                </a>
                <ul className="dropdown-menu">
                  {sublaw.map((i, index) => {
                    return (
                      <li><NavLink className="dropdown-item" to={`/law/${i._id}`}>{i.law_title}</NavLink></li>
                    )
                  })}
                      <li><NavLink className="dropdown-item" to='/law'>Show All</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Judgement
                </a>
                <ul className="dropdown-menu">
                  {judgement.map((i, index) => {
                    return (
                      <li><NavLink className="dropdown-item" to={`/judgement/${i._id}`}>{i.title}</NavLink></li>
                    )
                  })}
                      <li><NavLink className="dropdown-item" to='/judgement'>Show All</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu">
                  {blog.map((i, index) => {
                    return (
                      <li><NavLink className="dropdown-item" to={`/blog/${i._id}`}>{i.title}</NavLink></li>
                    )
                  })}
                      <li><NavLink className="dropdown-item" to='/blog'>Show All</NavLink></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Template
                </a>
                <ul className="dropdown-menu">
                  {template.map((i, index) => {
                    return (
                      <li><NavLink className="dropdown-item" to={`/template/${i._id}`}>{i.title}</NavLink></li>
                    )
                  })}
                </ul>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to='/gallery'>Gallery</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
