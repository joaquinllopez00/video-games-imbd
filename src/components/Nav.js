import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
    history.push("/");
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <a className="logo" href="/video-games-imbd/">
        IVGDb
      </a>
      <form className="search">
        <input type="text" value={textInput} onChange={inputHandler} />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
      <NavlinkContainer>
        <a className="about" href="/video-games-imbd/about">
          About
        </a>
        <a className="library" href="/video-games-imbd/library">
          Library
        </a>
      </NavlinkContainer>
    </StyledNav>
  );
};

const NavlinkContainer = styled(motion.nav)`
  background: linear-gradient(to bottom right, #ee1d52, darkred);
  padding: 1rem 0rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0rem;
    margin-right: 1rem;
    background: none;
  }
  a {
    color: white;
    padding: 1rem 3rem;
    transition: all ease 0.3s;
    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
      padding: 0.2rem;
    }
  }

  a:hover {
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.3);
  }
`;

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  justify-content: space-between;
  background: #1b1e23;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0rem;
  }
  .logo {
    background: linear-gradient(to bottom right, #ee1d52, darkred);
    color: white;
    padding: 2rem 5rem;
    font-size: 2rem;
    font-weight: 600;
    border-radius: 10px;
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.3);
    transition: all ease 0.3s;

    @media screen and (max-width: 768px) {
      padding: 0.5rem 0.7rem;
      margin-left: 1rem;
      font-size: 1.2rem;
    }
  }

  .logo:hover {
    box-shadow: 0px 0px 70px rgba(255, 255, 255, 0.5);
  }

  .search {
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 20px rgba(167, 0, 0, 0.5);
    @media screen and (max-width: 768px) {
      padding: 0.5rem 0.7rem;
      font-size: 1.2rem;
      box-shadow: none;
    }
  }
  input {
    width: 30vw;
    padding: 0.2rem 1rem;
    font-size: 1.2rem;
    border: none;
    font-weight: bold;
    outline: none;
    @media screen and (max-width: 768px) {
      padding: 0.5rem 0.7rem;
      font-size: 1.2rem;
    }
  }
  button {
    padding: 0.4rem 1rem;
    cursor: pointer;
    background: linear-gradient(to bottom left, #ee1d52, darkred);
    border: none;
    border-bottom: 1px solid darkred;
    font-size: 1.2rem;
    transition: all ease-in 0.2s;
    color: white;
    @media screen and (max-width: 768px) {
      padding: 0.5rem 0.7rem;
      font-size: 1.2rem;
    }
  }

  button:hover {
    box-shadow: 0px 0px 50px rgba(167, 0, 0, 0.5);
  }
`;

export default Nav;
