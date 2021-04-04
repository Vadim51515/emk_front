import React, {useState} from 'react';
import styles from './Feedback.module.css'
import FeedbackPopup from './FeedbackPopup';
import { connect } from 'react-redux';
import { setFeedback } from '../../Redux/AppReducer';
const Feedback = (props) => {
    return (
        <>
        <img className={styles.feedback} src='./img/message.png' onClick={(e)=>{props.setFeedback(true)}}></img>
        {props.feedback &&
        <FeedbackPopup />
        }
        </>
    )
}
const mapStateToProps = state => {
    return {
        feedback: state.appReducer.feedback,

    };
  };
    export default connect(mapStateToProps, {setFeedback})(Feedback) 

