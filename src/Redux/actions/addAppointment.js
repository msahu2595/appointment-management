export const addAppointmentsAsync = addAppointment => {
  return { type: "ADD_APPOINTMENT", addAppointment };
};

export const addAppointments = addAppointment => {
  return dispatch => {
    setTimeout(() => {
      dispatch(addAppointmentsAsync(addAppointment));
    }, 5000);
  };
};
