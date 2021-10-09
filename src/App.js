import "./styles/_global.scss";
import logo from "./assets/logo.svg";

// components
import { Sidebar } from "./components/sidebar/index";
import { Product } from "./components/product/index";

// temporary data
import * as data from "./data/products.json";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(data.default.items);
  }, []);

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
        activeItem="fashion"
      />
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="row">
                {products &&
                  products.map((product) => {
                    return(
                    <div className="col-md-4" key={product.id}>
                      <Product product={product} />;
                    </div>
                    )
                  })}
              </div>
            </div>
            <div className="col-sm-3">column 4</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
