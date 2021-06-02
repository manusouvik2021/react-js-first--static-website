import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'images/la.jpg',
    'images/chicago.jpg'
  ];

function Banner() {

    return(
        
        <div className="slide-container">
            <Fade>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slideImages[0]} />
                    </div>

                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={slideImages[1]} />
                    </div>

                </div>

            </Fade>
        </div>

    );

}

export default Banner;