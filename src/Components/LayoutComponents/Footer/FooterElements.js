import styled from "styled-components";
import {NavLink} from 'react-router-dom'
export const FooterContainer=styled.footer`
    background-color: rgba(226, 226, 226,0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 10px;
     /* @media screen and (min-width:2500px) {
        height: 50vh;
    } 
    @media screen and (max-width:480px) {
        height: 40vh;
    } */
`

export const LinksContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction:column;
    flex: 0.2;
    width: 600px;
    max-width:100%;
    margin-bottom: 40px;
    @media screen and (min-width: 2500px) {
        width: 700px;
        /* margin-bottom: 5px; */
    }
    @media screen and (max-width: 480px) {
        flex-direction: row;
        margin-bottom: 20px;
    }
`
export const TopLinkS=styled.div`
    display: flex;
    width: 100%;
    flex: 0.5;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    @media screen and (min-width:2500px) {
        margin-bottom: 15px;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        padding-left: 4.833512352309345vh;
    }
`
export const BottomLinks=styled.div`
    display: flex;
    width: 60%;
    flex: 0.5;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        padding-left: 4.833512352309345vh;
    }
`

export const SocialContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 0.3;
    @media screen and (max-width: 480px) {
    flex-direction: row;
 }

`
export const SvgContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0.4;
    &:nth-child(2){
        height:0vh ;
    }
`
export const ImgContainer=styled.div`
  flex: 0.2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Img=styled.img`
  height: 7.518796992481203vh;
  width: 6.981740064446831vh;
  @media screen and (max-width:480px){
      height: 6.981740064446831vh;
    width: 5.907626208378088vh;
  }
  @media screen and (max-width:280px){
    height: 5.981740064446831vh;
    width: 4.907626208378088vh;
  }
`
export const Title=styled.h1`
    font-size: 2.5rem;
    color: #FC6E20;
    font-family: "ABeatByKaiRegular";
    letter-spacing: 4px;
    margin-bottom: 0em;
    text-align: center;
    &>span{
        color: #424242;
        font-family: "ABeatByKaiRegular";
    }
    @media screen and (max-width:480px){
    font-size: 30px;
  }
  @media screen and (max-width:280px){
    font-size: 16px;
  }
`

export const FollowContainer=styled.div`
 flex: 0.8;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;

`
export const FollowUs =styled.label`
    font-size: 22px;
    color: #545454;
    font-family: "ABeatByKaiRegular";
    @media screen and (max-width:280px){
    font-size: 18px;
  }
    @media screen and (max-width:280px){
    font-size: 18px;
  }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`

export const Links=styled(NavLink)`
    font-size: 14px;
    text-transform: capitalize;
    line-height: 14px;
    color: #848B91;
    &:hover{
        color: #848B91;
    }
    @media screen and (min-width: 2500px) {
        font-size: 1.125rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 14px;
        margin-bottom: 5px;
    }
    @media screen and (max-width: 280px) {
        font-size: 10px;
        margin-bottom: 4px;
    }
`
export const FollowIcons=styled.a`
    color: #FC6E20;
    font-size: 2.25rem;
    margin-left: 10px;
    &:hover{
        color: #FC6E20;
    }
    @media screen and (max-width:480px) {
        font-size: 1.5rem;
        
    }
    @media screen and (max-width:280px) {
        font-size: 1rem;
        
    }
    
`
export const FirstPng=styled.img`
    height:  8vw;
    &:nth-child(3){
        margin-top:1.06439595529537vw ;
    }
    @media screen and (max-width: 768px) {
        height: 12vw;
    }
`