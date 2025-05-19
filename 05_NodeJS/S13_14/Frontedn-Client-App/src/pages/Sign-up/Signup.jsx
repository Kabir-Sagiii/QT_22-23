// SignUp.js
import { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
`;

const SignUpContainer = styled(motion.div)`
  width: 100%;
  max-width: 450px;
  background-color: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 25px;
  color: #343a40;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 18px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 18px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const genderRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(emailRef.current.value);
    // console.log(usernameRef.current.value);
    // console.log(passwordRef.current.value);
    // console.log(genderRef.current.value);
    const newuser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      gender: genderRef.current.value,
    };
    axios
      .post("http://localhost:9999/api/users/sign-up", newuser)
      .then((res) => {
        if (res.data.ok) {
          alert("User Created");
          navigate("/");
        } else {
          throw Error("Failed to Create User");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Erorr while creating user");
      });
  };

  return (
    <Wrapper>
      <SignUpContainer
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title>Create Account</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            ref={usernameRef}
            name="username"
            placeholder="Username"
            required
          />
          <Input
            type="email"
            ref={emailRef}
            name="email"
            placeholder="Email"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Create Password"
            required
            ref={passwordRef}
          />
          <Select name="gender" required ref={genderRef}>
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Select>
          <Button type="submit">Sign Up</Button>
        </form>
        <Footer>
          Already have an account? <Link to="/">Sign In</Link>
        </Footer>
      </SignUpContainer>
    </Wrapper>
  );
};

export default SignUp;
