import styled from 'styled-components'

type Props = {
  children: any
}

const Wrapper = styled.div`
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
`

export const Controls = ({ children }: Props): JSX.Element => {
  return <Wrapper>{children}</Wrapper>
}

export default Controls
