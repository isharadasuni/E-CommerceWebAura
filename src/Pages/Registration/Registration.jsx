import React from 'react';
import "../../Pages/Registration/registration.scss";

const Registration = () => {


    return (

        <div className="registration">

            <div className="regContainer">

                <div className="regTopic">
                    Registration Form

                </div>

                <div className="inputFeild">

                    <input type="name" id="name" name="name" placeholder="Full Name" required />
                    <input type="email" id="email" name="email" placeholder="Email" required />
                    <input type="password" id="password" name="password" placeholder="Password" required />
                    <input type="confirmPassword" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required />
                </div>

                <div>
                    <button>Register</button>
                </div>






            </div>


        </div>
    )
}
export default Registration;