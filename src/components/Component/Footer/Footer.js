import React from "react";
import styled from "styled-components";
import logoBg from "../../../assets/Footer/logo.png";
import leafLeft from "../../../assets/Footer/leaf-left.png";
import leafRight from "../../../assets/Footer/leaf-right.png";
import { ReactComponent as Coding } from "../../../assets/Footer/coding.svg";
import { ReactComponent as Laptop } from "../../../assets/Footer/laptop.svg";
import { ReactComponent as Man } from "../../../assets/Footer/man.svg";
import { ReactComponent as Cloud } from "../../../assets/Footer/cloud.svg";
import { cloud } from "../../Style/keyframes";

const FooterStyle = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-color: #413c85;
`;
const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  padding-top: 80px;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.4);
`;
const BoxNo1 = styled.div`
  flex-basis: 40%;
`;
const BoxNo2 = styled.div`
  flex-basis: 20%;
`;
const BoxNo3 = styled.div`
  flex-basis: 20%;
`;
const BoxNo4 = styled.div`
  flex-basis: 20%;
`;
const ImageLogo = styled.img.attrs({
  src: `${logoBg}`,
  alt: "Hell Yeah",
})`
  width: 200px;
  height: 100px;
`;
const Text = styled.p`
  padding-top: 30px;
`;
const SpanText = styled.span`
  display: block;
  padding-top: 10px;
`;

const Title = styled.h3`
  color: #fff;
  padding-top: 70px;
  padding-bottom: 40px;
`;

const WrapperIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding-top: 50px;
`;
const Icon = styled.div`
  position: relative;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s linear;
  &:hover {
    background-color: #fff;
    color: #413c85;
    cursor: pointer;
  }
`;
const IconStyle = styled.i`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ul = styled.ul``;
const List = styled.li`
  padding-bottom: 20px;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

const LeaftL = styled.img.attrs({
  src: `${leafLeft}`,
})`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const LeaftR = styled.img.attrs({
  src: `${leafRight}`,
})`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const WallStyle = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #47437e;
`;

const CloudStyle = styled(Cloud)`
  position: absolute;
  bottom: 30%;
  left: -15%;
  width: 200px;
  height: 150px;
  animation-name: ${cloud};
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

function Footer() {
  return (
    <FooterStyle>
      <Wrapper>
        <BoxNo1>
          <ImageLogo />
          <Text>
            &copy; 2019 SaasLand, LLC. All rights reserved.
            <SpanText>Proudly made in NY</SpanText>
          </Text>
          <WrapperIcon>
            <Icon>
              <IconStyle className="fab fa-facebook-f"></IconStyle>
            </Icon>
            <Icon>
              <IconStyle className="fab fa-twitter"></IconStyle>
            </Icon>
            <Icon>
              <IconStyle className="fab fa-pinterest-p"></IconStyle>
            </Icon>
            <Icon>
              <IconStyle className="fab fa-twitch"></IconStyle>
            </Icon>
          </WrapperIcon>
        </BoxNo1>
        <BoxNo2>
          <Title>Download</Title>
          <Ul>
            <List>Company</List>
            <List>Android App</List>
            <List>ios App</List>
            <List>Desktop</List>
            <List>Blog</List>
            <List>Partners</List>
            <List>Careers</List>
          </Ul>
        </BoxNo2>
        <BoxNo3>
          <Title>Help</Title>
          <Ul>
            <List>FAQ</List>
            <List>Privacy</List>
            <List>Term & conditions</List>
            <List>Reporting</List>
            <List>Block Storage</List>
            <List>Tools & Integrations</List>
            <List>API</List>
          </Ul>
        </BoxNo3>
        <BoxNo4>
          <Title>Contact</Title>
          <Ul>
            <List>Support</List>
            <List>Sales</List>
            <List>Report Abuse</List>
            <List>System Status</List>
          </Ul>
        </BoxNo4>
      </Wrapper>
      <Man
        style={{
          position: "absolute",
          bottom: "0",
          right: "18%",
          zIndex: "1",
        }}
      />
      <Coding
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <Laptop
        style={{
          position: "absolute",
          bottom: "0",
          left: "12%",
          zIndex: "1",
        }}
      />
      <CloudStyle />
      <WallStyle></WallStyle>
      <LeaftL></LeaftL>
      <LeaftR></LeaftR>
    </FooterStyle>
  );
}

export default Footer;
