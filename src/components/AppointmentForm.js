import React from "react";

import { connect } from "react-redux";

import ADD_APPOINTMENT from "../Redux/actions/addAppointment";

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      comment: "",
    };
  }

  handleChangeAll = event => {
    this.setState({ [event.target.name]: event.target.value.toString() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const addAppointment = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment
    };
    this.props.addAppointments(addAppointment);
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div>
            {/* name */}
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Text input"
                  value={this.state.name}
                  onChange={this.handleChangeAll}
                />
              </div>
            </div>

            {/* email */}
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Email input"
                  onChange={this.handleChangeAll}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </div>
            </div>

            {/* comment */}
            <div className="field">
              <label className="label">Comment</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  name="comment"
                  value={this.state.comment}
                  onChange={this.handleChangeAll}
                />
              </div>
            </div>

            {/* submit and cancel */}
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" type="submit" value="Submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(
  _state => ({}),
  dispatch => ({
    addAppointments: addAppointment => dispatch(ADD_APPOINTMENT(addAppointment))
  })
)(AppointmentForm);
