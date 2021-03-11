import styled from 'styled-components';
import {displayImage} from '../../Style/keyframes';

export const Ul = styled.ul`
  width: 250px;
  padding: 10px 0;
  color: #2a2d34;
`;

export const Li = styled.li`
  margin: 10px 0;
  padding: 0 16px;
  &:nth-child(1)::after,
  &:nth-child(2)::after,
  &:nth-child(3)::after,
  &:nth-last-child(3)::after {
    content: "\f054";
    position: absolute;
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    right: 20px;
  }
  &:hover {
    color: #613DC1;
    transition: 0.2s;
    cursor: pointer;
  }
`;
export const CareerUl = styled.ul`
  position: absolute;
  right: -160px;
  top: 0;
  background-color: #ffffff;
  animation-name: ${displayImage};
  animation-duration: 0.5s;
`;

export const ServicesUl = styled(CareerUl)`
  top: 20px;
`;
export const CaseUl = styled(CareerUl)`
  top: 50px;
`;
export const ContactUl = styled(CareerUl)`
  top: 235px;
`;

export const CareerLi = styled.li`
  width: 130px;
  padding: 0 20px;
  margin: 10px 0;
  color: #2a2d34;
  &:hover {
    color: #613DC1;
  }
`;