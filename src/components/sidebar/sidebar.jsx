import style from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee  } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

export const Sidebar = (props) => {
  const checkboxRef = useRef(null);

  const changeTheme = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("dark-theme", true);
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("dark-theme", false);
    }
  };

  useEffect(()=>{
    if(localStorage.getItem("dark-theme") === "true"){
      document.body.classList.add("dark-theme");
      checkboxRef.current.checked = true;
    }
  }, []);

  return (
    <aside className={style.sidebar}>
      <div className={style.sidebar__header}>
        <div className={style.sidebar__header__logo}>
          <img src={props.logo} alt="logo" />
        </div>
        <p className={style.sidebar__header__name}>eBezos</p>
      </div>

      <div className={style.sidebar__content}>
        <div>
          <h4 className={style.sidebar__content__title}>{props.title}</h4>
          <ul className={style.sidebar__content__list}>
            {props.listItem.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${style.sidebar__item} ${
                    item == props.activeItem ? style.active : ""
                  }`}
                  onClick={() => props.setActiveItem(item)}
                >
                  <FontAwesomeIcon icon={faCoffee} className={style.icon} />
                  {/* <FontAwesomeIcon icon="fa-solid fa-shirt" /> */}
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.sidebar__content__footer}>
          <div
            className={style.sidebar__content__footer__theme}
          >
            <span>Dark theme</span>
            <span className={style.chekboxContainer}>
              <input
                type="checkbox"
                id="style-mode"
                className={style.checkbox}
                onChange={changeTheme}
                ref={checkboxRef}
              />
              <label htmlFor="style-mode" className={style.checkboxLabel}>
                &nbsp;
              </label>
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};
