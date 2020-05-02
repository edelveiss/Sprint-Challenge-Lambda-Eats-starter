import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const formSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(
      2,
      "First Name is a required field, and must be at least 2 characters"
    ),
  lastName: yup
    .string()
    .min(2, "Last Name is a required field, and must be at least 2 characters"),
  email: yup.string().email().required("Must include an email"),
  location: yup.string().min(5, "Needs to be a minimum of 5 characters."),
});
function ModalForm(props) {
  console.log("modalform props", props);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  });

  // state for our errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //const [post, setPost] = useState([]);
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const validateChange = (e) => {
    // Reach will allow us to "reach" into the schema and test only one part.
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors,
        });
      });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        console.log("setPost", res.data);
        props.pizzaProps.setPost(res.data);
        props.pizzaProps.addNewUser(res.data);
        props.pizzaProps.setCurrentUser(res.data);
        // props.pizzaProps.setCurrentUser({
        //   ...props.pizzaProps.currentUser,
        //   [props.pizzaProps.currentUser.orderAmount]: props.pizzaProps.sum,
        // });
        console.log("modal currentUser", props.pizzaProps.currentUser);
        props.toggle();
        console.log("success", props.pizzaProps.post);

        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          location: "",
        });
      })
      .catch((err) => {
        console.log(err.res);
      });
  };
  const inputChange = (e) => {
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    validateChange(e);
    setFormState(newFormData);
  };

  const cancelForm = (event) => {
    event.preventDefault();
    props.toggle();
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      location: "",
    });
  };

  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle}>
      <ModalHeader toggle={props.toggle}>
        Enter Your Information and Submit the Form
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={formSubmit}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              //onChange={props.handleChanges}
              type="textfield"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              value={formState.firstName}
              onChange={inputChange}
              //   defaultValue={props.firstName}
            />
            {errors.firstName.length > 0 ? (
              <p className="error" id="firstNameError">
                {errors.firstName}
              </p>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              // onChange={props.handleChanges}
              type="textfield"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
              value={formState.lastName}
              onChange={inputChange}
              //   defaultValue={props.lastName}
            />
            {errors.lastName.length > 0 ? (
              <p className="error" id="lastNameError">
                {errors.lastName}
              </p>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="location">Location</Label>
            <Input
              // onChange={props.handleChanges}
              type="textfield"
              name="location"
              id="location"
              placeholder="Enter your location"
              value={formState.location}
              onChange={inputChange}
              //   defaultValue={props.location}
            />
            {errors.location.length > 0 ? (
              <p className="error" id="locationError">
                {errors.location}
              </p>
            ) : null}
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={formState.email}
              onChange={inputChange}
            />
            {errors.email.length > 0 ? (
              <p className="error"> {errors.email}</p>
            ) : null}
          </FormGroup>
          {/**  <pre>{JSON.stringify(props.pizzaProps.post, null, 2)}</pre>*/}
          <div className="submitButton">
            <Button
              id="saveInfo"
              color="danger"
              type="submit"
              disabled={buttonDisabled}
            >
              Save
            </Button>

            <Button color="warning" onClick={cancelForm}>
              Cancel
            </Button>
          </div>
        </Form>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
}
export default ModalForm;
