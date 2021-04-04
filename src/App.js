import './App.css';
import Header from './Components/Header/Header.jsx'
import MainPage from './Components/MainPage/MainPage';
import Footer from './Components/Footer/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import Specialties from './Components/Specialties/Specialties';
import { connect } from 'react-redux';
import { initApp } from './Redux/AppReducer';
import Sport from './Components/Sport/Sport';
import News from './Components/News/News';
import Feedback from './Components/Feedback/Feedback';
import Login from './Components/Login/Login';

function App(props) {
  if (!props.init) {
    <Redirect to="/main" />
    props.initApp()
  }
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/specialties' render={() => <Specialties />} />
        <Route path='/sport' render={() => <Sport />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/' render={() => <MainPage />} />
      </Switch>
      <Footer />
      <Feedback />

    </div>

  );
}
const mapStateToProps = state => {
  return {
    init: state.appReducer.init,

  };
};
export default connect(mapStateToProps, { initApp })(App);


