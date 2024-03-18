import React, { Component, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import CardBox from "./components/CardBox";

const App = () => {
  const [periodicity , setPeriodicity] = useState('week')
  return (
    <div className="container containerBox">
      <div className="row mt-5 pt-5 g-3">
        <div className="col-md-3">
          <Sidebar periodicity={periodicity} setPeriodicity={setPeriodicity} />
        </div>
        <div className="col-md-9 ">
          <div className="row ">
            <div className="col-md-4">
              <CardBox
                color="var(--light-orange)"
                img="icon-work.svg"
                title="Work"
                time="32hrs"
                description={`Last ${periodicity ==="week" ? "Week" : (periodicity=="day" ? "Day" : "Month")}-36hrs`}
              />
            </div>
            <div className="col-md-4">
              <CardBox
                color="var( --soft-blue)"
                img="icon-play.svg"
                title="Play"
                time="10hrs"
                description={`Last ${periodicity ==="week" ? "Week" : (periodicity=="day" ? "Day" : "Month")}-8hrs`}
              />
            </div>
            <div className="col-md-4">
              <CardBox
                color="var( --light-red)"
                img="icon-study.svg"
                title="Study"
                time="4hrs"
                description={`Last ${periodicity ==="week" ? "Week" : (periodicity=="day" ? "Day" : "Month")}-7hrs`}
              />
            </div>
          </div>
          <div className="row mt-md-5 pt-md-5">
            <div className="col-md-4 ">
              <CardBox
                color="var(--lime-green)"
                img="icon-exercise.svg"
                title="Exercise"
                time="4hrs"
                description={`Last ${periodicity ==="week" ? "Week" : (periodicity=="day" ? "Day" : "Month")}-5hrs`}
              />
            </div>
            <div className="col-md-4">
              <CardBox
                color="var(--violet)"
                img="icon-social.svg"
                title="Social"
                time="5hrs"
                description={`Last ${periodicity ==="week" ? "Week" : (periodicity=="day" ? "Day" : "Month")}-10hrs`}
              />
            </div>
            <div className="col-md-4">
              <CardBox
                color="var(--soft-orange)"
                img="icon-self-care.svg"
                title="Self Care"
                time="2hrs"
                description={`Last ${periodicity ==="week" ? "Week" : (periodicity=="day" ? "Day" : "Month")}-2hrs`}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="d-flex justify-content-center pt-3 text-white"><a href="https://www.frontendmentor.io/home" className="pe-1">Frontend Mentor </a> challenge coded by <a href="https://www.linkedin.com/in/aureline-sonia-motouom-65472a174/" className="ps-1"> Aureline Sonia</a> </p>
    </div>
  );
}

export default App;
