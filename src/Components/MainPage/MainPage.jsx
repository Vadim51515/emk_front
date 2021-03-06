import { React } from 'react';
import styles from './MainPage.module.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
const MainPage = () => {
    const mainPage = [
        "Уникальность нашего образовательного учреждения сформировалось ещё в 1952 году",
        "Мы гарантируем 100%-е трудоустройство: 12 востребованных на рынке специальностей",
        "Для наших студентов организованы спортивные секции, разнообразные кружки и клубы",
        "Среди обучающихся есть победители и призеры чемпионатов профессионального мастерства"
    ]
    const MissionAndGoalsBox = (props) => {
        return (
            <div className={styles.missionBox}>
                <h3 className={styles.missionHeader} >{props.titul}</h3>
                <p className={styles.missionBody}>{props.body}</p>
            </div>
        )
    }
    return (
        <div className={styles.mainPage}>
            <h1 className={styles.advantagesHeading}>Наши ключевые преимущества</h1>
            <hr />

            <div className={styles.advantages}>
                {mainPage.map((e) => {
                    return (
                        <div className={styles.advantage}>
                            <p>{e}</p>
                        </div>
                    )
                })}
            </div>
            <hr style={{ marginBottom: 30 }} />
            <div>
                <h1 className={styles.missionAndGoals}>Миссия и цели деятельности колледжа</h1>
                <div className={styles.missionAndGoalsBox}>
                    <MissionAndGoalsBox
                        titul='Миссия колледжа:'
                        body='формирование квалифицированных и гармонично развитых специалистов, способных 
                   активно участвовать в экономическом и духовном развитии России.'
                    />
                    <MissionAndGoalsBox
                        titul='Цели деятельности колледжа:'
                        body='удовлетворение потребностей граждан в получении начального, среднего
                   профессионального образования в соответствии с федеральными государственными 
                   образовательными стандартами;
                   – создание комплекса условий, обеспечивающих получение качественного образования, 
                   формирование гармонично развитой, компетентностной личности.'
                    />

                </div>
                <hr style={{ marginTop: 30, marginBottom: 30 }} />
                <div className={styles.slideImg} >
                    <AwesomeSlider>
                        <div data-src="./img/slide_1.png" />
                        <div data-src="./img/slide_2.png" />
                        <div data-src="./img/slide_3.png" />
                        <div data-src="./img/slide_4.png" />
                        <div data-src="./img/slide_5.png" />
                        <div data-src="./img/slide_6.png" />
                    </AwesomeSlider>
                </div>

                <hr style={{ marginTop: 30, marginBottom: 30 }} />
                <h1>История колледжа</h1>
                <p className={styles.history_1}>История Екатеринбургского монтажного колледжа началась с 25 сентября 1929 года, когда
                из горно-металлургического техникума выделился Свердловский строительный техникум (ССТ).
                Он стал подведомственным учреждением Минстроя СССР и изначально располагался при
                строительном институте, а с 1934 года переехал в старинное здание на Декабристов, 83,
                где и базируется по сей день. До революции в этом доме размещалось епархиальное училище
                для девочек. В нем преподавал словесность знаменитый уральский писатель, автор
                «Малахитовой шкатулки», П.П. Бажов. Кроме того, воспитанница училища Топоркова
                З.М. в 30-е годы вернулась в это здание уже в качестве преподавателя литературы
                       Свердловского строительного техникума.</p>
            </div>
            <div className={styles.imgHistoryBox}>
                <img 
                alt="Фото здание ЕМК в начале 20 века" 
                src='./img/buildingEmk.png' 
                className={styles.imgHistory} 
                />
            </div>
            <p className={styles.imgHistoryText}>Здание на Александровском проспекте (Сейчас Декабристов,83) в начале XX в.</p>
            <hr style={{ marginBottom: 30, marginTop: 30 }} />

            <p className={styles.history_1}>За первое десятилетие существования техникум выпустил около
            800 специалистов по направлениям: промышленное и гражданское строительство, водопровод и
            канализация, теплоснабжение и вентиляция. Сначала обучались только юноши, а с увеличением
            количества специальностей стали поступать и девушки. Великая Отечественная война внесла свои
            коррективы: в 1941-45 гг. помещение на Декабристов, 83 стало эвакуационным пунктом, также здесь
            размещались политотдел 70-й армии и редакция газеты «За Родину!» А техникум продолжал работать:
            студенты, преимущественно девушки, обучались на базе городских общеобразовательных школ по
                вечерам, а днем работали в госпиталях, на заводах Свердловска.</p>
            <div className={styles.imgHistoryBox}>
                <img 
                alt="Фото мемориальной доски" 
                src='./img/memorial.png' 
                className={styles.imgHistory} 
                />
            </div>
            <p className={styles.imgHistoryText}>Мемориальная доска на стене колледжа. Надпись гласит:
            «В этом здании с октября 1942 года по февраль 1943 года работал политотдел формировавшейся на
             Урале и направленной на фронт 70-ой армии»</p>
            <hr style={{ marginBottom: 30, marginTop: 30 }} />

            <p className={styles.history_1}>В послевоенные годы здание на Декабристов возвратили техникуму
            и реконструировали. Площадь помещений увеличилась в два раза. Добавились новые специальности:
            строительные машины и оборудование, промышленные печи. Колледж набирает популярность. Во второй
             половине 50-х ежегодный контингент учащихся перевалил за 500 человек.</p>
            <div className={styles.imgHistoryBox}>
                <img 
                alt="Фото здания по электротехнике" 
                src='./img/building.png' 
                className={styles.imgHistory} 
                />
            </div>
            <p className={styles.imgHistoryText}>Здание по электротехнике в Свердловском
            строительном техникуме. Середина 50-х гг.</p>
            <hr style={{ marginBottom: 30, marginTop: 30 }} />

            <h1>Колледж сегодня</h1>
            <hr style={{ marginBottom: 30, marginTop: 30 }} />


            <p className={styles.history_1}>Свое современное название – Екатеринбургский монтажный колледж
            (ЕМК) - учебное заведение получило в 1996 г., находясь в системе Государственного комитета РФ
            по жилищной и строительной политике. Сегодня ЕМК относится к Министерству общего и
            профессионального образования Свердловской области и сохраняет лидерские позиции в
            регионе по подготовке рабочих и специалистов строительного комплекса. Колледж является
            постоянным участником международной выставки «Иннопром», награжден почетным знаком Союза
            строителей России «Строительная слава» (2009), а также вошел в рейтинг «100 лучших ССУЗов
             России» в 2012, 2017 и 2018 годах.</p>
            <div className={styles.imgHistoryBox}>
                <img 
                alt="Здание Екатеринбургского монтажного колледжа сегодня" 
                src='./img/newCollege.png' 
                className={styles.imgHistory} 
                />
            </div>
            <p className={styles.imgHistoryText}>Здание Екатеринбургского монтажного колледжа сегодня</p>
            <hr style={{ marginBottom: 30, marginTop: 30 }} />


            <p className={styles.history_1}>С 2015 года ЕМК возглавляет опытный руководитель Чистяков Валерий
            Николаевич. С его приходом колледж регулярно попадает в топ высокоэффективных образовательных
            организаций. Расширился спектр специальностей. Теперь здесь можно выучиться не только на
            «строителя», «механика», «сантехника», «автоматчика», «программиста» или «электрика», но и
            получить образование в сфере ЖКХ, земельно-имущественных отношений, документационного
            обеспечения и архивоведения. В ЕМК готовят специалистов по направлениям, которые входят
            в федеральный и региональный топ-листы самых востребованных профессий. В 2017 г. создан
            Попечительский совет Екатеринбургского монтажного колледжа. Его костяк составили
            выпускники разных лет - руководители крупных строительно-промышленных предприятий города.
            Благодаря активности руководства и при содействии Попечительского совета удалось
                осуществить капитальный ремонт и переоснащение спортзала, актового зала, общежития.</p>
            <div className={styles.imgHistoryBox}>
                <img 
                alt="Действующий директор ЕМК" 
                src='./img/Director.png' 
                className={styles.imgHistory} 
                />
            </div>
            <p className={styles.imgHistoryText}>Действующий директор ЕМК Чистяков Валерий Николаевич</p>
            <hr style={{ marginBottom: 30, marginTop: 30 }} />

            <p className={styles.history_1}>Колледж поддерживает и развивает движение «WorldSkills Russia:
            молодые профессионалы», являясь соорганизатором регионального этапа чемпионата рабочих профессий.
            Студенты ЕМК регулярно становятся победителями этих соревнований на областном и всероссийском
            уровнях. В 2018 г. монтажный колледж один из первых в Свердловской области успешно прошел
            профессионально-общественную аккредитацию специальности «Строительство и эксплуатация зданий и
            сооружений». Таким образом, по оценкам экспертов Национального объединения строителей,
            Российского союза строителей, Национального объединения изыскателей и проектировщиков
            уровень подготовки специалистов в ЕМК полностью соответствует требованиям российских,
            иностранных и международных организаций. В 2019 г. монтажному колледжу исполняется 90 лет.
            За этот период выпущено свыше 28 тысяч специалистов строительной сферы, из них около 1700
            человек получили дипломы с отличием. Здесь учились более 40 династий, многие нашли
              свою судьбу.</p>
            <div className={styles.imgHistoryBox}>
                <img 
                alt=">Студенты монтажного колледжа – победители регионального 
            этапа WorldSkills Russia - 2018" 
            src='./img/worldskills.png' 
            className={styles.imgHistory} 
            />
            </div>
            {/* <p><a href="/specialties/#top">Наверх</a></p> */}
            <p className={styles.imgHistoryText}>Студенты монтажного колледжа – победители регионального
            этапа WorldSkills Russia - 2018</p>
            <hr style={{ marginBottom: 30, marginTop: 30 }} />
            <h1>Адрес колледжа: г. Екатеринбург, ул. Декабристов, 83</h1>
            <div className={styles.map}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17474.18672493582!2d60.5187758!3d56.8069407!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ee95674b35d%3A0xaed17539b6181196!2z0JPQkNCf0J7QoyDQodCeICLQldC60LDRgtC10YDQuNC90LHRg9GA0LPRgdC60LjQuSDQvNC-0L3RgtCw0LbQvdGL0Lkg0LrQvtC70LvQtdC00LYi!5e0!3m2!1sru!2sru!4v1617216727563!5m2!1sru!2sru" 
                width="800" 
                height="600" 
                style={{ border: 0 }} 
                allowfullscreen="" 
                loading="lazy">
                </iframe>
            </div>
            <iframe className={styles.map_2} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.386031417102!2d60.600920415535974!3d56.82216611647666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ee95674b35d%3A0xaed17539b6181196!2z0JPQkNCf0J7QoyDQodCeICLQldC60LDRgtC10YDQuNC90LHRg9GA0LPRgdC60LjQuSDQvNC-0L3RgtCw0LbQvdGL0Lkg0LrQvtC70LvQtdC00LYi!5e0!3m2!1sru!2sru!4v1617563808668!5m2!1sru!2sru" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
        </div>
    )
}
export default MainPage