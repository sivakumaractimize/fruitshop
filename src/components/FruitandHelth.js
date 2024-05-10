import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const FruitHelth = () => {
    const data=[
        { id: 1, name: "Red Apple ", p: "Yummy Blender Recipes That Will Help You Lose Weight ", img: "./assets/images/about/redapple.png" },
        { id: 2, name: "Kiwi Canada", p: "Better for immunity and blood count ", img: "./assets/images/about/kiwi.png" },
    
    ]
    return (
        <>

            <div className="container">
                <h2 className="text-center">Fruit And Health</h2>

                <div className="col">
                    <div className="row">

                        <div className="col-12 col-sm-5 col-md-6 col-xxl-4">
                            {data.map((item)=>(

                            <div key={item.id} class="col-12 col-sm-12 col-md-12  d-flex justify-content-around">
                                <img src={item.img} className="img-fluid border border-3 rounded-circle p-4 mt-5 border-success me-3" />
                                <div className="mt-5">
                                    <h3 className="mt-2">{item.name}</h3>
                                    <p>{item.p}</p>
                                </div>
                            </div>
                            ))}
                          
                            <div class="col-12 col-sm-12 col-md-12  d-flex justify-content-around">
                                <img src="./assets/images/about/orange.jpg" className="img-fluid orange p-4 border border-3 rounded-circle p-4 mt-5 border-success me-3" />
                                <div className="mt-5">
                                    <h3 className="mt-2">Orange</h3>
                                    <p>Original nagpur orange for better pulp</p>
                                </div>
                            </div>




                        </div>
                        <div class="row col-12 col-sm-7 col-md-6 col-xxl-8 align-items-center align-content-center mx-auto">
                            <div class="col-12 col-sm-12 col-xl-6 col-xxl-8 ">
                                <img src="./assets/images/about/headimg.jpg" class="img-fluid text-center" />
                            </div>
                            <div class="col-12 col-sm-12 col-md-11 col-xl-6 col-xxl-4  messge "  >
                                
                                <p className=" p-4">You've heard of Superfoods, but…Superfruits? Not every fruit qualifies. Those deemed "super" by nutrition scientists are packed with antioxidants, fiber, vitamins and minerals, and other nutrients that can help you live longer, look better, and even prevent disease.</p>
                            </div>
                        </div>


                    </div>

                </div>



            </div>


        </>
    )
}

export default FruitHelth;



