import { Gallery } from '../../components/Gallery/Gallery'
import { TopMenu } from '../../components/TopMenu/TopMenu'
import { MainPage } from '../Main/MainPage'
import styles from './Feed.module.css'

export const Feed = () => {
    return (
        <div className={styles.container}>
            <TopMenu/>
            <MainPage/>
            <Gallery/>
        
        </div>
    )
}
