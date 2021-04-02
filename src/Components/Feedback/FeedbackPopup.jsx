import React, {useState} from 'react';
import { setFeedback } from '../../Redux/AppReducer';
import styles from './FeedbackPopup.module.css'
import { connect } from 'react-redux';
import Axios from 'axios';
const FeedbackPopup = (props) => {
    const [number, setNumber] = useState('')
    const [numberError, setNumberError] = useState(false)
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [comment, setComment] = useState('')
    const addMessage = () =>{
        if(number === ''){
            setNumberError(true)
            return
        }
        else{
            setNumberError(false)
        }
        if(email === ''){
            setEmailError(true)
            return
        }
        else{
            setEmailError(false)
        }
        props.setFeedback(false)
        // alert('Сообщение отправленно') 
    Axios.post("http://localhost:3001/application",
        {
            number:number,
            email:email,
            comment:comment
        }).then(()=>{
            alert('Сообщение отправленно')
        })
    }
   
    return (
        <>
            <div className={styles.feedbackPopupFon}>
                <div className={styles.popup}>
                    <div className={styles.closeBox}>
                        <img className={styles.close} alt='закрыть' src='./Img/cancel.png' 
                        onClick={(e) => { props.setFeedback(false) }} />
                    </div>
                    <div className={styles.body}>
                        <p>Введите свой номер телефона</p>
                        {numberError &&
                        <p className={styles.error}>Это поле обязательно</p>
                        }
                        <input onChange={(e)=>{setNumber(e.target.value)}} style={{marginBottom:10, height:20}} />
                        <p>Введите свою электронную почту</p>
                        {emailError &&
                        <p className={styles.error}> Это поле обязательно</p>
                        }
                        <input onChange={(e)=>{setEmail(e.target.value)}} style={{marginBottom:10, height:20}}/>
                        <textarea onChange={(e)=>{setComment(e.target.value)}} className={styles.comment} placeholder='Здесь вы можете оставить свой комментарий' />
                        <button onClick={(e)=>{addMessage()}} className={styles.button}>Отправить</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default connect(null, { setFeedback })(FeedbackPopup)

