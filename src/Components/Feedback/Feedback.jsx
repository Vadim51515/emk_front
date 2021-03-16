import React, {useState} from 'react';
import styles from './Feedback.module.css'
import FeedbackPopup from './FeedbackPopup';
import { connect } from 'react-redux';
import { setFeedback } from '../../Redux/AppReducer';
const Feedback = (props) => {
    return (
        <>
        <div className={styles.feedback} onClick={(e)=>{props.setFeedback(true)}}></div>
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

