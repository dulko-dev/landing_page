import styled from 'styled-components';
import {displayImage} from '../../Style/keyframes';

export const Ul = styled.ul`
  width: 180px;
  padding: 15px 0;
  background-color: #ffffff;
  color: #2a2d34;
`;

export const Li = styled.li`
  padding: 5px 20px;
  cursor: pointer;
  &:nth-child(n)::after {
    content: "\f054";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    right: 20px;
  }
  &:hover {
    color: #613dc1;
  }
`;

export const UlSecond = styled.ul`
  animation-name: ${displayImage};
  animation-duration: 0.5s;
  width: 190px;
  padding: 15px 0;
  position: absolute;
  left: -190px;
  background-color: #ffffff;
  top: 0;
`;

export const LiSecond = styled.li`
  padding: 5px 20px;
  color: #2a2d34;
  cursor: pointer;
  font-weight: normal;
  &:hover {
    color: #613dc1;
  }
`;

export const UlSecondM = styled(UlSecond)`
  top: 20px;
`;

export const UlSecondF = styled(UlSecond)`
  top: 45px;
`;

export const UlSecondD = styled(UlSecond)`
  top: 70px;
`;
