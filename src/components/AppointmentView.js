import React from "react";
import { connect } from "react-redux";

const AppointmentView = props => {
  return (
    <React.Fragment>
      {props.initialData.map((appointment, i) => {
        return (
          <div className="card" key={i}>
            <header className="card-header-title">
              <h3 className="title is-3 is-capitalized">{appointment.name}</h3>
            </header>
            <div className="card-content">
              <div className="content">
                Email :{appointment.email}
                <br />
                Message :{appointment.message}
                <br />
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default connect(
  state => ({ initialData: state.rootReducer2.vReducer }),
  _dispatch => ({})
)(AppointmentView);
