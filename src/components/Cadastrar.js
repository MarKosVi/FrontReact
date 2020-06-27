import React, { useState } from "react";
import { Container } from "./styled-components";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./cadastro.css";

export default function Cadastrar(){
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");
    const [municipio, setMunicipio] = useState("");

    function validateForm(){
        return email.length > 0 && nome.length > 0 && password.length > 0 && municipio.length > 0;
    }

    function handleSubmit(event){
        console.log(this.state.nome);
        event.preventDefault();
    }

    return(

      <Container className="container">
      <Container className="row">
            <Container className="col-md-12 mb-5">
              <Container className="card w-50 mx-auto is-card-dark chart-card rounded pt-5">
              <h2 className="text-white pl-4">Cadastrar</h2>
              <div className="Signup">
                <form onSubmit={handleSubmit}>
                <FormGroup controlId="nome" bsSize="large">
                    <ControlLabel className="text-white text-large">Nome</ControlLabel>
                    <FormControl
                      autoFocus
                      type="text"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                    />
                  </FormGroup>
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
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup className="mb-5" controlId="municipio" bsSize="large">
                    <ControlLabel className="text-white text-large">Informe seu Municipio</ControlLabel>
                    <FormControl
                      value={municipio}
                      onChange={e => setMunicipio(e.target.value)}
                      type="text"
                    />
                  </FormGroup>
                  <Button className="btn btn-primary font-weight-bold text-large " block bsSize="large" disabled={!validateForm()} type="submit">
                    Cadastrar
                  </Button>
                </form>
              </div>
              </Container>
            </Container>
          </Container>
          </Container>
    );
}