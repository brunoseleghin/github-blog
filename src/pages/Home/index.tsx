import {
  HomeContainer,
  Name,
  NameContainer,
  Profile,
  Avatar,
  Bio,
  Text,
  Info,
  PublicationsContainer,
  Publications,
  NumbersOfPublications,
  Post,
  Title,
  Created,
  Resume,
  SectionPost,
} from './styles'

import { Header } from '../../components/Header'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  return (
    <HomeContainer>
      <Header />

      <main>
        <Profile>
          <Avatar src="https://github.com/brunoseleghin.png" />

          <div>
            <NameContainer>
              <Name>Bruno Seleghin</Name>
              <div>
                <a
                  href="https://github.com/brunoseleghin"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  color={theme.blue}
                  fontSize={12}
                />
              </div>
            </NameContainer>

            <Bio>
              {`I'm passionate about technology and programming. I always like to
              feel that I'm evolving, for this reason I always seek to be
              learning something. 👨‍💻`}
            </Bio>

            <Info>
              <div>
                <FontAwesomeIcon
                  icon={faGithub}
                  color={theme['base-label']}
                  fontSize={18}
                />
                <Text>brunoseleghin</Text>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faBuilding}
                  color={theme['base-label']}
                  fontSize={18}
                />
                <Text>Totvs</Text>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faUserGroup}
                  color={theme['base-label']}
                  fontSize={18}
                />
                <Text>32 seguidores</Text>
              </div>
            </Info>
          </div>
        </Profile>

        <PublicationsContainer>
          <Publications>Publicações</Publications>
          <NumbersOfPublications>6 publicações</NumbersOfPublications>
        </PublicationsContainer>

        <input type="text" placeholder="Buscar conteúdo" required />

        <SectionPost>
          <Post>
            <div>
              <Title>JavaScript data types and data structures</Title>
              <Created>Há 1 dia</Created>
            </div>
            <Resume>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </Resume>
          </Post>

          <Post>
            <div>
              <Title>JavaScript data types and data structures</Title>
              <Created>Há 1 dia</Created>
            </div>
            <Resume>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </Resume>
          </Post>

          <Post>
            <div>
              <Title>JavaScript data types and data structures</Title>
              <Created>Há 1 dia</Created>
            </div>
            <Resume>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </Resume>
          </Post>

          <Post>
            <div>
              <Title>JavaScript data types and data structures</Title>
              <Created>Há 1 dia</Created>
            </div>
            <Resume>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </Resume>
          </Post>

          <Post>
            <div>
              <Title>JavaScript data types and data structures</Title>
              <Created>Há 1 dia</Created>
            </div>
            <Resume>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </Resume>
          </Post>

          <Post>
            <div>
              <Title>JavaScript data types and data structures</Title>
              <Created>Há 1 dia</Created>
            </div>
            <Resume>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in
            </Resume>
          </Post>
        </SectionPost>
      </main>
    </HomeContainer>
  )
}
