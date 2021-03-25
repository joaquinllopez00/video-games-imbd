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
    console.log(textInput);
    dispatch(fetchSearch(textInput));
    setTextInput("");
    history.push("/");
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <a href="/">IVGDb</a>
      <form className="search">
        <input type="text" value={textInput} onChange={inputHandler} />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </form>
      <a className="library" href="/library">
        Library
      </a>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    background: linear-gradient(to bottom right, #ee1d52, #65b3d0);
    color: white;
    padding: 1.5rem 4rem;
    font-size: 1.5rem;
    border-radius: 10px;
  }

  .library {
    padding: 1rem 3rem;
    background: linear-gradient(to bottom left, #ee1d52, darkred);
  }

  .search {
    display: flex;
    align-items: center;
  }
  input {
    width: 30vw;
    padding: 0.2rem 1rem;
    font-size: 1.5rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border: none;
    font-weight: bold;
    outline: none;
  }
  button {
    padding: 0.4rem 1rem;
    cursor: pointer;
    background: linear-gradient(to bottom left, #ee1d52, darkred);
    border: none;
    font-size: 1.2rem;
    transition: all ease-in 0.2s;
    color: white;
  }

  button:hover {
    padding: 0.4rem 1.5rem;
  }
`;

export default Nav;
