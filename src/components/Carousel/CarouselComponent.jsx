import { closet, sala, cocineta, recamara, recamara2 } from "../../assets/gallery"
import { Carousel } from 'react-responsive-carousel'
import styles from './Carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export const CarouselComponent = () => {

    const imageGallery = [
        {
            id: 1,
            name: 'Closet',
            description: 'Closet',
            img: closet
        },
        {
            id: 2,
            name: 'Sala',
            description: 'Sala',
            img: sala
        },
        {
            id: 3,
            name: 'Cocineta',
            description: 'Cocineta',
            img: cocineta
        },
        {
            id: 4,
            name: 'Recamara',
            description: 'Recamara',
            img: recamara
        },
        {
            id: 5,
            name: 'Recamara',
            description: 'Recamara',
            img: recamara2
        }
    ]

    return (
        <div className={styles.container}>
            {/* <div className={styles.top}></div> */}
            <Carousel
                className={styles.carousel}
                autoPlay
                infiniteLoop
                interval={5000}
                showIndicators={false}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
            >
                {
                    imageGallery.map((image, index) => (
                        <div key={index}>
                            <img src={image.img} />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}
