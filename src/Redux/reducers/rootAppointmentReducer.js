// import DELETE_APPOINTMENT from "../actions/delAppointment";

const initialState = [];

const myRootAppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_APPOINTMENT":
      return [...state, action.addAppointment];
    // case DELETE_APPOINTMENT:
    //   return [...state, action.delAppointment];
    default:
      return state;
  }
};

export default myRootAppointmentReducer;
