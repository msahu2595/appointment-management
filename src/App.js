import React from "react";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentView from "./components/AppointmentView";

function App() {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <AppointmentForm />
        </div>
        <div className="container" style={{ marginTop: 20 }}>
          <AppointmentView />
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
