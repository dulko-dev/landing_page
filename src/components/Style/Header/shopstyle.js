import styled from 'styled-components';

export const UlStyle = styled.ul`
  width: 300px;
  color: #2a2d34;
`;

export const LiStyle = styled.li`
  display: grid;
  background-color: #ffffff;
  grid-template-columns: minmax(30%, auto);
  grid-template-rows: minmax(40%, auto);
  padding: 20px 0;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: 0.4s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }
`;

export const LiI = styled.i`
  grid-column: 1/2;
  grid-row: 1/3;
  justify-self: center;
  color: #613dc1;
`;
export const LiH = styled.h3`
  font-weight: 600;
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: start;
  justify-self: start;
`;
export const LiP = styled.p`
  grid-column: 2/3;
  grid-row: 2/3;
  align-self: center;
  justify-self: start;
`;