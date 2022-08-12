import styles from './TopMenu.module.css'
import logo from './../../assets/logoWhite.png'
import { useScreenSize } from '../../hooks/useScreenSize'
import { MenuMobile } from './MenuMobile/MenuMobile'

export const TopMenu = () => {

    const { width } = useScreenSize()

    return (
        <>        {
            width > 1000
                ? (<>
                    <section className={styles.container}>
                        <div className={styles.logo_container}>
                            <img src={logo} height={60} />
                        </div>
                        <ul>
                            <li>
                                <a href='#'>Nosotros</a>
                            </li>
                            <li>
                                <a href='#'>Galeria</a>
                            </li>
                            <li>
                                <a href='#'>Productos</a>
                            </li>
                            <li>
                                <a href='#'>Contacto</a>
                            </li>
                        </ul>
                    </section>
                </>)
                : (<>
                    <MenuMobile/>
                </>)
        }
        </>     
    )
}
