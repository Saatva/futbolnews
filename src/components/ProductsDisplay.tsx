import React, { FunctionComponent, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useProducts } from "../lib/Products";
import { useCart } from "../lib/Cart";
import { RadioButtonGroup } from "./RadioButtonGroup";
import Rating from "@material-ui/lab/Rating";
import "./ProductsDisplay.css";
import Box from "@material-ui/core/Box";

export const ProductsDisplay: FunctionComponent = () => {
  const { addItem } = useCart();
  const { mattresses } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(
    Object.keys(mattresses)[0]
  );

  const { name, price, reviewRating, imageFileName } =
    mattresses[selectedProduct];
  console.log(reviewRating);
  return (
    <Container className="product-display-container">
      <Row>
        <Col xs={12} md={6} lg={7} className="product-display-image-col">
          <Image src={`img/${imageFileName}`} fluid alt={`${name} Mattress`} />
        </Col>
        <Col>
          <h1 className="product-display-title">Choose Your Mattress</h1>

          <fieldset>
            <legend className="mattress-type-select-title">
              Select Mattress Type
            </legend>
            <RadioButtonGroup
              name="mattress-type-select"
              options={Object.entries(mattresses).map((entry) => {
                return { label: entry[1].name, value: entry[0] };
              })}
              selectedOption={selectedProduct}
              onChange={(option) => setSelectedProduct(option.value)}
            />
          </fieldset>
          <div className="product-detail">
            <span className="product-detail-name">{`${name} Mattress`}</span>
            <span className="product-detail-price">
              {`$${new Intl.NumberFormat().format(price)}`}
            </span>
          </div>
          <div className="product-rating">
            <Rating
              value={reviewRating}
              precision={0.1}
              getLabelText={() => `(${reviewRating})`}
              size="small"
              readOnly
            />
            <Box ml={1}>({reviewRating})</Box>
          </div>

          <button className="add-to-cart-btn" onClick={() => addItem(name)}>
            Add to Cart
          </button>
        </Col>
      </Row>
    </Container>
  );
};
