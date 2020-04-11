import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

function BCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://via.placeholder.com/1200x300/09b/fff.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://via.placeholder.com/1200x300/09a/fff.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://via.placeholder.com/1200x300/09c/fff.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default BCarousel
