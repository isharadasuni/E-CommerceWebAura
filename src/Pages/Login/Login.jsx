import { React, useState } from "react";
import "../../Pages/Login/login.scss";
import { Link,  useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";

const Login = () => {

    const [message, setMessage] = useState({ errors: false, msg: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registeredUsers = useSelector((state) => state.auth.registeredUsers);


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


    // form submission handler
    const onSubmit = (values, { resetForm }) => {
        const user = registeredUsers.find(
            (u) => u.email === values.email && u.password === values.password
        );

        if (user) {
            dispatch(login({ email: user.email, password: user.password }));
            setMessage({ errors: false, msg: "Login successful!" });

               // redirect to Dashboard after successful login
               navigate("/dashboard");
        } else {
            setMessage({ errors: true, msg: "Invalid email or password!" });
        }

        resetForm();
    };



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

                {message.msg && (
                    <div
                        className={`error ${message.errors ? "error-message" : "success-message"}`}
                        aria-live="polite"
                    >
                        {message.msg}
                    </div>
                )}



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