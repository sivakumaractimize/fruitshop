import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallery  = () => {


    // const gallery =[
    //     {
    //        id:1, img:"./assets/images/shop/g1.jpg"},
    //       {id:2, img:"./assets/images/shop/g2.jpg"},
    //       {id:3, img:"./assets/images/shop/g5.jpg"},
    //       {id:4, img:"./assets/images/icons/bhim.png"}


    // ]
    return(
        <>
           
        <div className="container-fluid " style={{ backgroundImage: `url(./assets/images/shop/photogallary.jpg)`}}>
            <h2 className="text-center text-light fw-bold"> Fruit Gallery</h2>
            <h1 className="text-center text-light">The Photos To Ponder</h1>

            <div className="row">
              
               <div className="col-12 col-sm-6  text-center mt-5 ">
                <img src="./assets/images/shop/g1.jpg" className="img-fluid"></img>
                
               </div>
               <div className="col-12 col-sm-6 text-center  mt-5 ">
               <img src="./assets/images/shop/g2.jpg" className="img-fluid"></img>
                
               </div>
             
               
             </div>
             <div className="row ">
              
              <div className="col-12 col-sm-6  text-center mt-5 ">
               <img src="./assets/images/shop/g5.jpg" className="img-fluid"></img>
               
              </div>
              <div className="col-12 col-sm-6 text-center  mt-5  mb-2">
              <img src="./assets/images/shop/g4.jpg" className="img-fluid"></img>
               
              </div>
            
              


              
            </div>
             
            
        </div>


        </>
    )
}

export default Gallery;