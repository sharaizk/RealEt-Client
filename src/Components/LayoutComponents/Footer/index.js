import React from "react";
import {
  FooterContainer,
  LinksContainer,
  TopLinkS,
  BottomLinks,
  SocialContainer,
  SvgContainer,
  Links,
  Img,
  FollowContainer,
  ImgContainer,
  Title,
  FollowUs,
  IconContainer,
  FollowIcons,
} from "./FooterElements";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn,FaPinterestP } from "react-icons/fa";
import Logo from "../../../assets/images/logo2.png";
const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <TopLinkS>
          <Links to="/">About Us</Links>
          <Links to="/">Press Releases</Links>
          <Links to="/">Terms of Services</Links>
          <Links to="/">Privacy</Links>
          <Links to="/">Contact Us</Links>
        </TopLinkS>
        <BottomLinks>
          <Links to="/">Research</Links>
          <Links to="/">Help</Links>
          <Links to="/">Careers</Links>
          <Links to="/">Blog</Links>
          <Links to="/">Our Story</Links>
        </BottomLinks>
      </LinksContainer>
      <SocialContainer>
        <ImgContainer>
          <Img src={Logo} alt="logo" />
          <Title>
            Real<span>Et</span>
          </Title>
        </ImgContainer>
        <FollowContainer>
          <FollowUs>Follow Us</FollowUs>
          <IconContainer>
            <FollowIcons href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </FollowIcons>
            <FollowIcons href="https://twitter.com/home" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </FollowIcons>
            <FollowIcons href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </FollowIcons>
            <FollowIcons href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </FollowIcons>
            <FollowIcons href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP />
            </FollowIcons>
          </IconContainer>
        </FollowContainer>
      </SocialContainer>
      <SvgContainer>SVG</SvgContainer>
    </FooterContainer>
  );
};

export default Footer;
