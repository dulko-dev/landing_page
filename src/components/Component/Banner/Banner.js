import React from "react";
import styled from "styled-components";
import case1 from "../../../assets/Banner/shap_one.png";
import case2 from "../../../assets/Banner/shap_two.png";
import container from "../../../assets/Banner/case.png";
import { animatedButton } from "../../Style/keyframes";

const BannerPage = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: #0e044b;
`;

const BgImageTop = styled.img`
  position: absolute;
  right: 0;
  top: 0;
`;
const BgImageBottom = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftBox = styled.div``;
const Image = styled.img`
  margin-right: 100px;
`;
const RightBox = styled.div`
  color: #ffffff;
  width: 50%;
`;

const Button = styled.button`
  margin-bottom: 70px;
  position: relative;
  display: inline-block;
  padding: 20px;
  border: none;
  border-radius: 50%;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    padding: 40px;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    bottom: 50%;
    left: 50%;
    box-shadow: 0 1px 15px 1px rgb(255 255 255 / 50%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ${animatedButton};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;
const IStyle = styled.i`
  color: #4e78f4;
`;
const Title = styled.h3`
  font-size: 2.2em;
  line-height: 1.2;
  font-weight: 600;
`;
const Text = styled.p`
  line-height: 1.5;
  padding: 30px 0;
  color: rgba(255, 255, 255, 0.4);
`;
const TextName = styled.div`
  color: rgba(255, 255, 255, 0.4);
`;
const TextNameSpan = styled.span`
  font-size: 1.2em;
  display: block;
  padding-bottom: 1em;
  color: #ffffff;
`;

function Banner() {
  return (
    <BannerPage>
      <Wrapper>
        <BgImageTop src={case1} alt="first stain" />
        <BgImageBottom src={case2} alt="second stain" />
        <LeftBox>
          <Image src={container} alt="transparent container" />
        </LeftBox>
        <RightBox>
          <a
            href="https://www.youtube.com/watch?v=2qKMNAj6080"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              <IStyle className="fas fa-play"></IStyle>
            </Button>
          </a>
          <Title>
            Luxer One powers their business analytics with SaasLand.
          </Title>
          <Text>
            So I said in my flat Elizabeth no biggie me old mucker smashing
            starkers spiffing wind up, cobblers chip shop pardon.
          </Text>
          <TextName>
            <TextNameSpan>Wisteria Ravenclaw</TextNameSpan> Director of
            Marketing & Communications
          </TextName>
        </RightBox>
      </Wrapper>
    </BannerPage>
  );
}

export default Banner;
