import React from 'react';
import styled from 'styled-components';

function Card(props) {
  return (
    <CardContainer>
      <CardImage>
        <img
          src={props.product.image}
          style={{ width: '100%' }}
          alt='product'
        />
      </CardImage>
      <CardContent>
        <CardTitle>{props.product.name}</CardTitle>
        <CardText>
          {props.product.category} - ${props.product.price}
        </CardText>
      </CardContent>
    </CardContainer>
  );
}

export default Card;

const CardContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  -webkit-box-shadow: 1px 2px 5px #18314f66; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 2px 5px #18314f66; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 2px 5px #18314f66;
  color: #18314f;
  background: #fcfcfc;
  transition: ease 0.4s;
  &:hover {
    box-shadow: 1px 2px 10px #18314f99;
    transform: scale(1.01);
  }
`;
const CardImage = styled.div`
  width: 100%;
`;
const CardContent = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;

  justify-content: space-between;
  align-items: flex-end;
`;
const CardTitle = styled.h2`
  font-size: 16px;
`;
const CardText = styled.p`
  font-size: 12px;
  color: #d00000;
`;
