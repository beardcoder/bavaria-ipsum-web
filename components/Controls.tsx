import styled from 'styled-components'

type Props = {
  children: any
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`

export const Controls = ({ children }: Props): JSX.Element => {
  return <Wrapper>{children}</Wrapper>
}

export default Controls
