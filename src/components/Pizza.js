import React, { useState } from "react";
import Toppings from "./Toppings";
import pizzaorder from "../assests/pizzaorder.png";
import ModalForm from "./ModalForm";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import {
  useParams,
  Route,
  Link,
  NavLink,
  Switch,
  useRouteMatch,
} from "react-router-dom";

function Pizza(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [instruction, setInstruction] = useState({ instructions: "" });

  const selectHandleChanges = (event) => {
    console.log("Edit event ", event.target.value);
    if (event.target.value === "1") {
      props.setSum(props.sum + 6.99);
      props.setOrderList([...props.orderList, "Small Pizza"]);
    } else if (event.target.value === "2") {
      props.setSum(props.sum + 8.99);
      props.setOrderList([...props.orderList, "Medium Pizza"]);
    } else {
      props.setSum(props.sum + 10.99);
      props.setOrderList([...props.orderList, "Large Pizza"]);
    }
    //setTeamMem({ ...teamMem, [event.target.name]: event.target.value });
  };

  const checkHandleChanges = (event) => {
    if (event.target.type === "radio") {
      //console.log("radio", event.target.value);
      props.setOrderList([...props.orderList, event.target.value]);
    } else if (
      event.target.type === "checkbox" &&
      event.target.checked &&
      event.target.name !== "substitute"
    ) {
      props.setSum(props.sum + 0.5);
      props.setOrderList([...props.orderList, event.target.name]);
    } else {
      props.setSum(props.sum + 10);
      props.setOrderList([...props.orderList, "Gluten Free Crust"]);
    }
  };
  const instructionHandler = (event) => {
    setInstruction({ ...instruction, [event.target.name]: event.target.value });
    console.log("instruction", instruction);
  };
  const subButton = () => {
    props.setOrderList([...props.orderList, instruction]);
    props.setOrderList([
      ...props.orderList,
      `Sum of Order: ${props.sum.toFixed(2)}`,
    ]);
  };

  console.log("orderList", props.orderList);

  return (
    <div>
      <Card className="card">
        <CardImg top width="10%" src={pizzaorder} alt="pizza" />
        <CardBody
          style={{ width: "100%", paddingLeft: "0rem", paddingRight: "0rem" }}
        >
          <Form>
            <CardTitle
              style={{ fontSize: "1.6rem", color: "red", fontWeight: "bolder" }}
            >
              Build Your Own Pizza
            </CardTitle>

            <FormGroup className="formgroup">
              <Label for="size" className="choice">
                <h4>Choice of Size</h4>
                <h6>Required</h6>
              </Label>
              <select
                style={{
                  marginLeft: "2rem",
                  height: "3rem",
                  marginTop: "0.5rem",
                }}
                type="select"
                required
                name="size"
                id="size"
                onChange={selectHandleChanges}
              >
                <option value="">Select</option>
                <option value="1">
                  Small Pizza: 8-10 inches with 6 slices $6.99
                </option>
                <option value="2">
                  Medium Pizza: 12 inches with 8 slices $8.99
                </option>
                <option value="3">
                  Large Pizza: 14 inch with 10 slices $10.99
                </option>
              </select>
            </FormGroup>

            {/***************Choice of Souce */}
            <FormGroup className="formgroup">
              <div className="choice">
                <h4>Choice of Sauce</h4>
                <h6>Required</h6>
              </div>
              <div style={{ marginLeft: "2rem" }}>
                <div>
                  <input
                    type="radio"
                    id="original"
                    name="sauce"
                    value="Original Red"
                    onChange={checkHandleChanges}
                  ></input>
                  <label
                    htmlFor="original"
                    style={{ marginLeft: "1.1rem", paddingTop: "0.5rem" }}
                  >
                    Original Red
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="garlic"
                    name="sauce"
                    value="Garlic Ranch"
                    onChange={checkHandleChanges}
                  ></input>
                  <label htmlFor="garlic" style={{ marginLeft: "1.1rem" }}>
                    Garlic Ranch
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="bbq"
                    name="sauce"
                    value="BBQ Sauce"
                    onChange={checkHandleChanges}
                  ></input>
                  <label htmlFor="bbq" style={{ marginLeft: "1.1rem" }}>
                    BBQ Sauce
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="spinach"
                    name="sauce"
                    value="Spinach Alfredo"
                    onChange={checkHandleChanges}
                  ></input>
                  <label htmlFor="spinach" style={{ marginLeft: "1.1rem" }}>
                    Spinach Alfredo
                  </label>
                </div>
              </div>
            </FormGroup>

            {/***********Add Toppings*****************/}
            <FormGroup className="formgroup">
              <div className="choice">
                <h4>Add Toppings</h4>
                <h6>Choose any toppings, each costs additional $.50</h6>
              </div>
              <div className="toppings">
                <div className="toppings1">
                  <Toppings
                    checkId="pepperoni"
                    name="Pepperoni"
                    checkLabel="pepperoni"
                    labelText="Pepperoni"
                    checkHandleChanges={checkHandleChanges}
                  />

                  <Toppings
                    checkId="sausage"
                    name="Sausage"
                    checkLabel="sausage"
                    labelText="Sausage"
                    checkHandleChanges={checkHandleChanges}
                  />

                  <Toppings
                    checkId="canadian"
                    name="Canadian Bacon"
                    checkLabel="canadian"
                    labelText="Canadian Bacon"
                    checkHandleChanges={checkHandleChanges}
                  />

                  <Toppings
                    checkId="italian"
                    name="Spicy Italian Sausage"
                    checkLabel="italian"
                    labelText="Spicy Italian Sausage"
                    checkHandleChanges={checkHandleChanges}
                  />
                </div>

                <div className="toppings1">
                  <Toppings
                    checkId="tomato"
                    name="Diced Tomatos"
                    checkLabel="tomato"
                    labelText="Diced Tomatos"
                    checkHandleChanges={checkHandleChanges}
                  />

                  <Toppings
                    checkId="olives"
                    name="Black Olives"
                    checkLabel="olives"
                    labelText="Black Olives"
                    checkHandleChanges={checkHandleChanges}
                  />

                  <Toppings
                    checkId="extra"
                    name="Extra Cheese"
                    checkLabel="extra"
                    labelText="Extra Cheese"
                    checkHandleChanges={checkHandleChanges}
                  />

                  <Toppings
                    checkId="roastg"
                    name="Roasted Garlic"
                    checkLabel="roastg"
                    labelText="Roasted Garlic"
                    checkHandleChanges={checkHandleChanges}
                  />
                </div>
              </div>
            </FormGroup>

            {/**************Choice of Substitute */}

            <FormGroup className="formgroup">
              <div className="choice">
                <h4>Choice of Substitute</h4>
                <h6>Choose up to 1</h6>
              </div>
              <div className="toppings1">
                <Toppings
                  checkId="substitute"
                  name="substitute"
                  checkLabel="substitute"
                  labelText="Gluten Free Crust(+$10)"
                  checkHandleChanges={checkHandleChanges}
                />
              </div>
            </FormGroup>

            <FormGroup
              className="formgroup"
              style={{ borderBottom: "2px solid #FEC02F" }}
            >
              <div className="choice">
                <h4>Special Instructions</h4>
              </div>
              <div>
                <label
                  htmlFor="instructions"
                  style={{
                    width: "100%",
                    paddingLeft: "2rem",
                  }}
                >
                  <textarea
                    style={{
                      width: "95%",
                      paddingLeft: "2rem",
                      marginTop: "1rem",
                    }}
                    onChange={instructionHandler}
                    id="instructions"
                    name="instructions"
                    placeholder="Anything else you'd like to add?"
                  ></textarea>
                </label>
              </div>
            </FormGroup>

            <h3 style={{ textAlign: "end", marginRight: "1rem", color: "red" }}>
              Sum of Order <span>${props.sum.toFixed(2)}</span>
            </h3>
            <div>
              <Button
                id="addressBtn"
                onClick={toggle}
                color="danger"
                style={{ color: "white" }}
              >
                Enter your address information
              </Button>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <Link className="text-link" to="/pizza/order">
                <Button
                  id="submitBtn"
                  onClick={subButton}
                  color="info"
                  style={{ color: "white" }}
                >
                  Submit
                </Button>
              </Link>
            </div>
            <ModalForm isOpen={modal} toggle={toggle} pizzaProps={props} />
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}
export default Pizza;
