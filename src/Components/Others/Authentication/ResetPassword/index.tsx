import { CreateAccount, CreateYourPassword, Done, NewPassword, RememberPassword, RetypePassword } from "@/Constants";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import CommonLogo from "../Common/CommonLogo";

export default function ResetPassword() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggle = () => setPasswordVisible(!isPasswordVisible);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="page-wrapper">
      <Container fluid className="p-0">
        <Row>
          <Col xs={12}>
            <div className="login-card login-dark">
              <div>
                <div>
                  <CommonLogo />
                </div>
                <div className="login-main">
                  <Form className="theme-form" onSubmit={handleSubmit}>
                    <h2>{CreateYourPassword}</h2>
                    <FormGroup>
                      <Col>
                        <Label>{NewPassword}</Label>
                      </Col>
                      <div className="form-input position-relative">
                        <Input type={isPasswordVisible ? "text" : "password"} id="password" name="login[password]" required placeholder="*********" />
                        <div className="show-hide" onClick={toggle}>
                          <span className={!isPasswordVisible ? "show" : ""}></span>
                        </div>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Col>
                        <Label>{RetypePassword}</Label>
                      </Col>
                      <Input type={isPasswordVisible ? "text" : "password"} id="password" name="login[password]" required placeholder="*********" />
                      <div className="show-hide" onClick={toggle}></div>
                    </FormGroup>
                    <FormGroup className="mb-0">
                      <div className="checkbox p-0">
                        <input id="checkbox1" type="checkbox" />
                        <Label className="text-muted" htmlFor="checkbox1">
                          {RememberPassword}
                        </Label>
                      </div>
                      <Button color="primary" className="w-100" block>
                        {Done}
                      </Button>
                    </FormGroup>
                    <p className="mt-4 mb-0">
                      {"Don't have account?"}
                      <Link className="ms-2" href={`${process.env.PUBLIC_URL}/auth/auth/sign-up`}>
                        {CreateAccount}
                      </Link>
                    </p>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
