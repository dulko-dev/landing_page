import React from "react";
import styled from "styled-components";
import Header from "./Component/Header/Header";
import Nav from "./Component/Nav/Nav";
import BackgroundImg from "./Component/BackgroundImg";
import Section1 from "./Component/Section/Section1";

const AppStyle = styled.div`
`;

function App() {
  return (
    <AppStyle>
      <BackgroundImg />
      <Header />
      <Nav />
      <Section1 />
    </AppStyle>
  );
}

export default App;
