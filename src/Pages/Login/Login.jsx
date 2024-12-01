import { React, useState } from "react";
import "../../Pages/Login/login.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

const Login = () => {

    const [message, setMessage] = useState({ errors: false, msg: "" });


    // Regex for validating email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


    //Initialize values
    const initialValues = {
        email: "",
        password: "",
    }


    //Login field validation
    const validate = async (values) => {
        let errors = {};

        //email validation
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format!";
        }

        // password validation
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters!";
        }

        return errors;

    };



    const onSubmit = async (values, { resetForm }) => {

        if (
            !values.email ||
            !values.password
        ) {
            setMessage({ errors: true, msg: "All fields are mandatory!" });
            return;
        }
        else {
            setMessage({ errors: false, msg: "Successfully logged in!" });
            resetForm();
        };
        resetForm();
    }



    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });




    return (

        <div className="login">

            <div className="login-container">

                <div className="topic">
                    Login
                </div>



                <div className="inputLogin">

                    <input type="email" id="email" name="email" placeholder="Username" required
                        onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}

                    <input type="password" id="password" name="password" placeholder="Password" required
                        onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password && (
                        <div className="error">{formik.errors.password}</div>
                    )}
                </div>

                <div className="forgetPassword">
                    Forgot Password?
                </div>

                <div >
                    <button onClick={formik.handleSubmit}>Login</button>
                </div>

                <div className="signUpLink">
                    Don't have an Account?
                    <Link to="/registration" style={{ textDecoration: "none", color: "black" }}>
                        <b> &nbsp; Register</b>
                    </Link>
                </div>


            </div>

        </div>
    )
}
export default Login;