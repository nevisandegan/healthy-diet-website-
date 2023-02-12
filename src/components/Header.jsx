import { Link } from "react-router-dom";
import "../App.css";
import classNames from "classnames";
import { useState } from "react";

const Header = ({ handleClickScroll ,isVisible}) => {
  const [check, setCheck] = useState(false);
  const menu = classNames("header",{"sticky":!isVisible}, { "nav-open": check });

  const ocmenu = () => {
    setCheck((p) => !p);
  };

  return (
    <>
      <header className={menu}>
        <button className="btn-mobile-nav" onClick={ocmenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#333"
            viewBox="0 0 256 256"
            className="qq"
            name="menu-"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="128"
              r="24"
              fill="none"
              stroke="#333"
              strokeMiterlimit="10"
              strokeWidth="16"
            ></circle>
            <circle
              cx="48"
              cy="128"
              r="24"
              fill="none"
              stroke="#333"
              strokeMiterlimit="10"
              strokeWidth="16"
            ></circle>
            <circle
              cx="208"
              cy="128"
              r="24"
              fill="none"
              stroke="#333"
              strokeMiterlimit="10"
              strokeWidth="16"
            ></circle>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="#333"
            viewBox="0 0 256 256"
            name="close-"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="200"
              y1="56"
              x2="56"
              y2="200"
              stroke="#333"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="200"
              y1="200"
              x2="56"
              y2="56"
              stroke="#333"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
        </button>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <Link
                className="main-nav-link nav-cta"
                to={"#"}
                onClick={() => handleClickScroll("how")}
              >
                چگونه کار می کند
              </Link>
            </li>
            <li>
              <Link
                className="main-nav-link"
                to={"#"}
                onClick={() => handleClickScroll("meals")}
              >
                وعده های غذایی
              </Link>
            </li>
            <li>
              <Link
                className="main-nav-link"
                to={"#"}
                onClick={() => handleClickScroll("comments")}
              >
                آلبوم و نظرات
              </Link>
            </li>
            <li>
              <Link
                className="main-nav-link"
                to={"#"}
                onClick={() => handleClickScroll("price")}
              >
                قیمت ها
              </Link>
            </li>
            <li>
              <Link
                className="main-nav-link"
                to={"#"}
                onClick={() => handleClickScroll("cta")}
              >
                رایگان امتحان کنید
              </Link>
            </li>
          </ul>
        </nav>

        <Link to={"#"}>
          <img
            className="logo"
            alt="healthy-diet"
            src={require(".././img/logo/logo3.jpeg")}
          />
        </Link>
      </header>
    </>
  );
};

export default Header;
