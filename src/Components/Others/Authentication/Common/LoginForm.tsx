import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn, SignInAccount } from "@/Constants";
import { LoginFormProp } from "@/Types/Others";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import CommonLogo from "./CommonLogo";
import SocialLinks from "./SocialLinks";

export default function LoginForm({ logoClass }: LoginFormProp) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggle = () => setPasswordVisible(!isPasswordVisible);
  const [formData, setFormData] = useState({ email: "", password: "", checkbox1: false });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ email: "", password: "", checkbox1: false });
  };
  return (
    <div>
      <div>
        <CommonLogo logoClass={logoClass} />
      </div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={handleSubmit}>
          <h2>{SignInAccount}</h2>
          <p className="f-m-light mt-1">{"Enter your email & password to login"}</p>
          <FormGroup className="form-group">
            <Col>
              <Label className="col-form-label mb-0">{EmailAddress}</Label>
            </Col>
            <Input type="email" required placeholder="Test@gmail.com" id="email" value={formData.email} onChange={handleInputChange} />
          </FormGroup>
          <FormGroup className="form-group">
            <Col>
              <Label>{Password}</Label>
            </Col>
            <div className="form-input position-relative">
              <Input type={isPasswordVisible ? "text" : "password"} name="login[password]" required placeholder="*********" id="password" value={formData.password} onChange={handleInputChange} />
              <div className="show-hide" onClick={toggle}>
                <span className={!isPasswordVisible ? "show" : ""}></span>
              </div>
            </div>
          </FormGroup>
          <div className="mb-0 form-group">
            <div className="checkbox p-0">
              <Input id="checkbox1" type="checkbox" checked={formData.checkbox1} onChange={handleInputChange} />
              <Label className="text-muted" htmlFor="checkbox1">
                {RememberPassword}
              </Label>
            </div>
            <Link className="link" href={`${process.env.PUBLIC_URL}/auth/forget-password`}>
              {ForgotPassword}
            </Link>
            <div className="text-end mt-3">
              <Button color="primary" block className="w-100">
                {SignIn}
              </Button>
            </div>
          </div>
          <SocialLinks />
        </Form>
      </div>
    </div>
  );
}
