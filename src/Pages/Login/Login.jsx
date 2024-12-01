import React from 'react';
import "../../Pages/Login/login.scss";

const Login = () => {


    return (

        <div className="login">

            <div className="login-container">

                <div className="topic">
                    Login
                </div>

                <div className="inputLogin">
                   
                        <input type="email" placeholder="Username" required />
                 
                        <input type="password" placeholder="Password" required />
                  
                </div>

                <div className="forgetPassword">
                    Forgot Password?
                </div>

                <div >
                    <button>Login</button>
                </div>

                <div className="signUpLink">
                    Don't have an Account? <b> &nbsp; Register</b>
                </div>


            </div>

        </div>
    )
}
export default Login;