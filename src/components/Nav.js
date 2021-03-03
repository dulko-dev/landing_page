import React, { useState } from "react";
import logo from "../assets/nav/logo.svg";
import { getFlag } from "./Tools/axios";
import {
  Wrapper,
  HoverBackImg,
  NavSite,
  ButtonStyle,
  Ul,
  HoverBack,
  LiStyle,
  ImageHoverBack,
  HomeImagesBg,
} from "./Style/Nav/navstyle";

function Nav() {
  const [show, setShow] = useState(false);
  return (
    <NavSite>
      <Wrapper>
        <ButtonStyle>
          <ImageHoverBack
            src={logo}
            onClick={() => (window.location.href = "#")}
          />
        </ButtonStyle>

        <Ul>
          <LiStyle
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <span style={{ cursor: "pointer" }}>Home</span>
          </LiStyle>
          <LiStyle>Pages</LiStyle>
          <LiStyle>Blog</LiStyle>
          <LiStyle>Shop</LiStyle>
          <LiStyle>Elements</LiStyle>
          <LiStyle>Portfolio</LiStyle>
          <li>
            <i className="fas fa-search-plus"></i>
          </li>
        </Ul>
      </Wrapper>
      {show && (
        <HoverBack
          onMouseLeave={() => setShow(false)}
          onMouseEnter={() => setShow(true)}
        >
          <HoverBackImg>
            <HomeImagesBg></HomeImagesBg>
          </HoverBackImg>
        </HoverBack>
      )}
    </NavSite>
  );
}

export default Nav;
