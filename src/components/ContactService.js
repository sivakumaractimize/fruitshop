import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactService = () => {
  const data=[
    {id:1, name:"Hot Line :8922232232", img:"./assets/images/icons/mobile.png"},
    {id:1, name:"Call: 040 5050 3396", img:"./assets/images/icons/landline.png"},
    {id:1, name:"fruitshop@gmail.com", img:"./assets/images/icons/envlop.png"},
  ]
    return (

        <>
        <div className="container text-center mt-5">
      <div className="row">
        {data.map((item)=>(
        <div key={item.id} className=" col-12 col-sm-4 col-md-4 order-md-2 mt-3 mb-2">
                  <img src={item.img} className="img-fluid border border-warning border-3 rounded-circle p-4" ></img>
                  <h3 className=" text-success ">{item.name}</h3>
                 
        </div>
        ))}
       
      </div>
    </div>
        
        </>
    )


}
export default ContactService;

