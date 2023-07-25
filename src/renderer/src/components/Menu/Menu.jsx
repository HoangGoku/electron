import React, { useEffect, useState } from "react";
import "./Menu.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useTSCContext } from "../../context/Context";
import { handleVisibleGuideModal } from "../../reducer/action";

import Logo_menu from "../../assets/logo/TSC_logo.png";
import tour_icon from "../../assets/icons/tour_icon.png";
import tour_icon_hover from "../../assets/icons/tour_icon_hover.png";
import plan_icon from "../../assets/icons/plan_icon.png";
import plan_icon_hover from "../../assets/icons/plan_icon_hover.png";
import util_icon from "../../assets/icons/util_icon.png";
import util_icon_hover from "../../assets/icons/util_icon_hover.png";

const Menu = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [activemenu, setActiveMenu] = useState(0);
  const location = useLocation();
  const { state, dispatch } = useTSCContext();

  useEffect(() => {
    if (location.pathname === "/tour") {
      setActiveMenu(1);
    } else if (location.pathname === "/plan") {
      setActiveMenu(2);
    } else if (location.pathname === "/utils") {
      setActiveMenu(3);
    } 
  }, [location]);

  const datamenu = [
    {
      id: 1,
      text: "TOÀN CẢNH 360",
      icon: tour_icon,
      iconhover: tour_icon_hover,
      link: "/tour",
      hover: hover1,
      setHover: setHover1,
    },
    {
      id: 2,
      text: "MẶT BẰNG",
      icon: plan_icon,
      iconhover: plan_icon_hover,
      link: "/plan",
      hover: hover2,
      setHover: setHover2,
    },
    {
      id: 3,
      text: "TIỆN ÍCH",
      icon: util_icon,
      iconhover: util_icon_hover,
      link: "/utils",
      hover: hover3,
      setHover: setHover3,
    },
  ];

  return (
    <div className="Menu_wrapper">
      <Outlet />
      <div className="menu-img-box">
        {/* <img src={menu_bg} alt="Loading" /> */}
      </div>
      <div
        className="menu-logo"
        onClick={() => dispatch(handleVisibleGuideModal())}
      >
        <img src={Logo_menu} alt="Logo" />
      </div>
      <div className="menu-list">
        {datamenu.map((item, key) => {
          return (
            <li
              onMouseOver={() => {
                item.setHover(true);
              }}
              onMouseLeave={() => {
                item.setHover(false);
              }}
              onClick={() => {
                setActiveMenu(item.id);
              }}
              key={key}
              className={
                activemenu === item.id ? `menu-item active` : `menu-item`
              }
            >
              <Link className="menu-link" to={item.link}>
                {item.hover || activemenu === item.id ? (
                  <img src={item.iconhover} alt="Icon" />
                ) : (
                  <img src={item.icon} alt="Icon" />
                )}
                <h1
                  style={{ marginLeft: "15px" }}
                  className={
                    activemenu === item.id ? "menu-text-active" : "menu-text"
                  }
                >
                  {item.text}
                </h1>
              </Link>
              <div className="menu-border"></div>
              {/* <div className="line"></div>  */}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
