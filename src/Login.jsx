import React, { useState } from 'react';
export default function Login() {
    const [user, setUser] = useState("")
    const [password, setPass] = useState("")
    const [usererr, setUserErr] = useState(false)
    const [passerr, setPassErr] = useState(false)

    function loginHandler(e) {
        if (user.length < 3 || password.length < 3) {
            alert("you entered Wrong Data")
        }
        else {
            alert('user Login Successful')
        }
        e.preventDefault()
    }
    function userHandler(e) {
        // console.log(e.target.value)
        var userId = e.target.value
        if (userId.length < 3) {
            setUserErr(true)
        } else {
            setUserErr(false)

        }
        setUser(userId)
    }
    function passHandler(e) {
        var userpass = e.target.value
        if (userpass.length < 3) {
            setPassErr(true)
        } else {
            setPassErr(false)

        }
        setPass(userpass)
    }
    return (
        <React.Fragment>
            <div style={{ margin: "50px auto", width: "300px" }}>
                <h1>Login</h1>
                <form onSubmit={loginHandler}>
                    <input type="text" placeholder='Enter Your name' onChange={userHandler} /> <br /> {usererr ? <span>user Not valid !</span> : ""} <br />
                    <input type="password" placeholder='password' onChange={passHandler} /> <br /> {passerr ? <span>Password Not valid !</span> : ""} <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        </React.Fragment >
    )
}