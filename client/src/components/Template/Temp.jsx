import React from 'react'
import { Link } from 'react-router-dom'
const Temp = ({ temps }) => {

    return (
        <>

            <Link to={`/template/${temps._id}`}>
                <div className="card">
                    <div className="card-body">
                        <h4>{temps.title}</h4>
                        <h5>{temps.subtitle}</h5>
                        <p>{temps.details}</p>
                    </div>

                </div>
            </Link>
        </>
    )
}

export default Temp