import style from "./product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Product = ({ product, click }) => {
  const { name, price, discount, image } = product;
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);

  const addToCart = () => {
    click(product);
  };

  return (
    <div className={style.card}>
      <button className={style.addToCart} onClick={addToCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
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
