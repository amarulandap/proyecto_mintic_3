/* eslint-disable react/jsx-no-undef */
import React from "react";

  


function LoginPage() {
  return(
    <>
  

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Iniciar Sesion
          </Button>
        </Form>
      </>
    )
}

export default LoginPage;