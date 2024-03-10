import { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
  SectionPost,
} from './styles'

import { Header } from '../../components/Header'
import { api } from '../../lib/axios'
import { useDebounce } from '../../hooks/useDebounce'
import { Post } from '../../components/Post'

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
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query)

  const theme = useTheme()
  const quantityOfPosts = posts.length

  async function loadUser() {
    const response = await api.get('users/brunoseleghin')
    const data = await response.data

    if (data) {
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
  }

  async function fetchPosts(query?: string) {
    const response = await api.get('search/issues', {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      params: {
        sort: 'created',
        order: 'desc',
        q: query
          ? `${query} repo:brunoseleghin/github-blog`
          : 'repo:brunoseleghin/github-blog',
      },
    })

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchPosts(debouncedQuery)
  }, [debouncedQuery])

  useEffect(() => {
    loadUser()
    fetchPosts()
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

        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <SectionPost>
          {posts.map((post) => {
            return <Post key={post.id} data={post} />
          })}
        </SectionPost>
      </main>
    </HomeContainer>
  )
}
