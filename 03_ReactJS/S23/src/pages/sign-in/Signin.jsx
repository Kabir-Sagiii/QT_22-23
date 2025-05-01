// SignIn.js
import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import authContext from "../../context/auth";
import axios from "axios";

// Styled Components for styling
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f4f8;
`;

const SignInContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
`;

const Title = styled.h2`
  text-align: center;
  font-family: "Arial", sans-serif;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
`;

const SignIn = () => {
  const { login } = useContext(authContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:9999/api/users/sign-in", user)
      .then((res) => {
        if (res.data.ok) {
          login();
        } else {
          alert("Check Credentials or Create account");
        }
      })
      .catch(() => {});
  };

  return (
    <Wrapper>
      <SignInContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Sign In</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button type="submit">Sign In</Button>
        </form>
        <Footer>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </Footer>
      </SignInContainer>
    </Wrapper>
  );
};

export default SignIn;
