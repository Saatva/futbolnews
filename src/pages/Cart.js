import React from 'react';
import { Link } from 'react-router-dom';
import Loader from "react-loader-spinner";
import Product from '../components/product/Product';
import { useMattressesContext } from '../context/mattressesContext';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Cart = () => {
    const { cart, total, count, onCheckoutOrder, showLoader, success, setSuccess } = useMattressesContext();

    const showInfo = () => {
        return(
            <div className="alert alert-success success-container" role="alert">
                <div className="d-flex justify-content-between">
                    <h3>Your order has been checkout!</h3>
                    <button className="btn" onClick={() => setSuccess(false)}><span aria-hidden="true">&times;</span></button>
                </div>
                <Link onClick={() => setSuccess(false)} to="/">
                    Go to the home
                </Link>
            </div>
        );
    }

    return (
        <div className="row">
        {
            showLoader ?
                <div className="d-flex loader-container">
                    <Loader
                        className="loader"
                        type="TailSpin"
                        color="#c19679"
                        height={100}
                        width={100}
                        timeout={3000} //5 secs
                    />
                </div>
                :
                <>
                    <div className="col-lg-8">
                        {
                            success && showInfo()
                        }
                        <section className="product-list">
                            <ul>
                                {
                                    cart.length > 0 ?
                                        cart.map((product, index) => (
                                            <Product key={index} product={product}/>
                                        ))
                                        : <h3>No items added</h3>
                                }
                            </ul>
                            <div className="sub-total-container d-flex align-items-end">
                                <span className="ml-auto">Total ({count} products): <strong>US ${total.toFixed(2)}</strong></span>
                            </div>
                        </section>
                    </div>
                    <div className="col-lg-4">
                        <aside>
                            Total ({count} products): <strong>US ${total.toFixed(2)}</strong>
                            {
                                count > 0 &&
                                    <button onClick={() => onCheckoutOrder()} className="btn btn-add">
                                        Proceed to checkout
                                    </button>
                            }
                        </aside>
                    </div>
                </>
        }
        </div>
    );
}

export default Cart;
