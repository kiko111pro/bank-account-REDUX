const initialState = {
  savings: 0,
  current: 0,
  login: false,
  isSavings: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_ACCOUNT":
      return {
        ...state,
        isSavings: !state.isSavings
      };

    case "DEPOSIT":
      if (state.isSavings) {
        return {
          ...state,
          savings: state.savings + action.payload
        };
      } else {
        return {
          ...state,
          current: state.current + action.payload
        };
      }

    case "LOGIN":
      return {
        ...state,
        login: !state.login
      };

    case "WITHDRAW":
      if (state.isSavings) {
        return {
          ...state,
          savings: state.savings - action.payload
        };
      } else {
        return {
          ...state,
          current: state.current - action.payload
        };
      }

    case "COLLECT_INTEREST":
      if (state.isSavings) {
        return {
          ...state,
          savings: state.savings * 3
        };
      } else {
        return {
          ...state,
          current: state.current * 3
        };
      }

    case "DELETE_ACCOUNT":
      if (state.isSavings) {
        return {
          ...state,
          savings: 0
        };
      } else {
        return {
          ...state,
          current: 0
        };
      }

    default:
      return state;
  }
};

export default reducer;
