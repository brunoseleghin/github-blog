import { styled } from 'styled-components'

export const PostCardContainer = styled.div`
  background-color: ${({ theme }) => theme['base-post']};
  padding: 32px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme['base-post']};

  div {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
  }

  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};
  }
`

export const Title = styled.p`
  color: ${({ theme }) => theme['base-title']};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 160%;
  max-width: 270px;

  height: 64px;
  width: 283px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`

export const Created = styled.span`
  color: ${({ theme }) => theme['base-span']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 160%;
`

export const Resume = styled.span`
  color: ${({ theme }) => theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  max-width: 352px;

  height: 130px;
  width: 352px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
`
