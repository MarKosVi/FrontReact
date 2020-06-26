import React, { useState } from "react";
import { Container } from "./styled-components";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

import UserImg from "../assets/images/user.png";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
      
      <Container className="container">
      <Container className="row">
            <Container className="col-md-12 mb-4">
              <Container className="card is-card-dark chart-card rounded p-4">
              <img src={UserImg} className="rounded-circle mx-auto" alt="user" />
              <div className="Login">
                <form onSubmit={handleSubmit}>
                  <FormGroup controlId="email" bsSize="large">
                    <ControlLabel className="text-white text-large">Email</ControlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup controlId="password" bsSize="large">
                    <ControlLabel className="text-white text-large">Password</ControlLabel>
                    <FormControl
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                    />
                  </FormGroup>
                  <Button className="btn btn-primary" block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                  </Button>
                </form>
              </div>
              </Container>
            </Container>
          </Container>
          </Container>
    );
}