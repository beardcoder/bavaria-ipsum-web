import styled from 'styled-components'

type Props = {
  children: any
}

const Wrapper = styled.header`
  background-image: url('/header.jpg');
  background-position: center center;
  height: 470px;
  display: flex;
  flex-flow: column;
  align-items: center;
`

export const Header = ({ children }: Props): JSX.Element => {
  return <Wrapper>{children}</Wrapper>
}

export default Header
