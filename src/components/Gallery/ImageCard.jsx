import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import styles from './Card.module.css'
gsap.registerPlugin(ScrollTrigger);

export const ImageCard = ({ src, name, description, option }) => {

    const boxRef = useRef(null)
    const [hover, sethover] = useState(false);

    useEffect(() => {
        ScrollTrigger.batch(boxRef.current, {
            interval: 1,
            onEnter: () => {
                gsap.from(boxRef.current, {
                    opacity: 0,
                    x: option === 'rigth' ? 500 : -500
                })
                gsap.to(boxRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 2
                })

            },

        })

    }, []);

    return (
        <section
            ref={boxRef}
            className={styles.cardContainer}
            onMouseLeave={() => sethover(false)}
            onMouseOver={() => sethover(true)}
        >
            <div className={`${styles.description} ${hover ? styles.description_hover : styles.description_leave}`}> 
                <h3>
                    {name}
                </h3>
                <p>
                    {description} 
                </p>
            </div>
            <img src={src} alt={name} className={hover ? styles.img_hover : ''}/>
        </section>
    )
}
