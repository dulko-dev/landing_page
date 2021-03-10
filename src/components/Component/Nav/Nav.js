import React from "react";
import styled from "styled-components";
import bg from "../../../assets/pie.png";
import img4 from "../../../assets/elements_four.png";
import img3 from "../../../assets/elements_three.png";
import img1 from "../../../assets/elements_one.png";

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
`;

const Button = styled.button`
  display: inline-block;
  padding: 12px 36px;
  border-radius: 25px;
  border: 1px solid transparent;
  margin-top: 40px;
  color: #ffffff;
  background-color: #7ea3cc;
  &:hover {
    transition: all 0.3s linear;
    background-color: inherit;
    border-color: whitesmoke;
  }
`;

const Img4 = styled.img`
  position: absolute;
  bottom: -70px;
  left: 50%;
  transform:translateX(-50%);
`;
const Img1 = styled.img`
  position: absolute;
  bottom: 0;
  right: -40px;
`;

const Img3 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
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
        </LeftBox>
        <RightBox>
          <img src={bg} alt="two men between electronic gadget" />
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
