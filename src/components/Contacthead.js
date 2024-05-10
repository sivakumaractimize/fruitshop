import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactHead  = () => {
    return(
        <>
           
           <div className="container-fluid" style={{ backgroundImage: `url(./assets/images/contact/contactbg.jpeg)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundSize:"cover" }}>
             
            <h4 className="text-center bg-sale fw-bolder text-warning ">Contact</h4>
          
        </div>


        </>
    )
}

export default ContactHead;