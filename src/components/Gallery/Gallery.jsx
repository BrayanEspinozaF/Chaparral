import styles from './Gallery.module.css'
import { closet, cocineta, recamara, recamara2, sala } from '../../assets/gallery'
import { ImageCard } from './ImageCard'

export const Gallery = () => {

    const images = [
        {
            id: 1,
            src: closet,
            alt: 'Closet',
            className: styles.img1,
            description: 'Nulla dui tortor, scelerisque vel ipsum ac, eleifend eleifend lacus. Suspendisse ac lacus in arcu sagittis auctor. Mauris ut dui ornare, feugiat nisl et, gravida sem. Vivamus ac elementum elit.',
            option: 'left'
        },
        {
            id: 2,
            src: cocineta,
            alt: 'Cocineta',
            className: styles.img5,
            description: 'Nulla dui tortor, scelerisque vel ipsum ac, eleifend eleifend lacus. Suspendisse ac lacus in arcu sagittis auctor. Mauris ut dui ornare, feugiat nisl et, gravida sem. Vivamus ac elementum elit.',
            option: 'rigth'
        },
        {
            id: 3,
            src: recamara2,
            alt: 'Recamara',
            className: styles.img3,
            description: 'Nulla dui tortor, scelerisque vel ipsum ac, eleifend eleifend lacus. Suspendisse ac lacus in arcu sagittis auctor. Mauris ut dui ornare, feugiat nisl et, gravida sem. Vivamus ac elementum elit.',
            option: 'left'
        },
        {
            id: 4,
            src: sala,
            alt: 'Sala Texas',
            className: styles.img4,
            description: 'Nulla dui tortor, scelerisque vel ipsum ac, eleifend eleifend lacus. Suspendisse ac lacus in arcu sagittis auctor. Mauris ut dui ornare, feugiat nisl et, gravida sem. Vivamus ac elementum elit.',
            option: 'rigth'
        },
        {
            id: 5,
            src: recamara,
            alt: 'Recamara',
            className: styles.img2,
            description: 'Nulla dui tortor, scelerisque vel ipsum ac, eleifend eleifend lacus. Suspendisse ac lacus in arcu sagittis auctor. Mauris ut dui ornare, feugiat nisl et, gravida sem. Vivamus ac elementum elit.',
            option: 'rigth'
        },
    ]

    return (
        <section id='gallery' className={styles.gallery}>
            {
                images.map((image, index) => (
                    <div className={image.className} key={image.id}>
                        <ImageCard option={image.option} src={image.src} name={image.alt} description={image.description}/>
                        {/* <img src={image.src} alt={image.alt} width='100%'/> */}
                    </div>
                ))
            }
        </section>
    )
}
