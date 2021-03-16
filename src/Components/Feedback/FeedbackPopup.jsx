import React from 'react';
import { setFeedback } from '../../Redux/AppReducer';
import styles from './FeedbackPopup.module.css'
import { connect } from 'react-redux';
const FeedbackPopup = (props) => {
    
    return (
        <>
       <div className={styles.feedbackPopupFon}>
       <div className={styles.popup}>
           <p onClick={(e)=>{props.setFeedback(false)}}>Закрыть</p>
</div>
       </div>

       </>
    )
}
export default connect(null, {setFeedback})(FeedbackPopup) 

