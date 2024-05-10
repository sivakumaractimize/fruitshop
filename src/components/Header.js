import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Import required modules
import { Navigation } from 'swiper/modules';
import "../styles/header.css";

const Header = () => {

  const data = [
    { id: 1, name: "Food & Nutrition", des: "10 HEALTH BENFITS OF SPIRULINA", img: "./assets/images/swiper1.png", bgimg: "./assets/images/swiperbg.jpg" },
    { id: 2, name: "Natural Fruits", des: "Fresh And Healthy", img: "./assets/images/swiper2.png", bgimg: "./assets/images/swiperbg2.jpg" },
    { id: 3, name: "Fruit Juice The One", des: "Have a Look At Our Beautiful Farm", img: "./assets/images/swiper3.png", bgimg: "./assets/images/swiperbg3.jpg" }


  ];

  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {data.map((item) => (
        <SwiperSlide key={item.id} style={{ backgroundImage: `url(${item.bgimg})` }}>
          <div className="d-flex flex-column align-items-center">
            <img src={item.img} alt="slide" className="img-fluid" />
            <h2 className="mt-3 text-success">{item.name}</h2>
            <h1 className="fw-bold fs-3 text-warning-emphasis">{item.des}</h1>
            <div className="mb-5 mt-3">
            <button type="button" className="btn btn-outline-success text-dark fw-bold">→ Shop Now</button><button type="button" className="btn btn-outline-warning text=dark fw-bold ms-5">→More Details</button>
            </div>

          </div>
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Header;
