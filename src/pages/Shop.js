import React from "react";
import Nav from "../components/Nav";
import Shopheader from "../components/Shopheader";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer"

const Shop  = () => {
    return(
        <>
         <Nav/>
         <Shopheader/>
         <Products/>
         <Gallery/>
         <Footer/>

        </>
    )
}

export default Shop;