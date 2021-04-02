import Axios from 'axios';
const GET_NEWS = 'GET_NEWS'
let initialState = {
    news: []
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
   case GET_NEWS :
       return{
           ...state,
           news:action.news
       }
    default:
      return state;
  }
};
export const getNews = (news) => (dispatch) =>{
   Axios.get('http://localhost:3001/news/')
  .then(response => {
    // console.log("response");
     console.log(response.data);
     const news = response.data
dispatch({type:GET_NEWS, news})

})
}

export default NewsReducer;
