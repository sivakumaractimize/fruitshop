
import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import SuperDeal from "../components/Superdeal";
import Service from "../components/Service";
import BestSeller from "../components/Bestseller";
import Footer from "../components/Footer";


const Homepage =() =>{


    return(

        <>
       
        <Nav/>
        <Header/>
        <SuperDeal/>
        <Service/>
        <BestSeller/>
        <Footer/>

        </>
    )
}

export default Homepage;