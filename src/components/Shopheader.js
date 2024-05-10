import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Shopheader  = () => {
    return(
        <>
           
           <div className="container-fluid" style={{ backgroundImage: `url(./assets/images/shop/shopbg2.jpg)`, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
              <h2 className="text-center text-light ">Fruit Organic Foods</h2>
            <h4 className="text-center bg-sale fw-bolder text-warning ">BIG SALE</h4>
           <p className="text-center text-light ">Up To 30% Off on All Products</p>
        </div>


        </>
    )
}

export default Shopheader;