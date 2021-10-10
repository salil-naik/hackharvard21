import style from "./product.module.scss";

export const CartProduct = ({ product, onRemove }) => {
  const { name, price, discount, image } = product;
  return (
    <div className={style.card}>
      <img src={image} alt={name} />
      <div className="cart-product__info">
        <h3>{name}</h3>
        <p>
          ${(price - price * discount/100).toFixed(2)}
        </p>
      </div>
      <button onClick={() => onRemove(product)}>x</button>
    </div>
  );
};
