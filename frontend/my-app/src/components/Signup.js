import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        password: "",
        password2: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (form.name === "" || form.password === "" || form.password2 === "") {
                toast.error("Fields cannot be null");
            }
            else if (form.password !== form.password2) {
                toast.error("both passwords must match");
                console.log("password");
            }
            else {
                await axios.post("http://127.0.0.1:3000/signup", { form });
            }

            console.log(form.password);
            console.log(typeof (form.password2) + form.password2);

        } catch (error) {
            console.log(error);
        }

    }
    return (<>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 text-center ">
                    <form method="post" className=" form-control " onSubmit={handleSubmit}>
                        <label className=" form-label m-1 " htmlFor="name">Username</label>
                        <input type="text" id="name" name="name" className=" input-group bg-primary-subtle m-1" placeholder="Enter Username" value={form.name} onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }) }}></input>
                        {/* e.t=targt.name refers to the name html tag */}

                        <label className=" form-label m-1" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className=" input-group bg-primary-subtle m-1 " placeholder="Enter Password" value={form.password} onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }) }}></input>

                        <label className=" form-label m-1" htmlFor="password2">Re-Enter Password</label>
                        <input type="password" id="password2" name="password2" className=" input-group bg-primary-subtle m-1 " placeholder="Enter Password" value={form.password2} onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }) }}></input>

                        <button type="submit" className="btn-dark m-1 btn-group-lg ">Create</button>
                        <h5>Aldready have an account?</h5>
                        <Link to="/login">Login</Link>
                    </form>
                </div>
            </div>
        </div>
    </>);
};

export default Signup;
