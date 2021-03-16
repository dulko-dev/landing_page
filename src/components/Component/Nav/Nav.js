import React from "react";
import bg from "../../../assets/nav/pie.png";
import img4 from "../../../assets/nav/elements_four.png";
import img3 from "../../../assets/nav/elements_three.png";
import img1 from "../../../assets/nav/elements_one.png";
import img5 from "../../../assets/nav/elements_five.png";
import img6 from "../../../assets/nav/elements_six.png";
import img2 from "../../../assets/nav/elements_two.png";

import {
  NavWrapper,
  WrappBoxes,
  LeftBox,
  Title,
  Text,
  Button,
  ImgDiv2SmallBalls,
  Img5,
  Img6,
  Img2,
  Img4,
  Img3,
  Img1,
  RightBox,
  ImgDivRedDoughnut,
  ImgDiv2Balls,
  Img3Div,
} from "../../Style/Nav/navstyle";

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
          <Button type="button" onClick={() => (window.location.href = "/#")}>
            Try for Free
          </Button>
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
