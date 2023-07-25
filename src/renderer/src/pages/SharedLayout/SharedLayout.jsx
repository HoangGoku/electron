import React from "react";
import { Outlet } from "react-router-dom";
import Guide from "../../components/Guide/Guide";
import Menu from "../../components/Menu/Menu";

const SharedLayout = () => {
  function handleContextMenu(event) {
    event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
  }
  return (
    <div onContextMenu={handleContextMenu}>
      <Outlet />
      <Guide />
      
      {/* <div
        style={{
          zIndex: 1,
          position: "fixed",
          top: 10,
          right: 10,
        }}
        className="SharedLayout_glt_logo"
      > */}
        {/* <img src={TSC_logo} alt="TSC_logo" /> */}
      {/* </div> */}
    </div>
  );
};

export default SharedLayout;
