import React from 'react';

import { 
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body, 
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no Twitter"/>
              <SearchIcon />
          </SearchWrapper>

          <Body>
                <List 
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion 
                            name="Ana Cláudia"
                            nickname="@aninha"
                        />,
                        <FollowSuggestion 
                            name="Victor Almeida"
                            nickname="@victor21"
                        />,
                        <FollowSuggestion 
                            name="Luis Carlos"
                            nickname="@lc2013"
                        />,
                    ]}
                />
                <List 
                    title="Talvez você curta"
                    elements={[
                        <h1>Teste</h1>
                    ]}
                />
          </Body>
      </Container>
  );
}

export default SideBar;