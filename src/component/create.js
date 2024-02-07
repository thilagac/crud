import React, { useState } from "react";

import { API_URL } from "../Constants/URL";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
  const [firstName, SetFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [checked, SetChecked] = useState(false);
  const navigate = useNavigate();
  const postdata = async () => {
    await axios.post(API_URL, {
      firstName,
      lastName,
      checked,
    });
    navigate("/read");
  };
  return (
    <div>
      <h2>Create</h2>
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
        <Button onClick={postdata}>Submit</Button>
      </Form>
    </div>
  );
}

export default Create;
