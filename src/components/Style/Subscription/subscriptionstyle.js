import styled from 'styled-components';
import { searchInput } from "../../Style/keyframes";

export const SubscribStyle = styled.div`
  width: 100%;
`;
export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 100px;
`;
export const Title = styled.h3`
  text-align: center;
  font-size: 2.3em;
  line-height: 1.3;
  padding-bottom: 30px;
  padding-top: 150px;
`;
export const SpanTitle = styled.div`
  display: block;
  font-weight: 600;
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.7);
  width: 550px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.5;
`;
export const WrapperBox = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  height: 460px;
`;
export const LeftBox = styled.div`
  flex-basis: 33%;
  border: 1px solid #f0f0f6;
  padding: 40px;
  box-sizing: border-box;
  margin-right: 50px;
  transition: all 0.2s linear;
  filter: grayscale(100%);
  &:hover {
    box-shadow: 0 40px 80px 0 rgb(1 1 64 / 8%);
    transform: scale(1.1);
    filter: grayscale(0%);
  }
`;

export const MiddleBox = styled(LeftBox)``;
export const RightBox = styled(LeftBox)``;

export const TextBox = styled.p`
  text-align: center;
  padding-bottom: 5px;
`;

export const TitleBox = styled.h3`
  position: relative;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 15%;
    right: 15%;
    background-color: rgba(138, 142, 145, 0.3);
    height: 1px;
  }
`;

export const Popular = styled.p`
  width: 35%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  font-size: 0.8em;
  color: green;
  padding-bottom: 20px;
  &::before {
    content: "\f06d";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    left: 0;
    width: 10px;
    height: 10px;
    color: green;
    font-weight: 600;
  }
`;
export const SpanTitleBox = styled.span`
  padding-bottom: 5px;
  display: block;
  color: #4e78f4;
  font-weight: 600;
  font-size: 2em;
`;

export const Ul = styled.ul`
  padding-top: 60px;
  padding-left: 40px;
`;

export const ListBox = styled.li`
  position: relative;
  padding-bottom: 15px;
  color: rgba(0, 0, 0, 0.7);
  margin-right: 30px;
  &:first-child::after,
  &:last-child::after,
  &:nth-child(2)::after {
    content: "\f164";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    width: 20px;
    height: 20px;
    right: 0;
    color: green;
  }
  &:nth-last-child(2)::after,
  &:nth-last-child(3)::after {
    content: "\f165";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    width: 20px;
    height: 20px;
    right: 0;
    color: red;
  }
`;

export const BtnBox = styled.button`
  display: block;
  margin: 30px auto 0 auto;
  padding: 15px 45px;
  background-color: #4e78f4;
  border-radius: 25px;
  border: 1px solid #4e78f4;
  color: #ffff;
  transition: all 0.3s linear;
  animation-name: ${searchInput};
  animation-duration: 0.4s;

  &:hover {
    background-color: inherit;
    color: #4e78f4;
  }
`;