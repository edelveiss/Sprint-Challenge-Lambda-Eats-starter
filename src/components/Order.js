import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function Order(props) {
  return (
    <div>
      <Card className="card" style={{ width: "30rem" }}>
        <CardImg
          top
          width="10%"
          src="https://media.giphy.com/media/5Ynni4pZUNrfJA1Rob/giphy.gif"
          alt="dog and pizza"
        />
        <CardBody
          style={{ width: "100%", paddingLeft: "0rem", paddingRight: "0rem" }}
        >
          <CardTitle
            style={{ fontSize: "1.6rem", color: "red", fontWeight: "bolder" }}
          >
            Congrats! Pizza is on its way!
          </CardTitle>

          <CardText>First Name: {props.currentUser.firstName}</CardText>
          <CardText>Last Name: {props.currentUser.lastName}</CardText>
          <CardText>Location: {props.currentUser.location}</CardText>
          <CardText style={{ borderBottom: "1px solid grey" }}>
            Email: {props.currentUser.email}
          </CardText>

          <CardSubtitle>Here is your order:</CardSubtitle>
          {props.orderList.map((el, index) => (
            <CardText key={index}>{el}</CardText>
          ))}
        </CardBody>
        <pre>{JSON.stringify(props.post, null, 2)}</pre>
      </Card>
    </div>
  );
}
export default Order;
