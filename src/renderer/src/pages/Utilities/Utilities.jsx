import React, { useState } from "react";
import "./Utilities.scss";

// Hình tiện ích
import quang_truong_nhac_nuoc from "../../assets/images/tien_ich/quang_truong_nhac_nuoc.jpg";
import be_boi_view_bien from "../../assets/images/tien_ich/be_boi_view_bien.jpg";
import san_khau from "../../assets/images/tien_ich/san_khau.jpg";

// icon
import pool_icon_hover from "../../assets/icons/pool_icon_hover.png";
import pool_icon from "../../assets/icons/pool_icon.png";
import square_icon from "../../assets/icons/square_icon.png";
import square_icon_hover from "../../assets/icons/square_icon_hover.png";
import olympic_square_icon from "../../assets/icons/olympic_square_icon.png";
import olympic_square_icon_hover from "../../assets/icons/olympic_square_icon_hover.png";
import Menu from "../../components/Menu/Menu";

const Utils = () => {
  const [active, setActive] = useState(1);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const data_menu = [
    {
      id: 1,
      text: "Bể bơi căn hộ",
      img: be_boi_view_bien,
      icon: pool_icon,
      icon_hover: pool_icon_hover,
      icon_text: "pool_icon",
      hover: hover1,
      setHover: setHover1,
    },
    {
      id: 2,
      text: "Quảng trường nhạc nước",
      img: quang_truong_nhac_nuoc,
      icon: olympic_square_icon,
      icon_hover: olympic_square_icon_hover,
      icon_text: "olympic_square_icon",
      hover: hover2,
      setHover: setHover2,
    },
    {
      id: 3,
      text: "Sân khấu",
      img: san_khau,
      icon: square_icon,
      icon_hover: square_icon_hover,
      icon_text: "square_icon",
      hover: hover3,
      setHover: setHover3,
    },
  ];

  function handleContextMenu(event) {
    event.preventDefault(); // Ngăn chặn hiển thị menu ngữ cảnh
  }

  return (
    <div className="Utilities_wrapper" onContextMenu={handleContextMenu}>
      <Menu />

      <div className="utils-mode">
        {data_menu.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setActive(item.id);
            }}
            onMouseOver={() => {
              item.setHover(true);
            }}
            onMouseLeave={() => {
              item.setHover(false);
            }}
            className={
              active === item.id ? "utils-mode_btn active" : "utils-mode_btn"
            }
          >
            <div className="btn-content">
              {item.hover || active === item.id ? (
                <img src={item.icon_hover} alt={item.icon_text} />
              ) : (
                <img src={item.icon} alt={item.icon_text} />
              )}
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>

      {data_menu.map((item, index) =>
        active === item.id ? (
          <div key={index} className="img_wrapper">
            <img
              
              className="utils_img"
              src={item.img}
              alt={item.text}
            />
          </div>
        ) : null
      )}
    </div>
  );
};

export default Utils;
