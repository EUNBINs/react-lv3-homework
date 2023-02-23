import React from 'react'
import styled, { css } from 'styled-components';


// Primary Button
const PrimitiveButton = ({ children, rightSlot, ...restProps }) => {
  return (
    <StButton {...restProps}>
      {rightSlot ? (
        <ButtonInner>
          <>{children}</>
          <>{rightSlot}</>
        </ButtonInner>
      ) : (
        <>{children}</>
      )}
    </StButton>
  )
}

// Primary Button Style
const PrimaryButton = (props) => {
  return (
    <PrimitiveButton 
      {...props}
      bc='#FFA98F'
      color='#000000'
      activeBc='#FF7F50'
    />
  )
}

// Primary Button Style
const NegativeButton = (props) => {
  return (
    <PrimitiveButton 
      {...props}
      bc='#00CDFF'
      color='#000000'
      activeBc='#1E90FF'
    />
  )
}

const Primary = PrimaryButton;
const Negative = NegativeButton;

const Button = { Negative, Primary }

export default Button;

const StButton = styled.button`
  border : none;
  cursor : pointer;

  border-radius: 8px;
  background-color: ${({ bc }) => bc};
  color : ${({ color }) => color };
  font-weight: ${({ fw }) => fw};

  &:active {
    background-color: ${({ activeBc }) => activeBc };
  }

  ${({ size }) => {
    switch (size) {
      case "large" :
        return css`
          height : 50px;
          width : 200px;
        `;
      case "medium" :
        return css`
          height : 45px;
          width : 130px;
        `;
      case "small" : 
        return css`
          height : 40px;
          width: 100px;
        `;
      default :
        return css`
          height : 40px;
          width : 100px;
      `
    }
  }}

  ${({ outlined, bc }) => {
    if (outlined) {
      return css`
        border : 3px solid ${bc};
        background-color: #fff;
        font-weight: 600;

        &:active {
          background-color: #eeeeee;
        }
      `;
    }
  }}
`;

const ButtonInner = styled.div`
  display : flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
`

