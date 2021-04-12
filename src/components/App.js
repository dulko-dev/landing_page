import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "./Component/Header/Header";
import Nav from "./Component/Nav/Nav";
import BackgroundImg from "./Component/BackgroundImg";
import Section1 from "./Component/Section/Section1";
import Section2 from "./Component/Section/Section2";
import Section3 from "./Component/Section/Section3";
import Banner from "./Component/Banner/Banner";
import Step from "./Component/Step/Step";
import Subscribe from "./Component/Subscribe/Subscribe";
import BrandSelection from "./Component/BrandSelection/BrandSelection";
import Footer from "./Component/Footer/Footer";
import { useWindowScroll } from "react-use";

const AppStyle = styled.div`
  font-family: var(--textTitle);
`;

function App() {
  const [display, setDisplay] = useState(true);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const bannerRef = useRef(null);
  const stepRef = useRef(null);
  const subscribeRef = useRef(null);
  const brandSelectionRef = useRef(null);
  const FooterRef = useRef(null);

  const { y: pageYOffsetBottom } = useWindowScroll();

  console.log(pageYOffsetBottom);
  const scrollDown = () => {
    if (pageYOffsetBottom < 930) {
      window.scrollTo({
        top: section1Ref.current.offsetTop,
        behavior: "smooth",
      });
    } else if (pageYOffsetBottom > 931 && pageYOffsetBottom < 1720) {
      window.scrollTo({
        top: section2Ref.current.offsetTop - 150,
        behavior: "smooth",
      });
    } else if (pageYOffsetBottom > 1721 && pageYOffsetBottom < 2660) {
      window.scrollTo({
        top: section3Ref.current.offsetTop - 150,
        behavior: "smooth",
      });
    } else if (pageYOffsetBottom > 2660 && pageYOffsetBottom < 3560) {
      window.scrollTo({
        top: bannerRef.current.offsetTop - 300,
        behavior: "smooth",
      });
    } else if (pageYOffsetBottom > 3560 && pageYOffsetBottom < 4420) {
      window.scrollTo({
        top: stepRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (pageYOffsetBottom > 4420 && pageYOffsetBottom < 5695) {
      window.scrollTo({
        top: subscribeRef.current.offsetTop,
        behavior: "smooth",
      });
    } else if (pageYOffsetBottom > 5700 && pageYOffsetBottom < 6480) {
      window.scrollTo({
        top: brandSelectionRef.current.offsetTop - 200,
        behavior: "smooth",
      });
    } else if (pageYOffsetBottom > 6480 && pageYOffsetBottom < 7114) {
      window.scrollTo({
        top: FooterRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (pageYOffsetBottom > 7000) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }, [pageYOffsetBottom]);

  return (
    <AppStyle>
      <BackgroundImg />
      <Header />
      <Nav scrollDown={scrollDown} display={display} />
      <Section1 ref={section1Ref} />
      <Section2 ref={section2Ref} />
      <Section3 ref={section3Ref} />
      <Banner ref={bannerRef} />
      <Step ref={stepRef} />
      <Subscribe ref={subscribeRef} />
      <BrandSelection ref={brandSelectionRef} />
      <Footer ref={FooterRef} />
    </AppStyle>
  );
}

export default App;
