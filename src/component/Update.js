import { useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../Constants/URL";
import {  useNavigate } from "react-router-dom";
function Update() {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [checked, SetChecked] = useState(false);
  const [id, setId] = useState("");
  const navigate= useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    SetFirstName(localStorage.getItem("firstname"));
    SetLastName(localStorage.getItem("lastname"));
    SetChecked(localStorage.getItem("checked"));
  }, []);
  const updateUser = async () => {
    await axios.put(API_URL + id, {
      firstName,           
      lastName,
      checked,
    });
    navigate('/read');
  };

  return (
    <div>
      <h2>Update Operation</h2>
      <Form className="form">
        <Form.Field>
          <label>Firstname</label>
          <input
            value={firstName}
            onChange={(event) => SetFirstName(event.target.value)}
            placeholder="Enter the First name"
          ></input>
        </Form.Field>
        <br />
        <Form.Field>
          <label>Lastname</label>
          <input
            value={lastName}
            onChange={(event) => SetLastName(event.target.value)}
            placeholder="Enter the Last name"
          ></input>
        </Form.Field>
        <br />
        <Form.Field>
          <Checkbox
            checked={checked}
            onChange={() => SetChecked(!checked)}
            label="Agree the Terms & Conditions"
          />
        </Form.Field>
        <br />
        <Button onClick={updateUser}>Update</Button>
      </Form>
    </div>
  );
}

export default Update;
