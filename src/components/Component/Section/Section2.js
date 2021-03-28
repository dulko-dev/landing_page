import React, { useEffect, useRef, useState } from "react";
import redLabel from "../../../assets/Section2/analytices3.png";
import table from "../../../assets/Section2/analytices4.png";
import chart from "../../../assets/Section2/analytices2.png";
import comment from "../../../assets/Section2/analytices1.png";
import {
  Section,
  Content,
  LeftBox,
  RightBox,
  Title,
  Image,
  Text,
  Li,
  Span,
} from "../../Style/Section/section2style";

function Section2(_, ref) {
  const [visible, setVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [thirdVisible, setThirdVisible] = useState(false);
  const [fourthVisible, setFourthVisible] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setVisible(true);
            observer.unobserve(firstRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(firstRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setSecondVisible(true);
            observer.unobserve(secondRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(secondRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setThirdVisible(true);
            observer.unobserve(thirdRef.current);
          }
        });
      },
      { threshold: 0.75 }
    );
    observer.observe(thirdRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setFourthVisible(true);
            observer.unobserve(fourthRef.current);
          }
        });
      },
      { threshold: 1 }
    );
    observer.observe(fourthRef.current);
  }, []);

  return (
    <Section ref={ref}>
      <Content>
        <LeftBox>
          <Image
            src={redLabel}
            alt="heart rate"
            left="0"
            visible={visible}
            ref={firstRef}
          />
          <Image
            src={table}
            alt="table of person"
            left="15%"
            top="18%"
            index="-1"
            ref={secondRef}
            visible={secondVisible}
          />
          <Image
            src={comment}
            alt="commentary"
            left="45%"
            bottom="10%"
            ref={thirdRef}
            visibleComment={thirdVisible}
          />
          <Image
            src={chart}
            alt="chart"
            bottom="20px"
            left="0"
            ref={fourthRef}
            visibleChart={fourthVisible}
          />
        </LeftBox>
        <RightBox>
          <Title visible={visible} ref={firstRef}>
            Explore user behavior on an individual level of detail
          </Title>
          <Text visible={secondVisible} ref={secondRef}>
            Why I say old chap that is spiffing cobblers it's your round, haggle
            bits and bobs golly gosh up the duff mush well car boot bevvy.
          </Text>
          <ul style={{ paddingTop: "40px" }}>
            <Li visible={thirdVisible} ref={thirdRef}>
              <Span>Flexible, fast reporting:</Span> On your bike mate cobblers
              I don't want no agro bleeding crikey
            </Li>
            <Li visibleDelay={thirdVisible} ref={thirdRef}>
              <Span>Access our data anywhere: </Span> James Bond Queen's English
              mufty it's all gone to pot bobby elizabeth.
            </Li>
            <Li visibleDelay={fourthVisible} ref={fourthRef}>
              <Span>Invite your entire team: </Span> So I said in my flat
              Elizabeth no biggie me old mucker smashing starkers spiffing wind
              up, cobblers chip shop.
            </Li>
          </ul>
        </RightBox>
      </Content>
    </Section>
  );
}

const section2Ref = React.forwardRef(Section2);

export default section2Ref;
