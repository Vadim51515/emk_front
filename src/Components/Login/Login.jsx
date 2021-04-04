import  React,{useState,useEffect}  from 'react';
import styles from './Login.module.css'
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
const Login = (props) =>{
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        if (login === props.login) {
            if (password === props.password) {
                <Redirect to="/as" />
                console.log(213);
            }
            else{
                <Redirect to="/as" />
            }
        }
      }, [login, password]);
      const test = () =>{
          if (!props.login === props.password) {
        <Redirect to="/aas" />
              
          }
          else{
        <Redirect to="/aas" />

          }
      }
    return(
        <div className={styles.login}>
            <p>Введите логин</p>
            <input onChange={(e=>{setLogin((e.target.value))})} />
            <p>Введите пароль</p>
            <input onChange={(e=>{setPassword((e.target.value))})} />
            <button onClick={(e)=>{test()}}>asd</button>
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

