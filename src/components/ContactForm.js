import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [mobileError, setMobileError] = useState("");
    const [messageError, setMessageError] = useState("");

    const validateName = (value) => {
        if (value.trim() === "") {
            setNameError("Name is required");
        } else {
            setNameError("");
        }
    };

    const validateEmail = (value) => {
        // Regular expression for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Invalid email address");
        } else {
            setEmailError("");
        }
    };

    const validateMobile = (value) => {
        // Regular expression for basic mobile number validation
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(value)) {
            setMobileError("Invalid mobile number");
        } else {
            setMobileError("");
        }
    };

    const validateMessage = (value) => {
        if (value.trim() === "") {
            setMessageError("Message is required");
        } else {
            setMessageError("");
        }
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        validateName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
        validateMobile(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        validateMessage(e.target.value);
    };

    const handleSubmit = () => {

        validateName(name);
        if (nameError) return; //

        validateEmail(email);
        if (emailError) return; 
    
        
        validateMobile(mobile);
        if (mobileError) return; 
    
        // Validate message
        validateMessage(message);
        if (messageError) return;


        setName("");
        setEmail("");
        setMobile("");
        setMessage("");
    };

    return (
        <>
            <div className="container form mt-5 mb-5">
                <h1>Contact Form</h1>

                <div className="row">
                    <div className="col-12 col-md-4 order-md-1 mt-3 mb-2">
                        <div className="">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name*</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" value={name} onChange={handleNameChange}></input>
                            {nameError && <p className="text-danger">{nameError}</p>}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 order-md-1 mt-3 mb-2">
                        <div className="">
                            <label htmlFor="exampleFormControlInput2" className="form-label"> Email*</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="Enter your email" value={email} onChange={handleEmailChange}></input>
                            {emailError && <p className="text-danger">{emailError}</p>}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 order-md-2 mt-3 mb-2">
                        <div className="">
                            <label htmlFor="exampleFormControlInput3" className="form-label">Mobile*</label>
                            <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="Enter your number" value={mobile} onChange={handleMobileChange}></input>
                            {mobileError && <p className="text-danger">{mobileError}</p>}
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message*</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={handleMessageChange}></textarea>
                    {messageError && <p className="text-danger">{messageError}</p>}
                </div>
                <button className="btn btn-outline-success text-dark fw-bold mb-2" onClick={handleSubmit}> Send Message</button>
            </div>
        </>
    )
}
export default Form;
