import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import { Link } from 'react-router-dom'

import { PostCardContainer, Title, Created, Resume } from './styles'

interface PostCardProps {
  data: {
    id: number
    title: string
    created_at: string
    body: string
    number: number
  }
}

export function PostCard({ data }: PostCardProps) {
  const createdAt = formatDistance(data.created_at, new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostCardContainer>
      <Link to={`/post/${data.number}`}>
        <div>
          <Title>{data.title}</Title>
          <Created>{createdAt}</Created>
        </div>
        <Resume>
          <Markdown>{data.body}</Markdown>
        </Resume>
      </Link>
    </PostCardContainer>
  )
}
