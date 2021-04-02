import  React  from 'react';
import styles from './Footer.module.css'
const Footer = () =>{
    return(
        <>
        <div className={styles.footer}>
            <p className={styles.footerHeading}>Жизнь не стоит на месте, и наш колледж всегда идет в ногу со временем!</p>
            <p className={styles.emk}>© 2015 · ГАПОУ СО "ЕМК" </p>
        </div>
        </>
    )
}
export default Footer
