import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FirstLoading.scss";
import loading_bg from '../../assets/images/errorpage.jpg'

function Loading() {
  const navigate = useNavigate();
  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/tour");
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
  }, [navigate]);
  return (
    <div className="FirstLoading_wrapper">

      <img src={loading_bg} alt="" />
      {/* Loader 1 */}
      {/* <span className="loader"></span> */}

      {/* Loader 2 */}
      <div className="dot-spinner">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </div>
  );
}

export default Loading;
