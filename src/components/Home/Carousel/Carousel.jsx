import carousel_1 from '../../../assets/img/carousel1.jpg'
import carousel_2 from '../../../assets/img/carousel2.png'
import carousel_3 from '../../../assets/img/carousel3.png'

export const Carousel = () => {
    return(
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={carousel_1} alt="" class="d-block"/>
                </div>
                <div class="carousel-item">
                <img src={carousel_2} alt="" class="d-block"/>
                </div>
                <div class="carousel-item">
                <img src={carousel_3} alt="" class="d-block"/>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}