import React from "react";
import Nav from "../components/Nav";
import ContactHead from "../components/Contacthead";
import Map from "../components/Map";
import ContactService from "../components/ContactService";
import OurBrand from "../components/OurBrands";
import Form from "../components/ContactForm";
import footer from "../components/Footer"
import Footer from "../components/Footer";

const Contact  = () => {
    return(
        <>
         <Nav/>
         <ContactHead/>
         <Map/>
         <ContactService/>
         <OurBrand/>
         <Form/>
         <Footer/>
         
        

        </>
    )
}

export default Contact;