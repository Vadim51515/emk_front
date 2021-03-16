import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
const Header = () => {
    const [spec, setSpec] = useState(false)
    const specName = [
        'Техника и технологии строительства',
        'Информатика и вычислительная техника',
        'Машиностроение',
        'Прикладная геология, горное дело, нефтегазовое дело и геодезия',
        'Экономика и управление',
        'Все специальности',

]

    const Spec = (props) => {
        return(
            <div className={styles.specBox}>
               <NavLink  to='/specialties' style={{marginBottom:10, marginTop:10}} className={styles.specName}>{props.name}</NavLink>
               <hr />
            </div>
        )
    }
    console.log(spec);
    return (
        <div className={styles.header}>
            <img alt="EMK" className={styles.logo} src='./img/Logo.png' />
            <div className={styles.info}>
                <NavLink className={styles.aboutUs} to=''>Главная</NavLink>
                <div className={styles.pos}>
                <p className={styles.aboutUs}  onClick={()=>{setSpec(!spec)}}>Специальности</p>
                {spec&&
                <div className={styles.spec} id="spec">
                        {
                            specName.map(e=>(
                                <Spec name ={e}/>
                            ))
                        }
                    </div>

}
                    </div>
                <NavLink className={styles.aboutUs} activeClassName={styles.active} to='/sport'>Спортивная жизнь</NavLink>
                <NavLink className={styles.aboutUs} activeClassName={styles.active} to='/news'>Новости</NavLink>

                {/* <a className={styles.aboutUs} href="test">О нас</a> */}
                {/* <a className={styles.aboutUs} href="test">Абитуриенты</a>
                <a className={styles.aboutUs} href="test">Студенты</a>ё
                <a className={styles.aboutUs} href="test">Выпускнику</a>
                <a className={styles.aboutUs} href="test">Педагогу</a>
                <a className={styles.aboutUs} href="test">Cтуденческая жизнь</a> */}
            </div>
        </div>
    )
}
export default Header

