import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Whychoose = () => {

    const choose=[

        
    { id: 1, name: "100% Fresh Organic Foods", p: "This is our motto and we are experts in delivering the best 100% organic foods on the market. We work with more than 60 farms all over the country..", icon: "fa-regular fa-snowflake whychoseicon" },
    { id: 2, name: "Fast Free Delivery ", p: "This is our motto and we are experts in delivering the best 100% organic foods on the market. We work with more than 60 farms all over the country. ", icon: "fa-solid fa-truck-front whychoseicon" },
    { id: 3, name: "Rich Experience ", p: "We are working with organic products for 14 years and to be honest this is the best job ever – to see the people’s smiles when they taste our fresh food!", icon: "fa-solid fa-trophy whychoseicon" }
  
    ]
    return (
        <>

            <div className="container">
                <h1 className="fw-bold text-center">WHY CHOOSE US</h1>
                <p className="text-center text-warning">The Reasons That You Should Contact Us</p>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <img src="./assets/images/about/choose.jpg" className="img-fluid"></img>

                    </div>
                    <div className="col-12 col-sm-6">
                        <div className="row">
                            {choose.map((item)=>(
                            <div className="col-12 mt-5">

                                <div class="col-12 d-flex justify-content-around">
                                    <i class={item.icon}></i>
                                    <div>
                                        <h3 className="ms-4">   {item.name}</h3>
                                        <p className="ms-4">{item.p}</p>

                                    </div>
                                </div>

                            </div>
                            ))}
                           
                        
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Whychoose;