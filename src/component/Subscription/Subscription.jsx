import React, { useState, useEffect } from "react";
import { GrRadialSelected } from "react-icons/gr";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiCircle, BiRadioCircleMarked } from "react-icons/bi";
import "./Subscription.css";

export default function Plan({
  selected,
  isRecommended,
  totalPrice,
  monthlyPrice,
  content,
  isExpired,
  handleSelect,
  id,
}) {
  return (
    <div
      className="planContainer"
      style={{
        background: (isExpired && "#E7E7E7") || (selected && "#D7EDDD"),
        border: selected && "2px solid #47BA68",
        color: isExpired ? "#BEBEBE" : "#3C4852",
      }}
      onClick={() => {
        if (isExpired) return;
        handleSelect(id);
      }}
    >
      <div className="left">
        <div className="button">
          {(isExpired && (
            <BiRadioCircleMarked fontSize={32} color="#BEBEBE" />
          )) ||
            (selected ? (
              <AiFillCheckCircle fontSize={32} color="#47BA68" />
            ) : (
              <BiCircle fontSize={32} color="#BEBEBE" />
            ))}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="right">
        <div className="totalPrice">
          Total{" "}
          <span
            className="totalPriceText"
            style={{ color: isExpired && "#BEBEBE" }}
          >
            ₹{totalPrice}
          </span>
        </div>
        <div className="monthlyPrice">
          <span
            className="monthlyPriceText"
            style={{ color: isExpired && "#BEBEBE" }}
          >
            ₹{monthlyPrice}
          </span>
          /mo
        </div>
      </div>
      <div
        className="popover"
        style={{ background: isRecommended && "#47BA68" }}
      >
        {isRecommended && "Recommended"}
        {isExpired && "Expired"}
      </div>
    </div>
  );
}
