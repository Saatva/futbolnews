import { useEffect, useState } from "react";
import "./scss/App.scss";
import local_data from "./mattresses.json";
import Loader from "./components/loader";
import Button from "./components/button";
import CartModal from "./components/cart_modal";
import TypeSelector from "./components/type_selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { priceHelper } from "./helpers/price_helper";

const initialData = [
  { name: "", price: 0, reviewRating: 0, imageFileName: "" },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(initialData);
  const [currentItem, setCurrentItem] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function initializer() {
    const toArr = Object.entries(local_data.mattresses);
    let newArr = [];
    for (let i = 0; i < toArr.length; i++) {
      newArr.push({ id: toArr[i][0], ...toArr[i][1] });
    }
    setData(newArr);
    setTimeout(() => setLoading(false), 300);
  }

  function handleAddCart() {
    const found = cart.findIndex((item) => item.id === data[currentItem].id);

    function count(arr) {
      const total = arr.reduce((acc, curr) => {
        return (acc += curr.quantity);
      }, 0);
      return total;
    }

    if (found !== -1) {
      const newArr = cart.map((item, i) =>
        i === found ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartTotal(count(newArr));
      setCart(newArr);
    } else {
      const item = { quantity: 1, ...data[currentItem] };
      const newArr = [...cart, item];
      setCartTotal(count(newArr));
      setCart(newArr);
    }
  }

  function handleCurrentItem(i) {
    setCurrentItem(i);
  }

  useEffect(() => {
    initializer();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <div>
          <img
            className="logo"
            src={`images/saatva-logo-2.jpeg`}
            alt="saatva logo"
          />
        </div>
        <div
          className={cartTotal !== 0 && "badge"}
          data-count={cartTotal}
          title="cart_count"
          onClick={() => setShowCart(!showCart)}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            color="#A6A19A"
            style={{ fontSize: 25, cursor: "pointer" }}
          />
        </div>
      </header>
      <div className="container" onClick={() => setShowCart(false)}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="media_container">
              <div
                className="image_sizer"
                style={{
                  backgroundImage: `url('images/${data[currentItem].imageFileName}')`,
                }}
              />
            </div>
            <div className="information_container">
              <h1 className="h1">Choose Your Mattress</h1>
              <p className="selection">
                {"select mattress type".toUpperCase()}
              </p>
              <TypeSelector
                options={data}
                selector={handleCurrentItem}
                current={currentItem}
              />
              <div className="details_container">
                <p>{data[currentItem].name}</p>
                <p className="detail_price">
                  {priceHelper(data[currentItem].price)}
                </p>
              </div>
              <div>
                <p className="detail_price fade_animation">
                  {data[currentItem].reviewRating} rating
                </p>
              </div>
              <Button title={"Add to Cart"} increment={handleAddCart} />
            </div>
            <CartModal show={showCart} items={cart} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
