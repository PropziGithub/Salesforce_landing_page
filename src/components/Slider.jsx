import React from "react";
import Image from 'next/future/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logoAutoCap from '@/images/logos/autocaplogo.svg'
import logoCcc from '@/images/logos/ccclogo.svg'
import logoCibc from '@/images/logos/cibclogo.svg'
import logoTmx from '@/images/logos/tmxlogo.svg'
import logoPayfirma from '@/images/logos/payfirmalogo.svg'

const IconSlider = () => {
  const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        autoplay: true,
        arrows:false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            }
          ]
    };

    const company_logo_name = [
        {name: logoCcc},
        {name: logoTmx},
        {name: logoPayfirma},
        {name: logoCibc},
        {name: logoAutoCap}
    ]
   
    return (
        <div className="">
            <Slider {...settings}>
            {
                company_logo_name.map((c_l_name, index) => (
                    <div key={index} className='mr-2'>
                        <Image src={c_l_name.name} alt='logos' className="mx-0 px-0"  unoptimized />
                   </div> 
                ))
            }
           </Slider>
        </div>
    )

}
export default IconSlider;