import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Map = () => {
    return (
        <>



            <div className="container text-center">
                <iframe className=" map mt-5"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30545.643681786976!2d81.92414269999999!3d16.8657279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715315505757!5m2!1sen!2sin"
                    width={900}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />


            </div>

        </>
    )
}

export default Map;