import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {


  const payment=[
    {
       id:1, img:"./assets/images/icons/mastercard.png"},
     {id:2, img:"./assets/images/icons/rupay.png"},
     {id:3, img:"./assets/images/icons/visa.png"},
     {id:4, img:"./assets/images/icons/bhim.png"}
    
    ]
    const Socialicon=[
      {
         id:1, img:"./assets/images/icons/x.png"},
       {id:2, img:"./assets/images/icons/fb.png"},
       {id:3, img:"./assets/images/icons/pnt.png"},
       {id:4, img:"./assets/images/icons/insta.svg"}
      
      ]
      const list=[
        {id:"1", name :"New Product"},
        {id:"2", name :"Blog"},
        {id:"3", name :"About Us"},
        {id:"4", name :"Top Sellers"},
      
      ]
    return (
        <>
           

    <div className="container-fluid text-center "
    style={{
    background: 'rgb(73,128,51)',
    background: 'radial-gradient(circle, rgba(73,128,51,1) 0%, rgba(222,231,195,1) 0%)'
   }}
        
        >
           <div className="row">
             <div className="col-12 col-sm-4 mt-5">
               <img src="./assets/images/navlogo.png"></img>
             </div>
             <div className="col-12 col-sm-4 mt-2">
              <h5 className="text-success fw-bolder">Information</h5>
              <ul className="list-unstyled d-flex flex-column ">
                {list.map((item)=>(
                <li key={item.id} >{item.name}</li>
              ))}
             
              </ul>
             </div>
             <div className="col col-sm-4 mt-2">
               <h5 className="text-success fw-bolder">Contact</h5>
                <span><i class="fa-solid fa-location-dot"></i> :Gul Ahmed Textile Mills Limited Plot No.82,  Landhi</span><br></br>
                <span><i class="fa-solid fa-phone-volume"></i>  : +72-43-000 485 485 Ext-6595.</span><br></br>
                <span><i class="fa-solid fa-envelope"></i>: FruitOrganic@gmail.com</span>
             </div>
           </div>
           <hr></hr>
           <div className="row ">
            <div className="col-12 col-sm-6">
            <h5 className="text-success fw-bolder">Online Payments By</h5>
            {payment.map((item) => (
              <img key={item.id} src={item.img} className="footericon"></img>


            ))}
           
           

            </div>
            <div className="col-12 col-sm-6">
            <h5 className="text-success fw-bolder ">Connect With Us</h5>

            {Socialicon.map((item) => (
              <img key={item.id} src={item.img} className="footericon"></img>


            ))}
           

            

            </div>
            <p>Copyright © 2024 Fruit Organic - All Rights Reserved.</p>

           </div>
          
       </div>
        </>
    );
}

export default Footer;
