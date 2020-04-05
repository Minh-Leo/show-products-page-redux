import React from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <FooterContainer>
      <IconContainer>
        <FooterIcon icon={faFacebook} />
        <FooterIcon icon={faInstagram} />
        <FooterIcon icon={faTwitter} />
        <FooterIcon icon={faYoutube} />
      </IconContainer>
      <FooterContent>
        Copyright &copy; 2020 by Minh Bui. All Rights Reserved.
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  background: linear-gradient(to bottom, #384e7755, #384e77cc),
    url('https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg');
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  bottom: 0;
`;
const FooterContent = styled.p`
  width: 50%;
  text-align: center;
  font-size: 12px;
`;
const IconContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 18px;
  margin: 10px;
  &:hover {
    color: #18314f;
  }
`;
