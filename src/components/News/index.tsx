import React from 'react';

import { Container } from './styles';

interface Props {
    subject: string;
    description: string;
}

const News: React.FC<Props> = ({subject, description}) => {
  return (
      <Container>
          <span>{subject}</span>
          <strong>{description}</strong>
      </Container>
  );
}

export default News;