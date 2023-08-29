import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {

    const history = useNavigate();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await res.json();
        console.log("value=",data);                
        if (res.status === 400 || !data) {
            window.alert("invalid creatn");
        } else {
            localStorage.setItem('user',JSON.stringify(data))
            window.alert('login sucess');
            history('/dashboard');
        }
    }
    return (
        <>
            <section>
                <form method='POST'>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="text" name='username' className="form-control" id="username" value={username} onChange={(e) => setusername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" id="password" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <input type="submit" name="login" value='login' className="btn btn-primary" onClick={loginUser} />
                    
                </form>
            </section>
        </>
    )
}

export default Adminlogin