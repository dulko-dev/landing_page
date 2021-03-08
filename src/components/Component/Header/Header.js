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
  SpanStyle,
  HoverPage,
  HoverShop,
  HoverElement,
} from "../../Style/Header/headerstyle";
import Page from "./Page";
import Shop from "./Shop";
import Element from "./Element";

function Header() {
  const [show, setShow] = useState({
    home: false,
    pages: false,
    shop: false,
    element: false,
    portfolio: false,
  });
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
            onMouseEnter={() => setShow({ home: true })}
            onMouseLeave={() => setShow({ home: false })}
          >
            <SpanStyle>Home</SpanStyle>
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
          <LiStyle>Portfolio</LiStyle>
          <li>
            <i className="fas fa-search-plus"></i>
          </li>
        </Ul>
      </Wrapper>
    </NavSite>
  );
}

export default Header;
