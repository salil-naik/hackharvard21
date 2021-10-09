import style from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export const Sidebar = (props) => {
  const changeTheme = (e) => {
    if (e.target.checked) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

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
