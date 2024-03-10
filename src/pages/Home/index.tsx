import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import Markdown from 'react-markdown'

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Header } from '../../components/Header'

import { dateFormatter } from '../../utils/formatter'

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

interface Posts {
  id: number
  title: string
  created_at: string
  body: string
}

export function Home() {
  const [user, setUser] = useState<User>({} as User)
  const [posts, setPosts] = useState<Posts[]>([])

  const theme = useTheme()

  const quantityOfPosts = posts.length

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

  async function getPosts() {
    const response = await fetch(
      `https://api.github.com/search/issues?q=repo:brunoseleghin/github-blog`,
    )
    const data = await response.json()

    setPosts(data.items)
  }

  useEffect(() => {
    getUser()
    getPosts()
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
          <NumbersOfPublications>
            {quantityOfPosts} publicações
          </NumbersOfPublications>
        </PublicationsContainer>

        <input type="text" placeholder="Buscar conteúdo" required />

        <SectionPost>
          {posts.map((post) => {
            return (
              <Post key={post.id}>
                <div>
                  <Title>{post.title}</Title>
                  <Created>
                    {dateFormatter.format(new Date(post.created_at))}
                  </Created>
                </div>
                <Resume>
                  <Markdown>{post.body}</Markdown>
                </Resume>
              </Post>
            )
          })}
        </SectionPost>
      </main>
    </HomeContainer>
  )
}
