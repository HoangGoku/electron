import React from "react";
import "./Plan.scss";
import Menu from "../../components/Menu/Menu";

const Plan = () => {
  function handleContextMenu(event) {
    event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
  }
  return (
    <div className="Plan_wrapper" onContextMenu={handleContextMenu}>
      <Menu />
      <iframe
          src="http://127.0.0.1:5678/page2/index.html"
          width="100%"
          height="100%"
        />
    </div>
  );
};

export default Plan;
