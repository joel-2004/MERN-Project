import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(form);
            if (form.name === "" && form.password === "") {
                toast.error("Enter name and password");
            }
            else {
                await axios.post("http://localhost:5000/login", { form }).then(
                    res => {
                        if (res.data == "nouser") {
                            toast.error("Wrong Username");
                        }
                        if (res.data == "Login") {
                            toast.success("Login successfull");
                        }
                        if (res.data === "Incorrectpassword") {
                            toast.error("Incorrect Password");
                        }
                    }
                );
            }

        } catch (e) {
            console.log(e);
        }
    }

    const [form, setForm] = useState({
        name: "",
        password: ""
    })
    return (<>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 text-center ">
                    <form className="form-control " method="post" onSubmit={handleSubmit}>
                        <label className=" form-label m-1 " htmlFor="name">Username</label>
                        <input type="text" id="name" name="name" className=" input-group bg-primary-subtle m-1" placeholder="Enter Username" value={form.name} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}></input>
                        <label className=" form-label m-1" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className=" input-group bg-primary-subtle m-1 " placeholder="Enter Password" value={form.password} onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}></input>
                        <button type="submit" className="btn-dark m-1 btn-group-lg ">Login</button>
                        <h5>Dont have an account?</h5>
                        <Link to="/signup">Signup</Link>
                    </form>
                </div>
            </div>
        </div>
    </>);
};

export default Login;
