import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { RecamaraWB } from '../../assets/gallery'
import { CarouselComponent } from '../../components/Carousel/CarouselComponent'
import styles from './MainPage.module.css'


export const MainPage = () => {

    const titleRef = useRef(null)
    const btnRef = useRef(null)
    const imgRef = useRef(null)

    useEffect(() => {
        gsap.from(titleRef.current, {
            opacity: 0,
            x: -500
        })
        gsap.to(titleRef.current, {
            opacity: 1,
            x: 0,
            duration: 2
        })

        gsap.from(imgRef.current, {
            opacity: 0,
            x: 500
        })
        gsap.to(imgRef.current, {
            opacity: 1,
            x: 0,
            duration: 3
        })



    }, []);

    return (
        <section id='main-page' className={styles.container}>
            {/* <CarouselComponent/> */}
            <div ref={titleRef} className={styles.title_container}>
                <h1 >Muebles Rusticos El Chaparral</h1>
                <button onClick={() => alert('Muebles Rusticos El chaparral')} className={styles.button_contact}>Contactanos</button>
            </div>
            <img ref={imgRef} src={RecamaraWB} alt='Recamara' title='Recamara' />

        </section>
    )
}
