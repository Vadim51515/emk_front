import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'
const Header = () => {
    const [menyForMobile, setMenyForMobile] = useState(false)
    const Spec = (props) => {
        return (
            <div className={styles.specBox}>
                <NavLink
                    to='/specialties'
                    style={{ marginBottom: 10, marginTop: 10 }}
                    className={styles.specName}
                >
                    {props.name}
                </NavLink>
                <hr />
            </div>
        )
    }
    return (
        <div className={styles.header}>
            <div className={styles.emkBox}>
                <img
                    alt="EMK"
                    className={styles.logo}
                    src='./img/Logo.png'
                />
                <div>
                    <p className={styles.emkText}>Екатеринбургский </p>
                    <p className={styles.emkText}>Монтажный </p>
                    <p className={styles.emkText}>Колледж </p>
                </div>
                <img
                    alt="EMK"
                    className={styles.placeMarker}
                    src='./img/PlaceMarker.png'
                />
                <a
                    target="_blank"
                    className={styles.placeMarkerLink}
                    href="https://www.google.ru/maps/dir//''/@56.8222375,60.5330693,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x43c16ee95674b35d:0xaed17539b6181196!2m2!1d60.6031091!2d56.8221632"
                    style={{ color: 'white' }}
                >Екатеринбург, улица Декабристов 83</a>
                <img
                    alt="EMK"
                    className={styles.telephoneImg}
                    src='./img/phoneIcon.png'
                />
                <div className={styles.number} style={{ marginLeft: 10 }}>
                    <p style={{ color: 'white' }}>+7 (343) 257-45-48 (Приемная комиссия) </p>
                    <p style={{ color: 'white' }}>+7 (343) 257-47-46 (Директор) </p>
                </div>
                <div className={styles.socNetwork}>
                    <p className={styles.weSoc} style={{ color: 'white', marginLeft: 30, marginTop: 10 }}>Мы в социальных сетях:</p>
                    <a
                        target="_blank"
                        href="https://vk.com/ekmcollege"
                    >
                        <img
                            alt="EMK"
                            className={styles.socNetworkVk}
                            src='./img/vk.png'
                        />
                    </a>
                    <a target="_blank"
                        href="https://www.youtube.com/channel/UCSq6-AWKAxE_SiOYui6wOeA">
                        <img
                            alt="EMK"
                            className={styles.socNetworkYouTube}
                            src='./img/youtube.png'
                        />
                    </a>
                </div>

            </div>
            <div className={styles.info}>
                <NavLink
                    className={styles.aboutUs}
                    to=''>
                    Главная
                    </NavLink>
                <NavLink
                    className={styles.aboutUs}
                    activeClassName={styles.active}
                    to='/specialties'
                >Специальности
                </NavLink>
                <NavLink
                    className={styles.aboutUs}
                    activeClassName={styles.active}
                    to='/sport'>
                    Спортивная жизнь
                    </NavLink>
                <NavLink
                    className={styles.aboutUs}
                    activeClassName={styles.active}
                    to='/news'>
                    Новости
                    </NavLink>
            </div>
            <div className={styles.headerForMobile}>
                <img
                    alt='меню'
                    src='./img/menuForPhon.svg'
                    onClick={(e) => setMenyForMobile(!menyForMobile)} />
                {menyForMobile &&
                    <div className={styles.fon}>
                        <div className={styles.phoneMenu}>
                            <NavLink
                                onClick={(e) => setMenyForMobile(!menyForMobile)}
                                className={styles.aboutUs}
                                to=''>
                                Главная
                                </NavLink>
                            <NavLink
                                onClick={(e) => setMenyForMobile(!menyForMobile)}
                                className={styles.aboutUs}
                                activeClassName={styles.active}
                                to='/specialties'>
                                Специальности
                                </NavLink>
                            <NavLink
                                onClick={(e) => setMenyForMobile(!menyForMobile)}
                                className={styles.aboutUs}
                                activeClassName={styles.active}
                                to='/sport'>
                                Спортивная жизнь
                                </NavLink>
                            <NavLink
                                onClick={(e) => setMenyForMobile(!menyForMobile)}
                                className={styles.aboutUs}
                                activeClassName={styles.active}
                                to='/news'>
                                Новости
                                </NavLink>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default Header