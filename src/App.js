import React, { useState } from "react";
import { Route, Link, Switch, NavLink } from "react-router-dom";
import homeImg from "./assests/main-pizza.jpg";
import Delivery from "./components/Delivery";
import Pizza from "./components/Pizza";
import Order from "./components/Order";
import shopsInfo from "./shops";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const [shopInfo, setShopInfo] = useState(shopsInfo);
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <div>
        <Navbar color="warning" light>
          <NavbarBrand
            href="/"
            className="mr-auto"
            style={{
              color: "red",
              fontSize: "2.5rem",
              fontWeight: "bolder",
              paddingLeft: "3rem",
            }}
          >
            Lambda Eats
          </NavbarBrand>

          <Button
            onClick={toggleNavbar}
            className="mr-2"
            color="danger"
            style={{
              color: "white",
            }}
          >
            Order
          </Button>

          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink
                  onClick={toggleNavbar}
                  to="/pizza"
                  style={{
                    color: "red",
                    fontSize: "2rem",
                    fontWeight: "bolder",
                  }}
                >
                  Order Pizza
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={toggleNavbar}
                  to="/"
                  style={{
                    color: "red",
                    fontSize: "2rem",
                    fontWeight: "bolder",
                  }}
                >
                  Order Fresh Food
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Switch>
        <Route path="/pizza/order">
          <Order />
        </Route>
        <Route path="/pizza">
          <Pizza />
        </Route>

        <Route path="/">
          <Delivery setShopInfo={setShopInfo} shopInfo={shopInfo} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
