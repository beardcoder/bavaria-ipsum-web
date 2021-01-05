import styled from 'styled-components'

type Props = {
  label: string
  id: string
  value: number | string
  min: number | string
  max: number | string
  onChange: (value: string) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`

const Label = styled.label`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`

const InputWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 9999999px;
  height: 40px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
`

export const Slider = ({
  label,
  id,
  value,
  min,
  max,
  onChange,
}: Props): JSX.Element => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <InputWrapper>
      <input
        id={id}
        value={value}
        type="range"
        min={min}
        max={max}
        onChange={(event) => onChange(event.target.value)}
      ></input>
    </InputWrapper>
  </Wrapper>
)

export default Slider
