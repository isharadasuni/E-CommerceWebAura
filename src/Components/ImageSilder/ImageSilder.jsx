import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// Import images
import image1 from '../../Images/img1.jpg';
import image2 from '../../Images/img2.jpg';
import image3 from '../../Images/img3.jpg';
import image4 from '../../Images/img4.jpg';
import image5 from '../../Images/img5.jpg';

const ImageSlider = () => {
    // Define the images array using imported images
    const images = [
        { src: image1, alt: 'Image 1' },
        { src: image2, alt: 'Image 2' },
        { src: image3, alt: 'Image 3' },
        { src: image4, alt: 'Image 4' },
        { src: image5, alt: 'Image 5' },
    ];

    const settings = {
        dots: true,             // Show navigation dots
        infinite: true,         // Infinite scrolling
        speed: 1000,            // Transition speed (adjustable)
        fade: true,             // Enable fade transition
        slidesToShow: 1,        // Number of slides to show
        slidesToScroll: 1,      // Number of slides to scroll
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 3000,    // Autoplay interval
        arrows: true,           // Show left/right navigation arrows
    };

    return (
        <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', marginTop: '10px' }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            style={{ width: '97.6vw', height: '500px', objectFit: 'cover' }} 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
