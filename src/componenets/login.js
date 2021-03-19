import { Class } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
const Login=()=>{

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleEmailChange=e=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=e=>{
        setPassword(e.target.value)
    }
    useEffect(() => {
        document.title="Log in||Cooking corner"
    }, [])
return(
    <form>
    <div
    style={{padding: "40px", margin:"0 auto "}}
       > 
                <h3>Log In</h3>

                <div  >
                    <label>Email address</label>
                    <input type="email" onChange={handleEmailChange}  placeholder="Enter email" />
                </div>

                <div  >
                    <label>Password</label>
                    <input type="password"  onChange={handlePasswordChange} placeholder="Enter password" />
                </div>

                <div  >
                    <div  >
                        <input type="checkbox"  />
                        <label   htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" >Submit</button>
                <p  >
                    Forgot <a href="#">password?</a>
                </p>
                <p  >
                    Don't have <Link to="/signup">Account?</Link>
                </p>
                </div>

            </form>
)
};

export default Login;