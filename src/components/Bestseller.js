import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../styles/Bestseller.css";

const BestSeller = () => {
    const progressCircle = useRef(null);

    const data=[
        {id:"1", name:"Aurore Grape" , orgcost:"400", cost:"325", img:"./assets/images/bestseller/bs1.jpg"},
        {id:"2", name:"Orange" , orgcost:"200", cost:"120", img:"./assets/images/bestseller/bs2.jpg"},
        {id:"3", name:"Kiwi" , orgcost:"600", cost:"499", img:"./assets/images/bestseller/bs3.jpg"},
        {id:"4", name:"Avacado" , orgcost:"900", cost:"766", img:"./assets/images/bestseller/bs4.jpg"},
        {id:"5", name:"Banana" , orgcost:"100", cost:"55", img:"./assets/images/bestseller/bs5.jpg"},
        {id:"6", name:"Green Apple" , orgcost:"350", cost:"259", img:"./assets/images/bestseller/bs6.jpg"},
        {id:"7", name:"Indian Grapes" , orgcost:"100", cost:"69", img:"./assets/images/bestseller/bs7.jpg"},
        {id:"8", name:"Chinese date" , orgcost:"99", cost:"49", img:"./assets/images/bestseller/bs8.jpg"},
        {id:"9", name:"Strawberry" , orgcost:"120", cost:"99", img:"./assets/images/bestseller/bs9.jpg"},
    ];

    return (
        <div className="container-fluid mb-2">
            <p className="fs-2 fst-italic text-center fw-bolder">Best Seller Products</p>
            <Swiper
                spaceBetween={30}
                slidesPerView={5}
                pagination={{ clickable: true }}
                breakpoints={{
                    476: { slidesPerView: 1, spaceBetween: 10 },
                    425: { slidesPerView: 1, spaceBetween: 10 },
                    375: { slidesPerView: 1, spaceBetween: 10 },
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    992: { slidesPerView: 4, spaceBetween: 30 }
                }}
                centeredSlides={false}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="card border border-success" style={{ width: "18rem", height: "400px" }}>
                            <img src={item.img} className="img-fluid card-img-top" style={{ height: "200px" }} alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="card-text">
                                    <del>&#8377;{item.orgcost}</del><span className="fs-3"> &#8377; {item.cost}<span className="fs-5">/per kg</span></span>
                                </p>
                                <div className="mb-2">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <a href="#" className="btn btn-outline-success text-dark fw-bold mb-4">Add to Cart</a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BestSeller;
