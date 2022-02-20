import React from 'react';
import styled from 'styled-components';

class BaseBtn extends React.Component{
  render() {
    return (
      <BtnCont>
        <BtnText>{ this.props.text }</BtnText>
      </BtnCont>
    )
  }
}

export default class GetStartedBtn extends React.Component{
  render() {
    return <BaseBtn text="Get Started" />
  }
}

const BtnCont = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 20px;
  
  background-color: #00918E;

  width: 258px;
  height: 77px;

  :hover {
    opacity: 0.5;
  }
`

const BtnText = styled.p`
  font-family: Poppins;
  font-size: 24px;
  color: #FFFFFF;
`