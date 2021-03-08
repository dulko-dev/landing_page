import React from "react";
import styled from "styled-components";
import Header from "./Component/Header/Header";
import Test from "./Test";

const AppStyle = styled.div`
 
`;

function App() {
  return (
    <AppStyle>
      <Header />
      <Test />
    </AppStyle>
  );
}

export default App;
