import React from "react";
import Person from "./Person";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${({darkMode}) => darkMode ? "black" : "white"};
`;

function PersonList({data, darkMode}) {
  if (data.length === 0) return <div>Loading...</div>
  return (
    <Container data-testid="dataContainer" darkMode={darkMode}>
      {data.map(data => <Person key={data.id} {...data} darkMode={darkMode} />)}
    </Container>
  );
}

export default PersonList;
