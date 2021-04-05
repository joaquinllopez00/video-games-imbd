import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [navStatus, setNavStatus] = useState(false);
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
      <NavlinkContainer toggled={navStatus}>
        <div className="spacer"></div>
        <Link
          to={`/about`}
          onClick={() => {
            setNavStatus(!navStatus);
          }}
        >
          About
        </Link>
        <Link
          to={`/library`}
          onClick={() => {
            setNavStatus(!navStatus);
          }}
        >
          Library
        </Link>
      </NavlinkContainer>

      <div
        className={`burger ${navStatus ? "arrow" : ""}`}
        onClick={() => {
          setNavStatus(!navStatus);
        }}
      >
        <div className="top-line bun"></div>
        <div className="middle-line bun"></div>
        <div className="bottom-line bun"></div>
      </div>
    </StyledNav>
  );
};

const NavlinkContainer = styled(motion.nav)`
  background: linear-gradient(to bottom right, #ee1d52, darkred);
  padding: 1rem 1rem;
  transition: all ease-in 0.2s;
  @media screen and (max-width: 1028px) {
    height: 110vh;
    right: 0;
    top: 0rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0rem;
    position: absolute;
    width: 50vw;
    background: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
    z-index: 2;

    .spacer {
      width: 100%;
      height: 3.1rem;
      background: rgba(200, 0, 0, 0.6);
      border: 1px solid rgba(200, 0, 0, 0.1);
    }
    ${(props) => {
      if (props.toggled) {
        return `
        transform: translateX(0%);
        `;
      } else {
        return `
        transform: translateX(100%);
        `;
      }
    }}
  }

  a {
    color: white;
    padding: 1rem 3rem;
    transition: all ease 0.3s;
    @media screen and (max-width: 1028px) {
      font-size: 0.8rem;
      padding: 1rem 0rem;
      z-index: 3;
      display: inline-block;
    }
  }

  a:hover {
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.3);

    @media screen and (max-width: 1028px) {
      color: red;
      font-size: 1rem;
    }
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

  @media screen and (max-width: 1028px) {
    padding: 0rem;
  }

  .burger {
    display: none;
    height: 30px;
    width: 30px;
    margin-right: 1.3rem;
    cursor: pointer;
    transition: all ease 0.2s;
    @media screen and (max-width: 1028px) {
      display: block;
      z-index: 2;
    }
  }
  .arrow {
    .top-line {
      @media screen and (max-width: 1028px) {
        transform: rotate(45deg) translate(13px, -10px);
        width: 15px;
      }
    }
    .bottom-line {
      @media screen and (max-width: 1028px) {
        transform: rotate(-45deg) translate(13px, 10px);
        width: 15px;
      }
    }
  }
    .bun {
      width: 30px;
      height: 3px;
      margin: 0.3rem;
      background: white;
      transition: all ease-in-out 0.2s;
    }
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

    @media screen and (max-width: 1500px) {
      padding: 1rem 2rem;
      margin-left: 1rem;
      font-size: 1.8rem;
    }
    @media screen and (max-width: 678px) {
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

    @media screen and (max-width: 1028px) {
      padding: 0rem;
      font-size: 1.2rem;
      box-shadow: none;
      border: 1px solid rgba(255, 0, 0, 0.3);
    }
    @media screen and (max-width: 768px) {
      padding: 0rem;
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
    @media screen and (max-width: 1200px) {
      padding: 0.525rem 0.7rem;
      font-size: 1.2rem;
    }
  }
  button {
    padding: 0.2rem 1rem;
    cursor: pointer;
    background: linear-gradient(to bottom left, #ee1d52, darkred);
    border: none;
    border-bottom: 0.5px solid darkred;
    font-size: 1.2rem;
    transition: all ease-in 0.2s;
    color: white;
    @media screen and (max-width: 1200px) {
      padding: 0.5rem 0.7rem;
      font-size: 1.2rem;
    }
  }

  button:hover {
    box-shadow: 0px 0px 50px rgba(167, 0, 0, 0.5);
  }
`;

export default Nav;
