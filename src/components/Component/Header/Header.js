import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Page from "./Page";
import Shop from "./Shop";
import Element from "./Element";
import Portfolio from "./Portfolio";
import FlagCountries from "./FlagCountries";
import logo from "../../../assets/header/logo2.png";

import {
  Wrapper,
  NavSite,
  Ul,
  HoverBack,
  LiStyle,
  Logo,
  SpanStyle,
  HoverPage,
  HoverShop,
  HoverElement,
  HoverPortfolio,
  LiStyleZoom,
  Module,
  Input,
  ModuleSearch,
  SearchIcon,
  ExitIcon,
  BlockBeforeAnimated,
} from "../../Style/Header/headerstyle";

function Header() {
  const [show, setShow] = useState({
    home: false,
    pages: false,
    shop: false,
    element: false,
    portfolio: false,
    zoom: false,
  });
  const [data, setData] = useState([]);
  const [topScroll, setTopScroll] = useState(false);

  const searchRef = useRef();
  const FLAGS_URL = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    const getFlag = async () => {
      await axios
        .get(FLAGS_URL, { cancelToken: source.token })
        .then((res) => {
          if (res.status === 200) {
            return setData(res.data);
          }
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("axios request cancelled");
          } else {
            console.log(err);
          }
        });
    };
    getFlag();

    return () => {
      source.cancel("axios request cancelled");
    };
  }, []);

  useEffect(() => {
    searchRef.current && searchRef.current.focus();
  }, [show.zoom]);

  const changeColor = () => {
    if (document.scrollingElement.scrollTop > 50) {
      setTopScroll(true);
    } else {
      setTopScroll(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeColor);
    return () => document.removeEventListener("scroll", changeColor);
  }, [topScroll]);

  return (
    <NavSite
      style={{
        backgroundColor: topScroll ? "whitesmoke" : "inherit",
        transition: "all 0.5s ease",
      }}
    >
      <Wrapper>
        <a style={{ outline: "0" }} href="/#">
          <Logo src={logo} />
        </a>
        <Ul style={{ color: topScroll ? "#2a2d34" : "whitesmoke" }}>
          <LiStyle
            onMouseEnter={() => setShow({ home: true })}
            onMouseLeave={() => setShow({ home: false })}
          >
            <SpanStyle>Flags</SpanStyle>
            {show.home && (
              <HoverBack
                onMouseLeave={() => setShow({ home: false })}
                onMouseEnter={() => setShow({ home: true })}
              >
                <FlagCountries data={data} />
              </HoverBack>
            )}
          </LiStyle>
          <LiStyle
            onMouseEnter={() => setShow({ pages: true })}
            onMouseLeave={() => setShow({ pages: false })}
          >
            <SpanStyle>Pages</SpanStyle>
            {show.pages && (
              <HoverPage
                onMouseLeave={() => setShow({ pages: false })}
                onMouseEnter={() => setShow({ pages: true })}
              >
                <Page />
              </HoverPage>
            )}
          </LiStyle>
          <LiStyle
            onMouseEnter={() => setShow({ shop: true })}
            onMouseLeave={() => setShow({ shop: false })}
          >
            <SpanStyle>Shop</SpanStyle>
            {show.shop && (
              <HoverShop>
                <Shop />
              </HoverShop>
            )}
          </LiStyle>
          <LiStyle
            onMouseEnter={() => setShow({ element: true })}
            onMouseLeave={() => setShow({ element: false })}
          >
            <SpanStyle>Elements</SpanStyle>
            {show.element && (
              <HoverElement>
                <Element />
              </HoverElement>
            )}
          </LiStyle>
          <LiStyle
            onMouseEnter={() => setShow({ portfolio: true })}
            onMouseLeave={() => setShow({ portfolio: false })}
          >
            <SpanStyle>Portfolio </SpanStyle>
            {show.portfolio && (
              <HoverPortfolio>
                <Portfolio />
              </HoverPortfolio>
            )}
          </LiStyle>
          <LiStyleZoom>
            <i
              className="fas fa-search-plus"
              onClick={() => setShow({ zoom: true })}
            ></i>
          </LiStyleZoom>
        </Ul>
      </Wrapper>
      {show.zoom && (
        <BlockBeforeAnimated>
          <Module></Module>
          <ModuleSearch>
            <Input type="text" placeholder="Search here" ref={searchRef} />
            <SearchIcon className="fas fa-search fa-lg"></SearchIcon>
          </ModuleSearch>
          <ExitIcon
            className="fas fa-times fa-lg"
            onClick={() => setShow({ zoom: false })}
          ></ExitIcon>
        </BlockBeforeAnimated>
      )}
    </NavSite>
  );
}

export default Header;
