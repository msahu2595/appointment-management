const initialState = [];

const vReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      return [...state, action.addAppointment];
    default:
      return state;
  }
};

export default vReducer;
