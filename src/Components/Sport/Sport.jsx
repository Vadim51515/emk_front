import  React  from 'react';
import styles from './Sport.module.css'
const Sport = () =>{
    return(
        <div className={styles.sport}>
            <h1>Спортивная жизнь</h1>
            <hr 
            style=
            {{
                marginBottom:30,
                 marginTop:30
                 }}
                 />
            <div className={styles.cupsBox}>
            <img 
            className={styles.cupsImg} 
            alt='Кубки'
            src='./img/cups.png'
            />
            </div>
            <hr style={{
                marginBottom:30,
                 marginTop:30
                 }}
                 />
            <p className={styles.sportText}>Спортивная жизнь ГАПОУ СО «Екатеринбургский монтажный 
            колледж» ориентирована на
                 поиск наиболее оптимальных средств сохранения и укрепления здоровья обучающихся, 
                 создание благоприятных условий для формирования у наших студентов отношения к 
                 здоровому образу жизни как к одному из главных путей в достижении успеха. 
                 У колледжа сложились замечательные спортивные традиции, а среди студентов есть 
                 победители и призеры всероссийских, районных, областных спартакиад и соревнований,
                  разрядники и кандидаты в мастера спорта. Сборная команда нашего учебного заведения
                   неоднократно занимала призовые места в городских спартакиадах. В нашем колледже 
                   имеются спортивный и тренажерный залы, работают спортивные секции.</p>
            <hr 
            style=
            {{
                marginBottom:30,
                 marginTop:30
                }}
            />
            <h1>Расписание занятий секций на 2020/2021 учебный год</h1>
            <hr 
            style=
            {{
                marginBottom:30,
                 marginTop:30
                }}
            />
            <div className={styles.cupsBox}>
                <img 
                className={styles.cupsImg} 
                alt='Расписание занятий'
                src='./img/timetable.png '
                />
            </div>
            <hr 
            style=
            {{
                marginBottom:30, 
                marginTop:30
            }}
            />
            <h1>Результаты выступлений  2019/2020 учебного года</h1>
            <hr style=
            {{
                marginBottom:30,
                 marginTop:30
                 }}
                 />
            <div className={styles.cupsBox}>
                <img 
                className={styles.cupsImg} 
                alt='Результаты выступлений'
                src='./img/rezult.png '
                />
            </div>
           
        </div>
    )
}
export default Sport

