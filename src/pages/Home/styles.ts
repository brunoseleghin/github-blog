import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  main {
    display: flex;
    max-width: 864px;
    flex-direction: column;
    margin: -85px auto;

    input {
      padding: 12px 16px;
      background-color: ${({ theme }) => theme['base-input']};
      border: 1px solid ${({ theme }) => theme['base-border']};
      border-radius: 6px;
      color: ${({ theme }) => theme['base-text']};

      &::placeholder {
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`

export const Profile = styled.div`
  position: relative;
  display: flex;
  gap: 32px;

  width: 864px;
  padding: 32px 40px;
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
`

export const Avatar = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 100px;
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  div {
    height: 21px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-bottom: 1px solid ${({ theme }) => theme['base-profile']};

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.blue};
    }
  }

  a {
    font-size: 12px;
    font-weight: bold;
    line-height: 160%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
  }
`

export const Name = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme['base-title']};
  font-weight: bold;
  line-height: 160%;
`

export const Bio = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-text']};
  font-weight: normal;
  line-height: 160%;
  margin-bottom: 24px;

  width: 612px;
`

export const Info = styled.div`
  display: flex;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Text = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-subtitle']};
  font-weight: normal;
  line-height: 160%;
`

export const PublicationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 72px;
`

export const Publications = styled.span`
  color: ${({ theme }) => theme['base-title']};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 160%;
  margin-bottom: 12px;
`

export const NumbersOfPublications = styled.span`
  color: ${({ theme }) => theme['base-span']};
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 160%;
  margin-bottom: 12px;
`

export const SectionPost = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  margin-top: 48px;
  margin-bottom: 100px;
`

export const Post = styled.div`
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

export const Resume = styled.p`
  color: ${({ theme }) => theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  max-width: 352px;

  height: 120px;
  width: 352px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
`
