import styled from 'styled-components'
import bavariaIpsum from '@beardcoder/bavaria-ipsum'
import { renderToStaticMarkup } from 'react-dom/server'
import Clipboard from 'react-clipboard.js'
import { BsTextLeft, BsCodeSlash } from 'react-icons/bs'
import { toast } from 'react-toastify'

type Props = {
  paragraphs: number
  lenght: number
}

export const Blindtext = ({ lenght, paragraphs }: Props): JSX.Element => {
  const blindtext = bavariaIpsum({
    minSentenceWords: Math.ceil((lenght * 10) / 1.5),
    maxSentenceWords: Math.ceil(lenght * 10 * 1.5),
  }).generateParagraph(paragraphs)

  const blindtextHtml = (
    <>
      {blindtext.map((line: string, i: number | string) => (
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
    margin-left: auto;
    margin-right: auto;
  `

  const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
  `

  const BlindtextWrapper = styled.div`
    background-color: #f1f1f1;
    padding: 20px;
    font-family: 'Germania One';
    font-size: 18px;
  `

  const notify = () => toast.success('Text Kopiert')

  const Button = ({ className, children, text }) => (
    <Clipboard
      onClick={notify}
      className={className}
      data-clipboard-text={text}
    >
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
      <BlindtextWrapper>{blindtextHtml}</BlindtextWrapper>
    </Wrapper>
  )
}

export default Blindtext
