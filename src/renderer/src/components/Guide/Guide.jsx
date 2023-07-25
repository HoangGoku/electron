import React from "react";
import "./Guide.scss";
import handicon from "../../assets/icons/handicon.png";
import mouseicon from "../../assets/icons/mouseicon.png";
import { useTSCContext } from "../../context/Context";
import { handleInVisibleGuideModal } from "../../reducer/action";

const Guide = () => {
  const { state, dispatch } = useTSCContext();

  return (
    <>
      {state.guide && (
        <div className="guide_wrapper">
          <div
            className="guide_layer"
            onClick={() => {
              dispatch(handleInVisibleGuideModal());
            }}
          ></div>

          <div className="guide_modal">
            <h3>HƯỚNG DẪN THAO TÁC</h3>
            <div className="action">
              <img alt="handicon" className="handicon" src={handicon} />
              <span className="or">hoặc</span>
              <img alt="mouseicon" className="mouseicon" src={mouseicon} />
            </div>
            <p>
              Chạm, di chuyển hoặc click vào từng vị trí tham quan để xem chi
              tiết
            </p>
            <button
              onClick={() => {
                dispatch(handleInVisibleGuideModal());
              }}
              className="btn"
            >
              ĐÃ HIỂU
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Guide;
