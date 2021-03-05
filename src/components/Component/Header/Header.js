import React, { useEffect, useState } from "react";
import FlagCountries from "./FlagCountries";
import logo from "../../../assets/header/logo.svg";
import { getFlag } from "../../Tools/axios";
import {
  Wrapper,
  NavSite,
  ButtonStyle,
  Ul,
  HoverBack,
  LiStyle,
  Logo,
} from "../../Style/Header/headerstyle";

function Header() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortControl = new AbortController();
    const signal = abortControl.signal;
    getFlag(signal)
      .then((res) => {
        if (res.status === 200) {
          return setData(res.data);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("axios aborted");
        } else {
          console.log(err);
        }
      });

    return () => {
      abortControl.abort();
    };
  }, []);

  return (
    <NavSite>
      <Wrapper>
        <ButtonStyle>
          <Logo src={logo} onClick={() => (window.location.href = "#")} />
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
          <FlagCountries data={data} />
        </HoverBack>
      )}
    </NavSite>
  );
}

export default Header;
