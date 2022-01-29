import React from "react";
import { CardContainer, ImgContainer,DescContainer,Img,Date,Title,Description,SeeMore} from "./NewsCardElements";
const NewsCard = ({thumbnail,title,dateposted,description}) => {
  return (
    <CardContainer>
      <ImgContainer>
        <Img src={thumbnail} alt="thumbnail"/>
      </ImgContainer>
      <DescContainer>
          <Title>{title}</Title>
          <Date>Posted on {dateposted}</Date>
          <Description>{description}</Description>
          <SeeMore to="/signup">See More</SeeMore>
      </DescContainer>
    </CardContainer>
  );
};

export default NewsCard;
