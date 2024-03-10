import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

import { PostCardContainer, Title, Created, Resume } from './styles'

interface PostCardProps {
  data: {
    id: number
    title: string
    created_at: string
    body: string
  }
}

export function PostCard({ data }: PostCardProps) {
  const createdAt = formatDistance(data.created_at, new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostCardContainer>
      <div>
        <Title>{data.title}</Title>
        <Created>{createdAt}</Created>
      </div>
      <Resume>
        <Markdown>{data.body}</Markdown>
      </Resume>
    </PostCardContainer>
  )
}
