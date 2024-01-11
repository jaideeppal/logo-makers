import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Why Choose YourLogo?
                        </h2>
                        <p className="mt-6 text-gray-600">
                        

Creativity:
<br/>  Our team of talented designers is committed to pushing the boundaries of creativity to craft logos that stand out.
Customization:
<br/> We understand that each brand is unique. That's why we offer personalized logo solutions that align with your brand's personality.
<br/>
Quality:
<br/> We take pride in delivering logos that not only meet but exceed industry standards. Your satisfaction is our top priority.


                        </p>
                        <p className="mt-4 text-gray-600">
                        Our Story: 
                        <br/>Founded in 2024
                        , YourLogo has grown from a small design studio to a leading player 
                        in the logo design industry. Our founder, Jaideep Pal envisioned a 
                        platform where businesses could easily access top-notch logo design services. 
Today, we are proud to have helped countless brands establish their visual identity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}