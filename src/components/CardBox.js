import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "../styles/cardBox.css";

const CardBox = ({color, img, title , time , description}) => {
  return (
    <div className="card firstCard mb-5">
      <div
        className="card-header cardHeader d-flex justify-content-end"
        style={{ backgroundColor: color }}
      >
        <img
          src={`/images/${img}`}
          alt={title}
          className="img-fluid"
          style={{ width: "60px", height: "60px" }}
        />
      </div>
      <div className="card w-100 p-4 secondCard text-white">
        <div className="d-flex justify-content-between">
          <h5>{title}</h5>
          <BsThreeDots />
        </div>
        <div className="timeandDescription">
        <span className="lead time">{time}</span>
        <span className="description pt-2">{description}</span>
        </div>
      </div>
    </div>
    // <div>
    //   <div
    //     className="card firstCard d-flex justify-content-end"
    //     style={{ backgroundColor: "var(--light-orange)" }}
    //   >
    //     <img
    //       src="/images/icon-work.svg"
    //       alt="work"
    //       className="img-fluid"
    //       style={{ width: "60px", height: "60px" }}
    //     />
    //   </div>
    //   <div className="card p-4 secondCard text-white">
    //     <div className="d-flex justify-content-between">
    //       <h3>Work</h3>
    //       <BsThreeDots />
    //     </div>
    //     <p className="lead">32hrs</p>
    //     <span>Last Week-36hrs</span>
    //   </div>
    // </div>
  );
};

export default CardBox;
