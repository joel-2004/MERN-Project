import React from "react";
// import { Link } from "react-router-dom";
const Footer = () => {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="link-underline-light ">-<i class="fa fa-instagram fa-lg" aria-hidden="true"></i></a>
                    {/* Maybe Link could work check later */}
                </div>
                <div className="col-2">
                    <a href="https://www.google.com/gmail/about/" target="_blank" rel="noreferrer">
                        -<i className="link-underline-light" class="fa-solid fa-envelope fa-lg"></i></a>
                </div>
                <div className="col-4">
                    <i class="fa-solid fa-phone">+91  99623 21431</i>

                </div>
                <div className="col-4">
                    <h5>&copy; All rights reserved</h5>
                </div>
            </div>
        </div>
    </>);
};

export default Footer;
