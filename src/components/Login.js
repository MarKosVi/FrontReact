import React, { useState } from "react";
import { Container } from "./styled-components";
import { Link, useHistory  } from "react-router-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

import UserImg from "../assets/images/user.png";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();


    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        history.push("/");
    }

    return(

      <Container className="container">
      <Container className="row">
            <Container className="col-md-12 mb-5">
              <Container className="card w-50 mx-auto is-card-dark chart-card rounded pt-5">
                <Container className="row m-4">
                <Link  to="/cadastrar"> <button className="btn btn-light">Cadastrar</button></Link>
                </Container>
              <img src={UserImg} className="rounded-circle mx-auto" alt="user" />
              <div className="Login">
                <form onSubmit={handleSubmit}>
                  <FormGroup controlId="email" bsSize="large">
                    <ControlLabel className="text-white text-large">Nome</ControlLabel>
                    <FormControl
                      autoFocus
                      type="text"
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
                  <Button className="btn btn-primary font-weight-bold text-large " block bsSize="large" disabled={!validateForm()} type="submit">
                    Entrar
                  </Button>
                </form>
              </div>
              </Container>
            </Container>
          </Container>
          </Container>
    );
}
