import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Info, Links, PostContainer, PostInfo, Title, Text } from './styles'
import { api } from '../../lib/axios'

interface DataProps {
  title: string
  created_at: string
  user: {
    login: string
  }
  comments: number
}

export function Post() {
  const [data, setData] = useState<DataProps>({
    title: '',
    created_at: new Date().toISOString(),
    user: {
      login: '',
    },
    comments: 0,
  } as DataProps)

  const { issueNumber } = useParams()
  const theme = useTheme()

  const createdAt = formatDistance(data.created_at, new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  useEffect(() => {
    async function getPost() {
      const response = await api.get(
        `repos/brunoseleghin/github-blog/issues/${issueNumber}`,
      )

      setData(response.data)
    }

    getPost()
  }, [issueNumber])

  return (
    <PostContainer>
      <PostInfo>
        <Links>
          <Link to={'/'}>
            <div>
              <FontAwesomeIcon
                icon={faChevronLeft}
                color={theme.blue}
                fontSize={12}
              />
              <span>Voltar</span>
            </div>
          </Link>

          <div>
            <a href="" target="_blank" rel="noreferrer">
              Ver no Github
            </a>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              color={theme.blue}
              fontSize={12}
            />
          </div>
        </Links>

        <Title>{data.title}</Title>

        <Info>
          <div>
            <FontAwesomeIcon
              icon={faGithub}
              color={theme['base-label']}
              fontSize={18}
            />
            <Text>{data.user.login}</Text>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faCalendarDay}
              color={theme['base-label']}
              fontSize={18}
            />
            <Text>{createdAt}</Text>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faComment}
              color={theme['base-label']}
              fontSize={18}
            />
            <Text>{data.comments} comentários</Text>
          </div>
        </Info>
      </PostInfo>
    </PostContainer>
  )
}
