import "./styles/_global.scss";
import logo from "./assets/logo.svg";

// components
import { Sidebar } from "./components/sidebar/index";
import { Product } from "./components/product/index";
import { CartProduct } from "./components/cartProduct/index";

// temporary data
import * as data from "./data/products.json";
import { useState, useEffect } from "react";

function App() {
  const [activeItem, setActiveItem] = useState("mobile");
  const [filteredProducts, setFilteredProducts] = useState();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const filtered = data.default.items.filter(
      (item) => item.category == activeItem
    );
    setFilteredProducts(filtered);
    console.log(filtered);
  }, [activeItem]);

  // useEffect(() => {

  // }, [cart]);

  const discountedPrice = (price, discount) => {
    let newPrice = (price - (price * discount) / 100).toFixed(2);
    return Number(newPrice);
  };
  const addProduct = (item) => {
    if (cart.filter((product) => product == item).length < 1) {
      setCart([...cart, item]);
      setTotal(total + discountedPrice(item.price, item.discount));
    }
  };

  const removeProduct = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
    setTotal(Number(total) - discountedPrice(item.price, item.discount));
  };

  return (
    <div className="App">
      <Sidebar
        logo={logo}
        title="categories"
        listItem={[
          "mobile",
          "fashion",
          "electronics",
          "home",
          "travel",
          "appliances",
        ]}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                {filteredProducts && filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => {
                    return (
                      <div className="col-md-4" key={product.id}>
                        <Product
                          product={product}
                          click={(item) => addProduct(item)}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div style={{ color: "white" }}>no products found</div>
                )}
              </div>
            </div>
            <div className="col-sm-3">
              <h4 className="cart-title">Cart</h4>
              {cart.length > 0 ? (
                cart.map((item) => {
                  return (
                    <CartProduct product={item} onRemove={removeProduct} />
                  );
                })
              ) : (
                <div style={{ color: "white" }}>no products found</div>
              )}

              {cart.length > 0 && (
                <div className="cart-total">
                  <div className="cart-total-item">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
