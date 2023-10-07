import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const SelectOption = () => {
  return (
    <>
    <NavBar/>
      <Page>
        <Container>
          <div className="box"  >AUTOMATE TASK</div>
          <div className="box" >COMPLETE TASK</div>
        </Container>
      </Page>
    </>
  );
};



const Page = styled.div`
  background-color: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  /* width: 100vh; */

  .box {
    width: 200px;
    height: 200px;
    background-color: #1e1e1e;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    border-radius: 20px;
    cursor: pointer;
    color: white;
    font-size: large;
    font-weight: bold;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    transition: font-size 0.3s ease, transform 0.3s ease;
  }

  .box:hover {
    font-size: larger;
    color: yellow;
    transform: scale(1.1);
    border-color: yellow;
  }
`;


export default SelectOption;