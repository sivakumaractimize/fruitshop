import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutHead  = () => {
    return(
        <>
           
        <div className="container-fluid" style={{ backgroundImage: `url(./assets/images/about/about.jpg)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              
            <h4 className="text-center bg-sale fw-bolder text-warning ">ABOUT US</h4>
          
        </div>


        </>
    )
}

export default AboutHead;