const ADD_APPOINTMENT_R="ADD_APPOINTMENT"

const ADD_APPOINTMENT = addAppointment => {
  console.log(addAppointment)
  return { type: ADD_APPOINTMENT_R, addAppointment };
};

export default ADD_APPOINTMENT;
