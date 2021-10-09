import style from "./product.module.scss";

export const Product = ({ product }) => {
  const { name, price, discount, image } = product;
  const discountedPrice = price - (price * discount) / 100;
  return (
    <div className={style.card}>
      <img src={image} className={style.card__img} alt="..." />
      <div className={style.card__body}>
        <h5 className={style.card__body__title}>{name}</h5>
        <p className={style.card__body__price}>
          ${discountedPrice || price}{" "}
          <span
            className={style.card__body__price__old}
            style={{ display: discount ? "inline" : "none" }}
          >
            ${price}
          </span>
        </p>
      </div>
    </div>
  );
};
