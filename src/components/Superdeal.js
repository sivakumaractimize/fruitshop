import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const SuperDeal = () => {
    return (
        <div className="container">
            <h1>Super Offers</h1>
            <div className="row ">
            <div className="col-12 col-md-4 order-md-1 mt-3 mb-2 position-relative  d-flex justify-content-center">
            <img src="./assets/images/superdal/banana.jpg" className="img-fluid " alt="Banana" style={{ filter: "brightness(50%)" }} />

                    <div className="position-absolute top-50 start-50  translate-middle text-center fw-bold text-light">
                    <h1 className=" superdeal-text ">Banana</h1>
                        <h1 className="superdeal-text">&#8377; 220.00</h1>
                        <button type="button" className="btn btn-outline-success text-white fw-bold mt-2">→Shop Now</button>
                    </div>
                </div>
                <div className="col-12 col-md-4 order-md-2 mt-3">
                    <div className="row">
                        <div className="col-md-12 position-relative  d-flex justify-content-center">
                            <img src="./assets/images/superdal/ofer2.jpg" className="img-fluid brands " alt="Offer 2" style={{ filter: "brightness(50%)" }}/>
                            <div className="position-absolute top-50 start-50 translate-middle text-center fw-bold text-light">
                              <span>Up to <h1 className=" superdeal-text">70% Off</h1></span>
                              
                       
                        <button type="button" className="btn btn-outline-success text-white fw-bold ">→Shop Now</button>
                    </div>
                        </div>
                        <div className="col-md-12 mt-4  position-relative  d-flex justify-content-center">
                            <img src="./assets/images/superdal/ofer3.jpg" className="img-fluid brands" alt="Offer 3" style={{ filter: "brightness(50%)" }} />
                            <div className="position-absolute top-50 start-50 translate-middle text-center fw-bold text-light">
                            <span>Sale <h1 className=" superdeal-text">50% Off</h1></span>
                       
                        <button type="button" className="btn btn-outline-success text-white fw-bold  superdeal-text">→Shop Now </button>
                    </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 order-md-3 mt-3 position-relative  d-flex justify-content-center">
                    <img src="./assets/images/superdal/ofer4.jpg" className="img-fluid " alt="Offer 4" style={{ filter: "brightness(50%)" }}/>
                    <div className="position-absolute top-50 start-50 translate-middle text-center fw-bold text-light">
                    <h1 className=" superdeal-text ">Strawberry</h1>
                        <h1 className="superdeal-text">&#8377; 220.00</h1>
                        <button type="button" className="btn btn-outline-success text-white fw-bold mt-2 superdeal-text">→Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuperDeal;
