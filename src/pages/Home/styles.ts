import styled from 'styled-components'

export const HomeContainer = styled.div`
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

    @media only screen and (max-width: 900px) {
      max-width: 664px;
      margin: -55px auto;
    }

    @media only screen and (max-width: 685px) {
      input {
        margin: 0 auto;
        width: 564px;
      }
    }

    @media only screen and (max-width: 585px) {
      input {
        margin: 0 auto;
        width: 464px;
      }
    }

    @media only screen and (max-width: 485px) {
      margin: -35px auto;

      input {
        margin: 0 auto;
        width: 364px;
      }
    }

    @media only screen and (max-width: 385px) {
      margin: -25px auto;

      input {
        margin: 0 auto;
        width: 300px;
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

  @media only screen and (max-width: 900px) {
    width: 664px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 685px) {
    width: 564px;
    padding: 22px 20px;
    gap: 22px;
  }

  @media only screen and (max-width: 585px) {
    width: 464px;
    padding: 22px 20px;
    gap: 22px;
  }

  @media only screen and (max-width: 485px) {
    width: 364px;
    padding: 12px 12px;
    gap: 12px;
  }

  @media only screen and (max-width: 385px) {
    width: 280px;
    padding: 12px 12px;
    gap: 12px;
  }
`

export const Avatar = styled.img`
  height: 148px;
  width: 148px;
  border-radius: 100px;

  @media only screen and (max-width: 900px) {
    height: 128px;
    width: 128px;
  }

  @media only screen and (max-width: 685px) {
    height: 90px;
    width: 90px;
  }

  @media only screen and (max-width: 485px) {
    height: 80px;
    width: 80px;
  }

  @media only screen and (max-width: 385px) {
    height: 60px;
    width: 60px;
  }
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

  @media only screen and (max-width: 485px) {
    div {
      svg {
        height: 8px;
        width: 8px;
      }
    }

    a {
      font-size: 0.6rem;
    }
  }
`

export const Name = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  color: ${({ theme }) => theme['base-title']};
  font-weight: bold;
  line-height: 160%;

  @media only screen and (max-width: 685px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 585px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 485px) {
    font-size: 0.8rem;
  }
`

export const Bio = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-text']};
  font-weight: normal;
  line-height: 160%;
  margin-bottom: 24px;

  width: 612px;

  @media only screen and (max-width: 900px) {
    width: 452px;
  }

  @media only screen and (max-width: 685px) {
    width: 400px;
  }

  @media only screen and (max-width: 585px) {
    width: 300px;
  }

  @media only screen and (max-width: 485px) {
    width: 200px;
    font-size: 0.8rem;

    margin-bottom: 10px;
  }

  @media only screen and (max-width: 385px) {
    width: 150px;
    font-size: 0.5rem;

    margin-bottom: 10px;
  }
`

export const Info = styled.div`
  display: flex;
  gap: 24px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media only screen and (max-width: 485px) {
    gap: 14px;

    svg {
      height: 15px;
      width: 15px;
    }
  }

  @media only screen and (max-width: 385px) {
    gap: 10px;

    svg {
      height: 12px;
      width: 12px;
    }
  }
`

export const Text = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme['base-subtitle']};
  font-weight: normal;
  line-height: 160%;

  @media only screen and (max-width: 485px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 385px) {
    font-size: 0.5rem;
  }
`

export const PublicationsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 72px;

  @media only screen and (max-width: 685px) {
    width: 564px;
    margin: 72px auto 0px;
  }

  @media only screen and (max-width: 585px) {
    width: 464px;
    margin: 72px auto 0px;
  }

  @media only screen and (max-width: 485px) {
    width: 364px;
  }

  @media only screen and (max-width: 385px) {
    width: 300px;
  }
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
  gap: 22px;

  margin-top: 48px;
  margin-bottom: 100px;

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 685px) {
    width: 564px;
    margin: 48px auto 100px;
  }

  @media only screen and (max-width: 585px) {
    width: 464px;
  }

  @media only screen and (max-width: 485px) {
    width: 364px;
  }

  @media only screen and (max-width: 385px) {
    width: 300px;
  }
`
