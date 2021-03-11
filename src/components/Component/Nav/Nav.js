import React from "react";
import styled from "styled-components";
import bg from "../../../assets/pie.png";
import img4 from "../../../assets/elements_four.png";
import img3 from "../../../assets/elements_three.png";
import img1 from "../../../assets/elements_one.png";
import img5 from "../../../assets/elements_five.png";
import img6 from "../../../assets/elements_six.png";
import img2 from "../../../assets/elements_two.png";

import { movePlanet } from "../../Style/keyframes";

const NavWrapper = styled.div`
  height: 90vh;
  width: 1400px;
  margin: 0 auto;
`;

const WrappBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const LeftBox = styled.div`
  font-family: var(--textTitle);
  color: #fff;
  max-width: 700px;
  padding-right: 20px;
`;

const RightBox = styled.div`
  max-width: 700px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 3.5em;
  line-height: 1.5em;
  font-weight: 600;
`;

const Text = styled.p`
  margin-bottom: 20px;
  line-height: 2em;
  font-size: 1.3em;
`;

const Button = styled.button`
  background-color: #7ea3cc;
  display: inline-block;
  padding: 12px 36px;
  border-radius: 25px;
  border: 1px solid transparent;
  margin-top: 40px;
  color: #ffffff;
  &:hover {
    transition: all 0.3s linear;
    border-color: whitesmoke;
    background-color: inherit;
  }
`;

const Img1 = styled.img`
  position: absolute;
  bottom: 0;
  right: -40px;
  animation-name: ${movePlanet};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Img2 = styled.img`
  position: absolute;
  left: 0;
  top: 0;
`;

const Img3 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  animation-name: ${movePlanet};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const Img4 = styled.img`
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform: translateX(-50px);
`;

const Img5 = styled.img`
  position: absolute;
  bottom: 80px;
  right: -180px;
`;

const Img6 = styled.img`
  position: absolute;
  top: 0;
  left: -45px;
`;

const ImgDiv2SmallBalls = styled.div`
  position: absolute;
  bottom: 0;
  height: 725px;
  width: 700px;
  z-index: -1;
`;

const Img3Div = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 300px;
  width: 100px;
  z-index: -1;
`;

const ImgDiv2Balls = styled.div`
  position: absolute;
  height: 200px;
  bottom: 0;
  left: 0;
  width: 400px;
  z-index: -1;
  overflow: hidden;
`;

const ImgDivRedDoughnut = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 350px;
  width: 100px;
  z-index: -1;
`;

function Nav() {
  return (
    <NavWrapper>
      <WrappBoxes>
        <LeftBox>
          <Title>Powerful and flexible tools for your system</Title>
          <Text>
            Loo car boot bodge smashing I up the duff horse play give us a bell,
            William bugger all mate happy days.!
          </Text>
          <Button>Try for Free</Button>
          <ImgDiv2SmallBalls>
            <Img5 src={img5} alt="small planet" />
            <Img6 src={img6} alt="small planet" />
          </ImgDiv2SmallBalls>
        </LeftBox>
        <RightBox>
          <img src={bg} alt="two men between electronic gadget" />
          <ImgDivRedDoughnut>
            <Img2 src={img2} alt="red planet" />
          </ImgDivRedDoughnut>
        </RightBox>
      </WrappBoxes>

      <ImgDiv2Balls>
        <Img4 src={img4} alt="circle" />
        <Img3 src={img3} alt="circle" />
      </ImgDiv2Balls>
      <Img3Div>
        <Img1 src={img1} alt="circle" />
      </Img3Div>
    </NavWrapper>
  );
}

export default Nav;
