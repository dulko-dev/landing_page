import React from "react";
import styled from "styled-components";
import Header from "./Component/Header/Header";
import Nav from "./Component/Nav/Nav";
import BackgroundImg from "./Component/BackgroundImg";
import Section1 from "./Component/Section/Section1";
import Section2 from "./Component/Section/Section2";
import Section3 from "./Component/Section/Section3";
import Banner from "./Component/Banner/Banner";

const AppStyle = styled.div`
`;

function App() {
  return (
    <AppStyle>
      <BackgroundImg />
      <Header />
      <Nav />
      <Section1 />
      <Section2 />
      <Section3 />
      <Banner />
    </AppStyle>
  );
}

export default App;
