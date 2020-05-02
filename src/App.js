import React, { useState } from "react";
import { Route, Link, Switch, NavLink } from "react-router-dom";
//import homeImg from "./assests/main-pizza.jpg";
import Delivery from "./components/Delivery";
import Pizza from "./components/Pizza";
import Order from "./components/Order";
import shopsInfo from "./shops";
import "./App.css";
import {
  Collapse,
  Navbar,
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
  const [sum, setSum] = useState(0);
  const [orderList, setOrderList] = useState([]);
  const [post, setPost] = useState([]);

  const [currentUser, setCurrentUser] = useState({
    id: users.length,
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  });
  const addNewUser = (user) => {
    const newUser = {
      id: users.length,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
      orderAmount: 0,
    };
    console.log("addnewuser curuser", newUser);
    setUsers([...users, newUser]);
  };

  console.log("users", users);
  console.log("current", currentUser);
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
          <Link to="/">
            <Button
              className="mr-2"
              color="danger"
              style={{
                color: "white",
              }}
            >
              Home
            </Button>
          </Link>

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
          <Order
            users={users}
            setUsers={setUsers}
            addNewUser={addNewUser}
            setSum={setSum}
            sum={sum}
            orderList={orderList}
            setOrderList={setOrderList}
            currentUser={currentUser}
            post={post}
            setPost={setPost}
          />
        </Route>
        <Route path="/pizza">
          <Pizza
            users={users}
            setUsers={setUsers}
            addNewUser={addNewUser}
            setSum={setSum}
            sum={sum}
            orderList={orderList}
            setOrderList={setOrderList}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            post={post}
            setPost={setPost}
          />
        </Route>

        <Route path="/">
          <Delivery setShopInfo={setShopInfo} shopInfo={shopInfo} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
