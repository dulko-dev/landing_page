import React from "react";
import { ReactComponent as Coding } from "../../../assets/Footer/coding.svg";
import { ReactComponent as Laptop } from "../../../assets/Footer/laptop.svg";
import { ReactComponent as Man } from "../../../assets/Footer/man.svg";
import {
  FooterStyle,
  Wrapper,
  BoxNo1,
  ImageLogo,
  Text,
  SpanText,
  WrapperIcon,
  Icon,
  IconStyle,
  BoxNo2,
  Title,
  Ul,
  List,
  BoxNo3,
  BoxNo4,
  WallStyle,
  CloudStyle,
  LeaftL,
  LeaftR,
} from "../../Style/Footer/footerstyle";

function Footer() {
  return (
    <FooterStyle>
      <Wrapper>
        <BoxNo1>
          <ImageLogo />
          <Text>
            &copy; 2019 Hell Yeah All rights reserved.
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
