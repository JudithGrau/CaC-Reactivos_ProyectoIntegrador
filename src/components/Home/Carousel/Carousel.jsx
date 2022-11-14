import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../../assets/img/carousel1.png'
import carousel2 from '../../../assets/img/carousel2.png'
import carousel3 from '../../../assets/img/carousel3.png'
import '../../Styles/Carousel.css' 

export const CarouselBanner = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block carousel-img"
                src={carousel1}
                alt="Imagen 1"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block carousel-img"
                src={carousel2}
                alt="Imagen 2"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block carousel-img"
                src={carousel3}
                alt="Imagen 3"
                />
            </Carousel.Item>
        </Carousel>
    )
}