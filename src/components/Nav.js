import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <h1>IVGDB</h1>
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border: none;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
`;

const Logo = styled(motion.div)``;

export default Nav;
