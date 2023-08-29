import '../../Admin.css'
import '../../Admin.js'
import React from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'
const Dashboard = () => {
  const wrapRef = React.useRef(null);

  const showsidebar = event => {
    wrapRef.current.classList.add("show");
  }
  const overlay = event => {
    wrapRef.current.classList.remove("show");
  }
  return (
    <>
      <div className="wrapper" ref={wrapRef} >
        <div onClick={overlay} id="overlay" ></div>
        <Sidebar />
        <div className="content">
          <TopNavbar showsidebar={showsidebar} />

          <main className="bg-light bg-opacity-25 min-vh-100">
            <div className="container-fluid p-3 p-md-4">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="fs-4 text-secondary fw-bolder">Dashboard</div>
                <div className="text-secondary lead fw-normal" id="curr_date_time"></div>
              </div>
              <hr />
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

export default Dashboard