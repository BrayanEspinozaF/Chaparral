import { RecamaraWB } from '../../assets/gallery'
import { CarouselComponent } from '../../components/Carousel/CarouselComponent'
import styles from './MainPage.module.css'


export const MainPage = () => {
    return (
        <section className={styles.container}>
            {/* <CarouselComponent/> */}
            <div className={styles.title_container}>
                <h1>Muebles Rusticos El Chaparral</h1>
                <button onClick={() => alert('Muebles Rusticos El chaparral')} className={styles.button_contact}>Contactanos</button>
            </div>
            <img src={RecamaraWB} alt='Recamara' title='Recamara' />

        </section>
    )
}
