import  React,{useState,useEffect,useCallback}  from 'react';
import styles from './Login.module.css'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Link,
  useHistory
  } from "react-router-dom";
const Login = (props) =>{
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        if (login === props.login) {
            if (password === props.password) {
                console.log(213);
                handleOnClick()
                localStorage.removeItem('admin');
                localStorage.setItem('admin', true);
            }
        }
      }, [login, password]);
<button onClick={handleOnClick }>Войти</button>
    return(
        <div className={styles.login}>
            <p>Введите логин</p>
            <input onChange={(e=>{setLogin((e.target.value))})} />
            <p>Введите пароль</p>
            <input onChange={(e=>{setPassword((e.target.value))})} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
      login: state.appReducer.login,
      password: state.appReducer.password,
    };
  };
export default connect(mapStateToProps,{}) (Login)

