const INIT_APP = "INIT_APP"
const SET_FEEDBACK = 'SET_FEEDBACK'
let initialState = {
  init: false,
  feedback:false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ...state,
        init:true,
      };
      case SET_FEEDBACK:
      return {
        ...state,
        feedback:action.feedback,
      };
    default:
      return state;
  }
};

export const initApp = () => (dispatch) => {
    dispatch({type:INIT_APP})
};
export const setFeedback = (feedback) => (dispatch) => {
  dispatch({type:SET_FEEDBACK, feedback})
};

export default AppReducer;
