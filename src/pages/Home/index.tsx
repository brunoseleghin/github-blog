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
import { useEffect, useState } from 'react'

interface User {
  id: number
  avatar: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  url: string
}

export function Home() {
  const theme = useTheme()
  const [user, setUser] = useState<User>({} as User)

  async function getUser() {
    const response = await fetch('https://api.github.com/users/brunoseleghin')
    const data = await response.json()

    const userData = {
      id: data.id,
      avatar: data.avatar_url,
      name: data.name,
      bio: data.bio,
      company: data.company,
      followers: data.followers,
      login: data.login,
      url: data.html_url,
    } as User

    setUser(userData)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <HomeContainer>
      <Header />

      <main>
        <Profile>
          <Avatar src={user.avatar} />

          <div>
            <NameContainer>
              <Name>{user.name}</Name>
              <div>
                <a href={user.url} target="_blank" rel="noreferrer">
                  Github
                </a>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  color={theme.blue}
                  fontSize={12}
                />
              </div>
            </NameContainer>

            <Bio>{user.bio}</Bio>

            <Info>
              <div>
                <FontAwesomeIcon
                  icon={faGithub}
                  color={theme['base-label']}
                  fontSize={18}
                />
                <Text>{user.login}</Text>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faBuilding}
                  color={theme['base-label']}
                  fontSize={18}
                />
                <Text>{user.company}</Text>
              </div>

              <div>
                <FontAwesomeIcon
                  icon={faUserGroup}
                  color={theme['base-label']}
                  fontSize={18}
                />
                <Text>{user.followers}</Text>
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
