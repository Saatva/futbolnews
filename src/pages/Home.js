import React from 'react';
import { useMattressesContext } from '../context/mattressesContext';
import Button from './../components/button/Button';
import StarRatings from 'react-star-ratings';

const Home = () => {
    const {
        products, 
        active, 
        selectedProduct,
        onAddProduct,
        setActiveProduct
    } = useMattressesContext();
    const reviewRating = Math.round(selectedProduct.reviewRating);

    const getImage = () => {
        const imageName = selectedProduct !== undefined ? selectedProduct.imageFileName : 'classic-carousel.jpg';

        return <img src={require(`./../images/${imageName}`).default} alt="product"/>
    }

    return (
        <div className="row">
            <div className="col-lg-8">
                <section className="container-image">
                { getImage() }
                </section>
            </div>
            <div className="col-lg-4">
                <aside className="aside-home">
                    <h1>Choose Your Mattress</h1>
                    <p className="letter-spacing">SELECT MATTRESS TYPE</p>
                    <div className="btn-group btn-group-md container-type-buttons" data-toggle="button" role="group" aria-label="Button type">
                        {
                            products.length ?
                            products.map((item, index) => (
                                <Button
                                    key={index}
                                    item={item}
                                    index={index}
                                    active={active}
                                    setActiveProduct={setActiveProduct}
                                />
                            ))
                            : <></>
                        }
                    </div>
                    <div className="container-price">
                        { selectedProduct && <p>{selectedProduct.name} Mattress</p> }
                        { selectedProduct && <p>${selectedProduct.price.toFixed(2)}</p> }
                    </div>
                    <div className="d-flex container-rating">
                        <p>Rating:</p>
                        <StarRatings
                            rating={reviewRating}
                            starRatedColor="#c19679"
                            starDimension="20px"
                            starSpacing="2px"
                            name="rating"
                        />
                    </div>
                    <button onClick={() => onAddProduct(selectedProduct)} className="btn btn-add">
                        Add to Cart
                    </button>
                </aside>
            </div>
        </div>
    );
}

export default Home;
