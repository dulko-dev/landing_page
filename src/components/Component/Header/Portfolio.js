import React, { useState } from "react";
import {
  Ul,
  Li,
  UlSecond,
  LiSecond,
  UlSecondM,
  UlSecondF,
  UlSecondD,
} from "../../Style/Header/portfoliostyle";

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
