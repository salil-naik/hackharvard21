import style from "./modal.module.scss";

export const Modal = ({ children, onClose }) => {
  return (
    <div className={style.modal}>
      <div className={style.modal__content}>
        <div className={style.modal__close} onClick={onClose}>
            <span>&times;</span>
        </div>
        {children}
      </div>
    </div>
  );
};
