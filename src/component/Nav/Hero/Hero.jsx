import React, { useState, useEffect } from "react";
import "./Hero.css";
import Background from "../../../image/Background.png";
import Book from "../../../image/Book.png";
import Scholarship from "../../../image/Scholarship.png";

import Clock from "../../../image/Clock.png";

import live from "../../../image/live.png";
import Ads from "../../../image/Ads.png";
import Icon1 from "../../../image/Icon1.png";
import Icon2 from "../../../image/Icon2.png";
import Vector from "../../../image/Vector.png";
import Razor from "../../../image/razor.png";

import Subscription from "../../Subscription/Subscription";

const PLAN_DATA = [
  {
    id: 0,
    content: "12 Months Subscription",
    totalPrice: 99,
    monthlyPrice: 8,
    isExpired: true,
  },
  {
    id: 1,
    content: "12 Months Subscription",
    totalPrice: 179,
    monthlyPrice: 15,
    isRecommended: true,
  },
  {
    id: 2,
    content: "6 Months Subscription",
    totalPrice: 149,
    monthlyPrice: 25,
  },
  {
    id: 3,
    content: "3 Months Subscription",
    totalPrice: 99,
    monthlyPrice: 33,
  },
];

const Hero = () => {
  const [selected, setSelected] = useState(1);
  const [plans, setPlans] = useState(PLAN_DATA);
  const [currentPlan, setCurrentPlan] = useState({});

  useEffect(() => {
    const curr = plans.filter((plan) => plan.id === selected);
    setCurrentPlan(curr[0]);
  }, [selected]);

  const handleSelect = (id) => {
    setSelected(id);
  };
  const formatPrice = () => {
    const currentPrice = currentPlan.totalPrice;
    const totalPrice = 18500 - currentPrice;
    const formattedPrice = addCommasToNumber(totalPrice);

    return formattedPrice;
  };

  const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      <div className="left-container">
        <img src={Background} />

        <div className="heading">
          Access curated courses worth ₹
          <span className="red-line"> 18,500</span> at just{" "}
          <span className="head-span">₹ 99</span> per year!
        </div>
        <div className="list-container">
          <div className="book">
            <div className="icon">
              <img src={Book} />
            </div>
            <div className="para">
              <span>100+</span> Job relevant courses
            </div>
          </div>
          <div className="book">
            <div className="icon">
              <img src={Clock} />
            </div>
            <div className="para">
              <span>20,000+</span> Hours of content
            </div>
          </div>
          <div className="book">
            <div className="icon">
              <img src={live} />
            </div>
            <div className="para">
              <span>Exclusive</span> webinar access
            </div>
          </div>
          <div className="book">
            <div className="icon">
              <img src={Scholarship} />
            </div>
            <div className="para">
              Scholarship worth <span>₹94,500</span>
            </div>
          </div>
          <div className="book">
            <div className="icon">
              <img src={Ads} />
            </div>
            <div className="para">
              <span>Ad Free</span> learning experience
            </div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="signup-btn">
          <div className="signup">
            <img src={Icon1} />
            <div className="text">Sign Up</div>
          </div>
          <div className="signup">
            <img src={Icon2} />
            <div className="text">Subscribe</div>
          </div>
        </div>
        <div className="plan">Select your subcription plan</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
          }}
        >
          {plans.map((plan) => (
            <Subscription
              key={plan.id}
              id={plan.id}
              content={plan.content}
              totalPrice={plan.totalPrice}
              monthlyPrice={plan.monthlyPrice}
              isRecommended={plan.isRecommended}
              isExpired={plan.isExpired}
              selected={plan.id === selected}
              handleSelect={handleSelect}
            />
          ))}
        </div>
        <div className="total-container">
          <div className="left">
            <div className="total-left">Subscription Fee</div>
            <div className="price" style={{ marginRight: "1rem" }}>
              ₹18,500
            </div>
          </div>
          <div className="limited">
            <div className="limited-top">
              <div className="second-box">Limited time offer</div>
              <div className="price">- ₹{formatPrice()}</div>
            </div>
            <div className="limited-bottom">
              <img src={Vector} />
              <span className="offer">Offer valid till 25th March 2023 </span>
            </div>
          </div>
          <div className="gst">
            <div className="gst-para">
              <span
                style={{
                  fontWeight: 600,
                  marginRight: "0.25rem",
                  color: "#3C4852",
                }}
              >
                Total
              </span>
              (Incl. of 18% GST)
            </div>
            <div className="final-amount" style={{ fontWeight: 600 }}>
              ₹{currentPlan.totalPrice}
            </div>
          </div>
        </div>
        <div className="btns">
          <div className="cancel-btn">
            <button>CANCEL</button>
          </div>
          <div className="pay-btn">
            <button>proceed to pay</button>
          </div>
        </div>
        <div style={{ padding: "1rem 1.5rem" }}>
          <img src={Razor} height={48} />
        </div>
      </div>
    </>
  );
};

export default Hero;
