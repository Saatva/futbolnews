import React, { FunctionComponent } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import { Logo } from "./Logo";
import { CartIcon } from "./CartIcon";
import "./Header.css";

export const Header: FunctionComponent = () => {
  return (
    <div className="header-wrapper">
      <Container>
        <Navbar className="navbar" expand="xl">
          <Navbar.Brand href="#">
            <Logo />
          </Navbar.Brand>
          <CartIcon />
        </Navbar>
      </Container>
    </div>
  );
};
