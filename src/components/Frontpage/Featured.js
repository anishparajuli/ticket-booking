import React, { Component, Image } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import {Route, Link} from 'react-router-dom'              

class Featured extends Component {
    render() {
        
        return (
            <div>
           
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                
                <div>
                <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <p className="legend">
                    <h3>BigFilms Cinemas</h3>
                    Captain America: Civil War
                    </p>
                </div>
                <div>
                <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    <p className="legend">
                    <h3>Shree Krishna Films</h3>
                    Hulk: Awakening
                    </p>
                </div>
            </Carousel>
            </div>
        );
    }
}

export default Featured;