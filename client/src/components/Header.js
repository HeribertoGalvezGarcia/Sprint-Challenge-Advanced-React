import React from 'react';
import styled from "styled-components";
import useDarkMode from "../hooks/DarkMode";

const StyledHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 3%;
  width: 100%;
  -webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  -moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  background-color: ${({darkMode}) => darkMode ? "#333" : "#ccc"};
`;

const Toggle = styled.div`
  background: white;
  border-radius: 50px;
  border: 1px solid black;
  height: 20px;
  position: relative;
  width: 40px;
`;

const ToggleButton = styled.div`
  background-color: #aaa;
  border-radius: 50px;
  height: 18px;
  position: absolute;
  transition: 0.2s;
  width: 20px;

  left: ${({darkMode}) => darkMode ? "18px": "0"}
`;

function Header({setDarkMode: setDark}) {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDark(!darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <StyledHeader darkMode={darkMode}>
      <Toggle>
        <ToggleButton data-testid="darkModeToggle" onClick={toggleMode} darkMode={darkMode} />
      </Toggle>
    </StyledHeader>
  );
};

export default Header;
