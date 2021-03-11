import styled from 'styled-components';

export const ElementWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-content: center;
`;

export const EachColumn = styled.div`
  padding: 30px 0;
`;

export const H2Style = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 10px;
`;

export const Li = styled.li`
  padding: 5px 0;
  &:hover {
    cursor: pointer;
    color: #613DC1;
  }
`;