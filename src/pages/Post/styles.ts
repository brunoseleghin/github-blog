import styled from 'styled-components'

export const PostContainer = styled.main``

export const PostInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: -85px auto;
`

export const PostInfo = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 32px;
  width: 864px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.2);
`

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  a {
    font-size: 12px;
    font-weight: bold;
    line-height: 160%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.blue};
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Title = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme['base-title']};
  font-weight: bold;
  line-height: 160%;
  margin-bottom: 12px;
`

export const Info = styled.div`
  display: flex;
  gap: 32px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

export const Text = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-span']};
  font-weight: normal;
  line-height: 160%;
`
export const Content = styled.div`
  margin: 80px 0px;
  padding: 40px 32px;
  width: 864px;

  margin: 80px auto;

  p {
    margin: 5px 0;
    font-family: 'Nunito', sans-serif;
    color: ${({ theme }) => theme['base-text']};
    font-size: 1rem;
    line-height: 160%;
    font-style: normal;

    a {
      color: ${({ theme }) => theme.blue};
      text-decoration: underline;
    }
  }

  h2,
  h3 {
    color: ${({ theme }) => theme.blue};
    margin: 20px 0;
  }

  blockquote {
    border-left: 5px solid ${({ theme }) => theme['base-border']};
    padding: 2px 20px;
    margin: 10px 0;
    opacity: 80%;

    em {
      display: flex;
    }
  }

  ul {
    margin: 10px 30px;

    li {
      line-height: 160%;
    }
  }

  code {
    display: flex;
    padding: 16px;
    background-color: ${({ theme }) => theme['base-post']};
    border-radius: 2px;
    margin: 15px 0;
  }
`
