import { styled } from 'styled-components'

export const PostCardContainer = styled.div`
  background-color: ${({ theme }) => theme['base-post']};
  padding: 32px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme['base-post']};

  div {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 20px;
  }

  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme['base-label']};
  }

  @media only screen and (max-width: 485px) {
    width: 364px;
  }

  @media only screen and (max-width: 385px) {
    width: 300px;
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

  @media only screen and (max-width: 900px) {
    width: 470px;
  }

  @media only screen and (max-width: 685px) {
    width: 564px;
  }

  @media only screen and (max-width: 585px) {
    width: 464px;
  }

  @media only screen and (max-width: 485px) {
    width: 220px;
  }

  @media only screen and (max-width: 385px) {
    width: 150px;
  }
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;

  a {
    color: ${({ theme }) => theme.blue};
    text-decoration: underline;
  }

  @media only screen and (max-width: 900px) {
    max-width: 552px;
  }

  @media only screen and (max-width: 685px) {
    max-width: 480px;
  }

  @media only screen and (max-width: 585px) {
    width: 400px;
  }

  @media only screen and (max-width: 485px) {
    width: 300px;
  }

  @media only screen and (max-width: 385px) {
    width: 200px;
  }
`
