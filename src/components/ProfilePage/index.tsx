import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
        <Banner>
          <Avatar />
        </Banner>

        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>

          <h1>Syond Santos</h1>
          <h2>@syond</h2>

          <p>
            Full Stack Developer <a href="https://github.com/syond">@Github</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Rio de Janeiro, Brazil
            </li>
            <li>
              <CakeIcon />
              Nascido em 04 de maio
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>109</strong>
            </span>
            <span>
              <strong>960</strong> seguidores
            </span>
          </Followage>
        </ProfileData>
        
        <Feed />
      </Container>
  );
}

export default ProfilePage;