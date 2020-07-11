import React from "react";

import { 
    Container,
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon, 
} from "./styles";

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
          <Avatar />

          <Content>
              <Header>
                  <strong>Syond</strong>
                  <span>@syond</span>
                  <Dot />
                  <time>10 de jul</time>
              </Header>
          
          
            <Description>Me segue aí!</Description>

            <ImageContent />

            <Icons>
                <Status>
                    <CommentIcon />
                    14
                </Status>
                <Status>
                    <RetweetIcon />
                    28
                </Status>
                <Status>
                    <LikeIcon />
                    659
                </Status>
            </Icons>
          </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
