import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

import { PostContainer, Title, Created, Resume } from './styles'

interface PostProps {
  data: {
    id: number
    title: string
    created_at: string
    body: string
  }
}

export function Post({ data }: PostProps) {
  const createdAt = formatDistance(data.created_at, new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostContainer>
      <div>
        <Title>{data.title}</Title>
        <Created>{createdAt}</Created>
      </div>
      <Resume>
        <Markdown>{data.body}</Markdown>
      </Resume>
    </PostContainer>
  )
}
