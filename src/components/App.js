import React from "react";
import styled from "styled-components";
import Header from "./Component/Header/Header";
import Test from "./Test";
import Nav from "./Component/Nav/Nav";
import BackgroundImg from "./Component/BackgroundImg";

const AppStyle = styled.div`
`;

function App() {
  return (
    <AppStyle>
      <Header />
      <BackgroundImg />
      <Nav />
      <Test />
    </AppStyle>
  );
}

export default App;
