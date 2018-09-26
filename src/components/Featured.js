import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class Featured extends Component {
    render() {
        return (
            <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                <div>
                    <img src={require("../assets/1.jpg")} />
                    
                    <p className="legend">
                    <h3>QFX Cinemas</h3>
                    Thor: The dark world</p>
                </div>
                <div>
                    <img src={require("../assets/2.jpg")} />
                    <p className="legend">
                    <h3>BigFilms Cinemas</h3>
                    Captain America: Civil War
                    </p>
                </div>
                <div>
                    <img src={require("../assets/3.jpg")} />
                    <p className="legend">
                    <h3>Shree Krishna Films</h3>
                    Hulk: Awakening
                    </p>
                </div>
            </Carousel>
        );
    }
}

export default Featured;