import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  height: 100px;
  background-color:  ${({darkMode}) => darkMode ? "#333" : "#ccc"};;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
`;

const Name = styled.h3`
  font-size: 20px;
  color: ${({darkMode}) => darkMode ? "white" : "black"};;
  margin: 0;
`;

const Text = styled.p`
  font-size: 12px;
  color: ${({darkMode}) => darkMode ? "white" : "black"};
  margin: 0;
`;

function Person({name, country, searches, darkMode}) {
  return (
    <StyledContainer darkMode={darkMode}>
      <Name darkMode={darkMode}>{name}</Name>
      <Text darkMode={darkMode}>Country: {country}</Text>
      <Text darkMode={darkMode}>{searches} search(es)</Text>
    </StyledContainer>
  );
}

export default Person;
