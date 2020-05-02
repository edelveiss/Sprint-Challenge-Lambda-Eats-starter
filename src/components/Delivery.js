import React from "react";
import homeImg from "../assests/main-pizza.jpg";
//import shopsInfo from "./shops";
import {
  Container,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  CardImg,
  CardSubtitle,
  Button,
} from "reactstrap";

function Delivery(props) {
  return (
    <div>
      <div className="home-wrapper">
        <img className="home-image" src={homeImg} alt="" />
      </div>
      <Container
        style={{ margin: "0 auto", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Row>
          {props.shopInfo.map((element, index) => (
            <Col xs="6" md="4" xl="4" key={index}>
              <Card
                style={{
                  margin: "1rem",
                  border: "3px solid #fec02f",
                  width: "22rem",
                }}
              >
                <CardImg
                  style={{ height: "250px" }}
                  src={element.image}
                  alt={`Photo of ${element.shopName}`}
                />
                <CardBody>
                  <CardTitle
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bolder",
                      borderBottom: "2px solid grey",
                    }}
                  >
                    {element.shopName}
                  </CardTitle>
                  <CardSubtitle>{element.shopDesc}</CardSubtitle>

                  <CardText>
                    <button style={{ marginRight: "1rem" }}>
                      {element.timeDelivery}
                    </button>
                    <button>${element.deliveryFee}</button>
                    <span> Delivery Fee</span>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default Delivery;
