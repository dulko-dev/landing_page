import React, { useEffect, useRef, useState } from "react";
import verticalGraph from "../../../assets/Section3/analytices8.jpg";
import greenGraph from "../../../assets/Section3/analytices5.jpg";
import blueGraph from "../../../assets/Section3/analytices7.jpg";
import visitorsGraph from "../../../assets/Section3/analytices6.jpg";
import {
  Section,
  Content,
  LeftBox,
  RightBox,
  Title,
  Image,
  Text,
  List,
  PlusDiv,
  MinusDiv,
  ListContainer,
  ListText,
  ListTitle,
  Button,
} from "../../Style/Section/section3style";

function Section3(_, ref) {
  const [visible, setVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const [thirdVisible, setThirdVisible] = useState(false);
  const [fourthVisible, setFourthVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);
  const [firstTitle, setFirstTitle] = useState(false);
  const [secondTitle, setSecondTitle] = useState(false);
  const [thirdTitle, setThirdTitle] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const btnRef = useRef(null);

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
      { threshold: 1 }
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
      { threshold: 0.25 }
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
      { threshold: 0.25 }
    );
    observer.observe(fourthRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setBtnVisible(true);
            observer.unobserve(btnRef.current);
          }
        });
      },
      { threshold: 1 }
    );
    observer.observe(btnRef.current);
  }, []);

  return (
    <Section ref={ref}>
      <Content>
        <LeftBox>
          <Title visible={visible} ref={firstRef}>
            Measure product usage and custom KPIs for every customer
          </Title>
          <Text visible={secondVisible} ref={secondRef}>
            Why I say old chap that is spiffing cobblers it's your round, haggle
            bits and bobs golly gosh up the duff mush well car boot bevvy.
          </Text>
          <ListContainer
            on={firstTitle ? 1 : 0}
            ref={thirdRef}
            visible={thirdVisible}
          >
            <List
              onClick={() => setFirstTitle(!firstTitle)}
              on={firstTitle ? 1 : 0}
            >
              <ListTitle color={firstTitle ? 1 : 0}>
                Flexible, fast reporting: On your bike mate cobblers I don't
                want no agro bleeding crikey
              </ListTitle>
            </List>
            {firstTitle ? (
              <MinusDiv>
                <i className="fas fa-minus" style={{ color: "#272727" }}></i>
              </MinusDiv>
            ) : (
              <PlusDiv>
                <i className="fas fa-plus" style={{ color: "#8a8e91" }}></i>
              </PlusDiv>
            )}
          </ListContainer>
          <ListText on={firstTitle ? 1 : 0}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </ListText>
          <ListContainer
            on={secondTitle ? 1 : 0}
            ref={thirdRef}
            visible={thirdVisible}
          >
            <List
              onClick={() => setSecondTitle(!secondTitle)}
              on={secondTitle ? 1 : 0}
            >
              <ListTitle color={secondTitle ? 1 : 0}>
                Access our data anywhere: James Bond Queen's English mufty it's
                all gone to pot bobby elizabeth.
              </ListTitle>
            </List>
            {secondTitle ? (
              <MinusDiv>
                <i className="fas fa-minus" style={{ color: "#272727" }}></i>
              </MinusDiv>
            ) : (
              <PlusDiv>
                <i className="fas fa-plus" style={{ color: "#8a8e91" }}></i>
              </PlusDiv>
            )}
          </ListContainer>
          <ListText on={secondTitle ? 1 : 0}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </ListText>
          <ListContainer
            on={thirdTitle ? 1 : 0}
            ref={fourthRef}
            visible={fourthVisible}
          >
            <List
              onClick={() => setThirdTitle(!thirdTitle)}
              on={thirdTitle ? 1 : 0}
            >
              <ListTitle color={thirdTitle ? 1 : 0}>
                Invite your entire team: So I said in my flat Elizabeth no
                biggie me old mucker smashing starkers spiffing wind up,
                cobblers chip shop.
              </ListTitle>
            </List>
            {thirdTitle ? (
              <MinusDiv>
                <i className="fas fa-minus" style={{ color: "#272727" }}></i>
              </MinusDiv>
            ) : (
              <PlusDiv>
                <i className="fas fa-plus" style={{ color: "#8a8e91" }}></i>
              </PlusDiv>
            )}
          </ListContainer>
          <ListText on={thirdTitle ? 1 : 0}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </ListText>
        </LeftBox>
        <RightBox>
          <Image
            src={verticalGraph}
            alt="vertical graph"
            top="10%"
            left="60%"
            visibleTop={visible}
            ref={firstRef}
          />
          <Image
            src={greenGraph}
            alt="green graph"
            left="53%"
            top="20%"
            index="-1"
            ref={secondRef}
            visibleStay={secondVisible}
          />
          <Image
            src={visitorsGraph}
            alt="visitors graph"
            left="52%"
            top="40%"
            ref={fourthRef}
            visible={fourthVisible}
          />
          <Image
            src={blueGraph}
            alt="blue graph"
            top="25%"
            right="10%"
            ref={thirdRef}
            visibleChart={thirdVisible}
          />
        </RightBox>
      </Content>
      <Button
        type="button"
        visible={btnVisible}
        ref={btnRef}
        onClick={() => (window.location.href = "/#")}
        value="under construction"
      >
        Explore More Features
      </Button>
    </Section>
  );
}

const section3Ref = React.forwardRef(Section3);

export default section3Ref;
