import React, { useState } from "react";
import styled from "styled-components";
import { displayImage } from "../../Style/keyframes";

const Ul = styled.ul`
  width: 180px;
  padding: 15px 0;
  background-color: #ffffff;
  color: #2a2d34;
`;

const Li = styled.li`
  padding: 5px 20px;
  cursor: pointer;
  &:nth-child(n)::after {
    content: "\f054";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    right: 20px;
  }
  &:hover {
    color: #613dc1;
  }
`;

const UlSecond = styled.ul`
  animation-name: ${displayImage};
  animation-duration: 0.5s;
  width: 190px;
  padding: 15px 0;
  position: absolute;
  left: -190px;
  background-color: #ffffff;
  top: 0;
`;

const LiSecond = styled.li`
  padding: 5px 20px;
  color: #2a2d34;
  cursor: pointer;
  font-weight: normal;
  &:hover {
    color: #613dc1;
  }
`;

const UlSecondM = styled(UlSecond)`
  top: 20px;
`;

const UlSecondF = styled(UlSecond)`
  top: 45px;
`;

const UlSecondD = styled(UlSecond)`
  top: 70px;
`;

function Portfolio() {
  const [show, setShow] = useState({
    grid: false,
    masonry: false,
    fluid: false,
    detail: false,
  });

  return (
    <Ul>
      <Li
        onMouseEnter={() => setShow({ grid: true })}
        onMouseLeave={() => setShow({ grid: false })}
      >
        Portfolio Grid
        {show.grid && (
          <UlSecond>
            <LiSecond>Standard 4 columns</LiSecond>
            <LiSecond>Standard 3 columns</LiSecond>
            <LiSecond>Gallery 2 columns</LiSecond>
            <LiSecond>Gallery 3 columns</LiSecond>
            <LiSecond>Gallery 4 columns</LiSecond>
          </UlSecond>
        )}
      </Li>
      <Li
        onMouseEnter={() => setShow({ masonry: true })}
        onMouseLeave={() => setShow({ masonry: false })}
      >
        Portfolio Masonry
        {show.masonry && (
          <UlSecondM>
            <LiSecond>Standard 3 columns</LiSecond>
            <LiSecond>Standard 5 columns</LiSecond>
            <LiSecond>Standard 1 columns</LiSecond>
            <LiSecond>Gallery 2 columns</LiSecond>
            <LiSecond>Gallery 3 columns</LiSecond>
            <LiSecond>Gallery 4 columns</LiSecond>
          </UlSecondM>
        )}
      </Li>
      <Li
        onMouseEnter={() => setShow({ fluid: true })}
        onMouseLeave={() => setShow({ fluid: false })}
      >
        Portfolio Fluid
        {show.fluid && (
          <UlSecondF>
            <LiSecond>Standard 3 columns</LiSecond>
            <LiSecond>Gallery 1 columns</LiSecond>
            <LiSecond>Gallery 5 columns</LiSecond>
            <LiSecond>Gallery 3 columns</LiSecond>
          </UlSecondF>
        )}
      </Li>
      <Li
        onMouseEnter={() => setShow({ detail: true })}
        onMouseLeave={() => setShow({ detail: false })}
      >
        Portfolio Detail
        {show.detail && (
          <UlSecondD>
            <LiSecond>Split left</LiSecond>
            <LiSecond>Split right</LiSecond>
            <LiSecond>Image Gallery</LiSecond>
            <LiSecond>Classic Image</LiSecond>
          </UlSecondD>
        )}
      </Li>
    </Ul>
  );
}

export default Portfolio;
