import React from "react";
import {
  NewsContainer,
  CaptionContainer,
  SectionHead,
  SectionSubHead,
  ListContainer,
} from "./LandSectionElements";

import { Row, Col } from "antd";
import NewsCard from "../../../CustomComponents/NewsCard";

const LandSection3 = () => {
  const newsList = [
    {
      thumbnail:
        "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1979&q=80",
      title: "Future of Construction",
      dateposted: "Tue, Dec 12, 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "AI based architecture",
      dateposted: "Tue, Dec 12, 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80",
      title: "VR Tour",
      dateposted: "Tue, Dec 12, 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
    {
      thumbnail:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Economic Crisis",
      dateposted: "Tue, Dec 12, 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    },
  ];

  const RenderNews = () => {
    return newsList.map((news, i) => {
      return (
        <Col key={i} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <NewsCard thumbnail={news.thumbnail} title={news.title} dateposted={news.dateposted} description={news.description}/>
        </Col>
      );
    });
  };

  return (
    <NewsContainer>
      <CaptionContainer>
        <SectionHead>Daily News</SectionHead>
        <SectionSubHead>
          Read the Latest News, All Under One Roof.
          <br />
          No spam, just the news that matters.
        </SectionSubHead>
      </CaptionContainer>
      <ListContainer>
        <Row gutter={[24, 24]}>
            {RenderNews()}
        </Row>
      </ListContainer>
    </NewsContainer>
  );
};

export default LandSection3;
