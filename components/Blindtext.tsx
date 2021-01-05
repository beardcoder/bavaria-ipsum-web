import styled from 'styled-components'
import BavariaIpsum from '../lib/bavaria-ipsum'
import { renderToStaticMarkup } from 'react-dom/server'
import Clipboard from 'react-clipboard.js'
import { BsTextLeft, BsCodeSlash } from 'react-icons/bs'

type Props = {
  paragraphs: number
  lenght: number
}

export const Blindtext = ({ lenght, paragraphs }: Props): JSX.Element => {
  const blindtext = BavariaIpsum({
    minSentenceWords: Math.ceil((lenght * 10) / 1.5),
    maxSentenceWords: Math.ceil(lenght * 10 * 1.5),
  }).generateParagraph(paragraphs)

  const blindtextHtml = (
    <>
      {blindtext.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  )

  const Wrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 16px;
    max-width: 600px;
    padding: 30px;
    border: 2px solid #333;
    margin-left: auto;
    margin-right: auto;
  `

  const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  `

  const Button = ({ className, children, text }) => (
    <Clipboard className={className} data-clipboard-text={text}>
      {children}
    </Clipboard>
  )

  const StyledButton = styled(Button)`
    color: inherit;
    background-color: transparent;
    border: 0 none;
    padding: 0;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    vertical-align: center;
  `

  return (
    <Wrapper>
      <Buttons>
        <StyledButton className="" text={blindtext.join('\n')}>
          <BsTextLeft
            style={{ verticalAlign: 'text-bottom', marginRight: '10px' }}
            size={20}
          />{' '}
          Als Text Kopieren
        </StyledButton>
        <StyledButton className="" text={renderToStaticMarkup(blindtextHtml)}>
          <BsCodeSlash
            style={{ verticalAlign: 'text-bottom', marginRight: '10px' }}
            size={20}
          />
          Als HTML Kopieren
        </StyledButton>
      </Buttons>
      {blindtextHtml}
    </Wrapper>
  )
}

export default Blindtext
