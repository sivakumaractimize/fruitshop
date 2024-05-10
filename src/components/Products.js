import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
    const data = [
        { id: "1", name: "Aurore Grape", orgcost: "400", cost: "325", img: "./assets/images/bestseller/bs1.jpg" },
        { id: "2", name: "Orange", orgcost: "200", cost: "120", img: "./assets/images/bestseller/bs2.jpg" },
        { id: "3", name: "Kiwi", orgcost: "600", cost: "499", img: "./assets/images/bestseller/bs3.jpg" },
        { id: "4", name: "Avocado", orgcost: "900", cost: "766", img: "./assets/images/bestseller/bs4.jpg" },
        { id: "5", name: "Banana", orgcost: "100", cost: "55", img: "./assets/images/bestseller/bs5.jpg" },
        { id: "6", name: "Green Apple", orgcost: "350", cost: "259", img: "./assets/images/bestseller/bs6.jpg" },
        { id: "7", name: "Indian Grapes", orgcost: "100", cost: "69", img: "./assets/images/bestseller/bs7.jpg" },
        { id: "8", name: "Chinese date", orgcost: "99", cost: "49", img: "./assets/images/bestseller/bs8.jpg" },
        { id: "9", name: "Strawberry", orgcost: "120", cost: "99", img: "./assets/images/bestseller/bs9.jpg" },
        { id: "10", name: "Apple", orgcost: "150", cost: "109", img: "./assets/images/shop/f11.jpg" }
    ];

    useEffect(() => {
        // Initialize tooltips
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map((tooltipTriggerEl) => {
            return new window.bootstrap.Tooltip(tooltipTriggerEl);
        });
    }, []);

    return (
        <>
            <div className="container mt-5 ">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {data.map((item) => (
                        <div className="col mb-4 d-flex justify-content-center" key={item.id}>
                            <div className="card border border-success text-center " style={{ width: "18rem", height: "400px" }}>
                                <div className="card-img-top ">
                                    <img src={item.img} className="img-fluid " alt="..." style={{ height: "200px" }} />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title text-center">{item.name}</h4>
                                    <p className="card-text text-center">
                                        <del>&#8377;{item.orgcost}</del><span className="fs-3 fw-bold text-success-emphasis"> &#8377; {item.cost}<span className="fs-5">/per kg</span></span>
                                    </p>
                                </div>
                                <div className="mb-2 text-center">

                                    {/* Rating stars */}
                                    {[...Array(4)].map((_, i) => (
                                        <i key={i} className="fa-solid fa-star"></i>
                                    ))}


                                    <i className="fa-regular fa-star"></i>
                                </div>
                                <div className="card-footer text-center">
                                    {/* Applying tooltip to the heart icon */}
                                    <i className="fa-regular fa-heart me-4" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add to Wish list"></i>
                                    <a href="#" className="btn btn-outline-success text-dark fw-bold mb-2">Add to Cart</a>
                                    <i className="fa-solid fa-up-right-and-down-left-from-center ms-4 " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Compare"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
