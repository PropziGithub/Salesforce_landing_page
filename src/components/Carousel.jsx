import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        autoplay: true,
        arrows:false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const compaign_name = [
        {name: 'Everything you need for your next Sales campaign.'},
        {name: 'Everything you need for your next Marketing campaign.'},
        {name: 'Everything you need for your next Service campaign.'},
        {name: 'Everything you need for your next Retention campaign.'},
        {name: 'Everything you need for your next Promotion campaign.'}
    ]
   
    return (
        <div>
            <Slider {...settings}>
            {
                compaign_name.map((c_name, index) => (
                    <span key={index} className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-4xl">
                        {c_name.name}
                   </span> 
                ))
            }
           </Slider>
        </div>
    )

}
export default Carousel;