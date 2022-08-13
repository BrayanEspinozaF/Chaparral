import styles from './MenuMobile.module.css'
import logo from '../../../assets/logoWhite.png'
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useState } from 'react';

export const MenuMobile = () => {

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen((prevIsOpen) => !prevIsOpen);

  }

  return (
    <section>
      <IoMenuSharp className={styles.open_icon} onClick={toggle} />
        <div className={`${styles.menu_container} ${isOpen ? styles.visible : ''}`}>
          <IoClose className={styles.close_icon} onClick={toggle} />
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

        </div>
    </section>
  )
}
