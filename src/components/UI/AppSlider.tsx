import React from "react";
import Slider, { Settings } from "react-slick";

interface AppSliderProps {
    carouselContent: React.ReactNode[];
}

const AppSlider: React.FC<AppSliderProps> = ({ carouselContent }) => {
    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            {carouselContent.map((content, index) => (
                <div key={index} className="p-5">
                    {content}
                </div>
            ))}
        </Slider>
    );
};

export default AppSlider;
