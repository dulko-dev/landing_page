import React from "react";
import styled from "styled-components";

const ImgBg = styled.div`
  position: absolute;
  top: 0;
  height: 937px;
  width: 100%;
  z-index: -1;
  background-image: -moz-linear-gradient(-50deg, #22186e 0, #0e044b 100%);
  background-image: -webkit-linear-gradient(-50deg, #22186e 0, #0e044b 100%);
  background-image: -ms-linear-gradient(-50deg, #22186e 0%, #0e044b 100%);
`;

function BackgroundImg() {
  return <ImgBg></ImgBg>;
}

export default BackgroundImg;
