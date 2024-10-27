import React from "react";
import Slider, { Settings } from "react-slick";

interface Slide {
    id: number;
    content: React.ReactNode;
    bgColor?: string;
    paddingX?: string;
    paddingY?: string;
    borderRadius?: string;
}

interface AppSliderProps {
    sliderContent: Slide[];
    sliderSettings?: Settings;
}

const AppSlider: React.FC<AppSliderProps> = ({
    sliderContent,
    sliderSettings,
}) => {
    const defaultSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    // Объединение настроек слайдера
    const mergedSettings = { ...defaultSettings, ...sliderSettings };

    return (
        <Slider {...mergedSettings}>
            {sliderContent.map((slide) => {
                const {
                    bgColor = "bg-progress-handle-bg",
                    paddingX = "px-4",
                    paddingY = "py-4",
                    borderRadius = "rounded-lg",
                } = slide;

                return (
                    <div
                        key={slide.id}
                        className={`${bgColor} ${paddingX} ${paddingY} ${borderRadius}`}
                    >
                        {slide.content}
                    </div>
                );
            })}
        </Slider>
    );
};

export default AppSlider;
