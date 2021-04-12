import styled from "styled-components";
import pattern from "../../../assets/Section1/pattern.png";


export const Wrapper = styled.div`
  height: 937px;
  width: 100%;
`;
export const Main = styled.div`
  max-width: 1200px;
  padding-top: 200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  grid-template-rows: 250px 200px;
  grid-template-areas:
    "text text text"
    "leftBox middleBox rightBox";
`;
export const Text = styled.div`
  grid-area: text;
 

`;
export const Title = styled.div`
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  line-height: 2.3em;
`;

export const TextTitle = styled.p`
  max-width: 600px;
  line-height: 1.5em;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  color: #8a8e91;
`;

export const LeftBox = styled.div`
  grid-area: leftBox;
  justify-self: center;
  text-align: center;
`;
export const MiddleBox = styled.div`
  grid-area: middleBox;
  justify-self: center;
  text-align: center;
`;
export const RightBox = styled.div`
  grid-area: rightBox;
  text-align: center;
  justify-self: center;
`;
export const TextImage = styled.p`
  padding-top: 20px;
  text-align: center;
  font-size: 1.7em;
  width: 250px;
`;

export const Pattern = styled.div`
background-image:url(${pattern});
background-size:contain;
width:100%;
height:100px;
background-repeat:repeat;
margin-top: 100px;
`;