import { Link } from "react-router-dom"
import { CarouselBanner } from "../Carousel/Carousel"
import { Item } from "./"
import '../../Styles/ItemList.css' 


export const ItemList = ({ datos }) => {

    const containerCss = "container"

    return (
        <>
            <CarouselBanner />
            <div
                className={containerCss}
                style={{ marginTop: '4em' }}
            >
                {datos.map(item => <Link
                    key={item.id}
                    to={`/item/${item.id}`}
                    className='text-decoration-none item'
                >
                    <Item item={item} />
                </Link>)}
            </div>

           
        </>
    )
}