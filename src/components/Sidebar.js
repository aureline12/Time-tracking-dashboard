import React, { useState } from "react";
import "../styles/Siderbar.css";

const Sidebar = ({periodicity , setPeriodicity}) => {
 
  return (
    <div className="card cardBox w-100 h-100">
      <div className="card px-4 py-5 userInfo">
        <img
          src="/images/image-jeremy.png"
          className="img-fluid"
          style={{ width: "80px", height: "80px" }}
        />
        <div className="titleAndName pt-md-5 ps-3">
          <span className="title">Report for</span>
          <div className="name">
            <span className="lead ps-1">Jeremy</span>
            <span className="lead ps-1">Robson</span>
          </div>
        </div>
      </div>
      <ul className="p-3 list-unstyled ul">
        <li className={`p-1 ${periodicity === 'day' && 'text-white'}`} onClick={() =>setPeriodicity('day')} >Daily</li>
        <li className={`p-1 ${periodicity === 'week' && 'text-white'}`} onClick={() =>setPeriodicity('week')}>Weekly</li>
        <li className={`p-1 ${periodicity === 'month' && 'text-white'}`} onClick={() =>setPeriodicity('month')}>Monthly</li>
      </ul>
    </div>
  );
};

export default Sidebar;
