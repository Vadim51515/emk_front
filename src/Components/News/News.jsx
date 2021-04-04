import React, { useEffect } from 'react';
import styles from './News.module.css'
import { getNews } from './../../Redux/NewsReducer';
import { connect } from 'react-redux';
import moment from 'moment';
const News = (props) => {

  useEffect(() => {
    props.getNews()
  }, []);
  console.log(props.news);

  return (
    <div className={styles.news}>
      <h1>Новости</h1>
      <hr/>
      {props.news.length == 0 &&
      <h1 
      style=
      {{
        marginBottom:400
      }}
      >Новостей нет!</h1>
       }
      {props.news.map(e => {
        return (
          <div key={e.id} className={styles.newsBox}>
            <h1 className={styles.headingNews}>{e.heading}</h1>
            <p className={styles.newsBody}>{e.text}</p>
            <div className={styles.imgBox}>
              <img 
              className={styles.imgNews} 
              alt="фотография" 
              src={'./img/' + e.img} 
              />
            </div>
            <p className={styles.newsDate}>
              {moment(e.date).utc().format('DD.MM.YYYY')}
            </p>
            <hr 
            style=
            {{
              marginBottom:10,
               marginTop:10
               }}
               />
          </div>
        )
      })}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    news: state.newsReducer.news,
  };
};
export default connect(mapStateToProps, { getNews })(News);

