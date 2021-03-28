import React, { useState } from "react";
import {
  SubscribStyle,
  Wrapper,
  Title,
  SpanTitle,
  Text,
  WrapperBox,
  LeftBox,
  TextBox,
  TitleBox,
  SpanTitleBox,
  Ul,
  ListBox,
  BtnBox,
  MiddleBox,
  Popular,
  RightBox,
} from "../../Style/Subscription/subscriptionstyle";

function Subscribe(_, ref) {
  const [show, setShow] = useState({
    firstBox: false,
    secondBox: false,
    thirdBox: false,
  });

  return (
    <SubscribStyle ref={ref}>
      <Wrapper>
        <Title>
          14-day free trial.
          <SpanTitle>No credit card required.</SpanTitle>
        </Title>
        <Text>
          The full monty burke posh excuse my French Richard cheeky bobby
          spiffing crikey Why gormless, pear shaped.!
        </Text>
        <WrapperBox>
          <LeftBox
            onMouseEnter={() => setShow({ firstBox: true })}
            onMouseLeave={() => setShow({ firstBox: false })}
          >
            <TextBox>Starter</TextBox>
            <TitleBox>
              <SpanTitleBox>$59.99</SpanTitleBox>Per month
            </TitleBox>
            <Ul>
              <ListBox>All Lite features</ListBox>
              <ListBox>Unlimited contacts</ListBox>
              <ListBox>Remove Sendinblue</ListBox>
              <ListBox>logo from emails</ListBox>
              <ListBox>Advanced statistics</ListBox>
            </Ul>
            {show.firstBox && (
              <BtnBox onClick={() => (window.location.href = "/#")}>
                Start Free Month
              </BtnBox>
            )}
          </LeftBox>
          <MiddleBox
            onMouseEnter={() => setShow({ secondBox: true })}
            onMouseLeave={() => setShow({ secondBox: false })}
          >
            <TextBox>Professional</TextBox>
            <Popular>Most Popular</Popular>
            <TitleBox>
              <SpanTitleBox>$99.99</SpanTitleBox>Per month
            </TitleBox>
            <Ul>
              <ListBox>All Lite features</ListBox>
              <ListBox>Unlimited contacts</ListBox>
              <ListBox>Remove Sendinblue</ListBox>
              <ListBox>logo from emails</ListBox>
              <ListBox>Advanced statistics</ListBox>
            </Ul>
            {show.secondBox && (
              <BtnBox onClick={() => (window.location.href = "/#")}>
                Start Free Month
              </BtnBox>
            )}
          </MiddleBox>
          <RightBox
            onMouseEnter={() => setShow({ thirdBox: true })}
            onMouseLeave={() => setShow({ thirdBox: false })}
          >
            <TextBox>Expert</TextBox>
            <TitleBox>
              <SpanTitleBox>$199.99</SpanTitleBox>Per month
            </TitleBox>
            <Ul>
              <ListBox>All Lite features</ListBox>
              <ListBox>Unlimited contacts</ListBox>
              <ListBox>Remove Sendinblue</ListBox>
              <ListBox>logo from emails</ListBox>
              <ListBox>Advanced statistics</ListBox>
            </Ul>
            {show.thirdBox && (
              <BtnBox onClick={() => (window.location.href = "/#")}>
                Start Free Month
              </BtnBox>
            )}
          </RightBox>
        </WrapperBox>
      </Wrapper>
    </SubscribStyle>
  );
}

const subscribeRef = React.forwardRef(Subscribe);

export default subscribeRef;
