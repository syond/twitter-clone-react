import React from "react";
import StickyBox from "react-sticky-box";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

import List from "../List";
import FollowSuggestion from "../FollowSuggestion";
import News from "../News";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Ana Cláudia" nickname="@aninha" />,
              <FollowSuggestion name="Victor Almeida" nickname="@victor21" />,
              <FollowSuggestion name="Luis Carlos" nickname="@lc2013" />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News
                subject="Assuntos do momento no Brasil"
                description="Neymar cai de novo"
              />,
              <News subject="Mundo" description="Fim da pandemia" />,
              <News
                subject="#humor"
                description="Conheça as novas piadas de tiozão do churrasco"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
