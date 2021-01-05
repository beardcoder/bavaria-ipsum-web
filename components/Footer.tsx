import styled from 'styled-components'

const Wrapper = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  background: #121212;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  display: flex;
  text-decoration: none;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`

export const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <Link
        href="https://creativeworkspace.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        Desinged and Developed with 🦄 and ☕ by Markus Sommer
      </Link>
    </Wrapper>
  )
}

export default Footer
