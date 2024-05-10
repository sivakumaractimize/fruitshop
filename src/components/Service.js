import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Service = () => {
  const Services = [

    { id: 1, name: "Free Shipping ", p: "with orders above 500 ", img: "./assets/images/icons/truck.png" },
    { id: 2, name: "Free Refund ", p: "100% Refund with in 3 days ", img: "./assets/images/icons/refund.png" },
    { id: 3, name: "Support 24/7 ", p: "call us anytime", img: "./assets/images/icons/call.png" }
  ]
  return (

    <>
      <div className="container text-center">
        <div className="row">
          {Services.map((item) => (
            <div className="col-12 col-md-4 order-md-1 mt-3 mb-2" key={item.id}>
              <img key={item.id} src={item.img} className="img-fluid border border-warning border-3 rounded-circle p-4" alt={item.name}></img>
              <h3 className="fw-bolder">{item.name}</h3>
              <p>{item.p}</p>
            </div>
          ))}

        </div>
      </div>

    </>
  )


}
export default Service;

