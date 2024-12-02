import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../../Pages/Registration/registration.scss";
import { useFormik } from 'formik';
import { register } from "../../redux/authSlice"
import { useDispatch, useSelector } from "react-redux";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';



const Registration = () => {

    const dispatch = useDispatch();
    const [message, setMessage] = useState({ errors: false, msg: "" });

    // get the registered users from the Redux store
    const registeredUsers = useSelector((state) => state.auth.registeredUsers);


    // regex for validating email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    //initialize values
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    //registration field validation
    const validate = async (values) => {

        let errors = {};

        //email validation
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format!";
        } else if (registeredUsers.some(user => user.email === values.email)) {
            errors.email = "This email is already registered!";
        }



        //name validation
        if (!values.name) {
            errors.name = "Full Name required";
        } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
            errors.name = "Name can only contain alphabets and spaces";
        } else if (values.name.length < 3) {
            errors.name = "Name must be at least 3 characters long";
        }

        // password validation
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters!";
        }

        // confirm password validation
        if (!values.confirmPassword) {
            errors.confirmPassword = "Confirm Password is required!";
        } else if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords do not match!";
        }

        return errors;

    }

    // form submission handler
    const onSubmit = async (values, { resetForm }) => {

        if (
            !values.name ||
            !values.email ||
            !values.password ||
            !values.confirmPassword
        ) {
            setMessage({ errors: true, msg: "All fields are mandatory!" })
            return;
        }

        // dispatch the register action
        dispatch(register({ name: values.name, email: values.email, password: values.password }));
        // Display success message
        setMessage({ errors: false, msg: "Registration Successful!" });

        resetForm();
    }


    const formik = useFormik({
        initialValues,
        validate,
        onSubmit,
    });




    return (

        <div className="registration">

            {/* Displaying the alert message */}
            {message.msg && (
                <Alert icon={<CheckIcon fontSize="inherit" />} severity={message.errors ? "error" : "success"}>
                    {message.msg}
                </Alert>
            )}


            <div className="regContainer">




                <div className="regTopic">
                    Registration Form

                </div>

                <div className="inputFeild">

                    <input type="name" id="name" name="name" placeholder="Full Name" required
                        onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name && (
                        <div className="error">{formik.errors.name}</div>
                    )}

                    <input type="email" id="email" name="email" placeholder="Email" required
                        onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email && (
                        <div className="error">{formik.errors.email}</div>
                    )}

                    <input type="password" id="password" name="password" placeholder="Password" required
                        onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password && (
                        <div className="error">{formik.errors.password}</div>
                    )}

                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required
                        onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur} />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className="error">{formik.errors.confirmPassword}</div>
                    )}

                </div>

                <div>
                    <button onClick={formik.handleSubmit}>Register</button>
                </div>

                <div className="signInLink">
                    Have already an Account?
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <b> &nbsp; Login here</b>
                    </Link>
                </div>





            </div>


        </div>
    )
}
export default Registration;