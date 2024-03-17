import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

  const createdAt = formatDistance(data.created_at, new Date(), {
    addSuffix: true,
    locale: ptBR,
  })

  function handleNavigation() {
    navigate(`/post/${data.number}`)
  }

  return (
    <PostCardContainer onClick={handleNavigation}>
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
