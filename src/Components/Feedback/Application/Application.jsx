import  React,{useState,useEffect,useCallback}  from 'react';
import styles from './Application.module.css'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link,
    useHistory
    } from "react-router-dom";
import Axios from 'axios';

const Application = (props) =>{
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/'), [history]);
    const [application,setApplication] = useState([])
    useEffect(() => {
        if (!localStorage.getItem('admin') == "true") {
            handleOnClick()
        }
        else{
            Axios.get('http://localhost:3001/get/application/')
            .then(response => {
                console.log(response.data);
                setApplication(response.data.reverse())
          })
        }
      }, []);
    return(
        <div className={styles.application}>
            {application.length === 0
            ?<h1>Заявок нет</h1>
            :application.map(e=>(
                <div className={styles.aplic}>
                    <div style={{display:'flex'}}>
                        <p style={{marginRight:10}}>Номер:</p>
                        <p>{e.number}</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <p style={{marginRight:10}}>Почта:</p>
                        <p>{e.email}</p>
                    </div>
                    <div style={{display:'flex'}}>
                        <p style={{marginRight:10}}>Коментарий:</p>
                        <p>{e.comment}</p>
                    </div>
                </div>
                
            ))
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
      login: state.appReducer.login,
      password: state.appReducer.password,
    };
  };
export default connect(mapStateToProps,{}) (Application)

