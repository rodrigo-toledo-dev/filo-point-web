import styled, { css } from 'styled-components';

export const ContainerImage = styled.div`
  display: flex;
  flex: 1;
  ${props => {
    if (!props.avoidFullHeight) {
      return css`
        height: 80vh;
      `;
    }
  }}
  justify-content: center;
  align-items: center;
`;

export const CustomImage = styled.img`
  height: 130px;
  width: 130px;
  border-radius: 60px;
  margin: 5px;
  border: 5px solid #fff;
  cursor: pointer;
`;
