import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const OurBrand = () => {

    const brands=[
        {id:1, img:"./assets/images/contact/b1.png"},
        {id:2, img:"./assets/images/contact/b2.png"},
        {id:1, img:"./assets/images/contact/b3.png"},
        {id:1, img:"./assets/images/contact/b4.png"}
    ]

    return (
        <>
        <div className="container-fluid">
            <h2 className="text-center mt-5">Our Brands</h2>

            <div class="row text-center mt-5">
                {brands.map((item)=>(
                <div class="col-12 col-sm-3">
                    <img key={item.id} src={item.img} className="img-fluid brands"></img>
                </div>
                ))}
               
               
            </div>

            </div>



        </>
    )
}
export default OurBrand;