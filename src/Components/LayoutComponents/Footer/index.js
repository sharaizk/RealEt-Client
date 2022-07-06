import React from "react";
import {
  FooterContainer,
  LinksContainer,
  TopLinkS,
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
  FirstPng,
} from "./FooterElements";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import Logo from "../../../assets/images/logo2.png";
import First from "../../../assets/images/footer/first.svg";
import Second from "../../../assets/images/footer/second.svg";
import Third from "../../../assets/images/footer/third.svg";
import Fourth from "../../../assets/images/footer/fourth.svg";
const Footer = () => {
  return (
    <FooterContainer>
      <LinksContainer>
        <TopLinkS>
          <Links to="/about-us">About Us</Links>
          <Links to="/tos">Terms of Services</Links>
          <Links to="/privacy">Privacy</Links>
          <Links to="/our-story">Our Story</Links>
        </TopLinkS>
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
            <FollowIcons
              href="https://www.facebook.com/BeRealEt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </FollowIcons>
            <FollowIcons
              href="https://twitter.com/realet_pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </FollowIcons>
            <FollowIcons
              href="https://www.instagram.com/real_et_pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </FollowIcons>

            <FollowIcons
              href="https://www.pinterest.com/RealEt_pk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterestP />
            </FollowIcons>
          </IconContainer>
        </FollowContainer>
      </SocialContainer>
      <SvgContainer>
        <FirstPng src={First} alt="first-footer-img" />
        <FirstPng src={Second} />
        <FirstPng src={Third} />
        <FirstPng src={Fourth} />
      </SvgContainer>
    </FooterContainer>
  );
};

export default Footer;
