import styled from 'styled-components'
import InputSlider from 'react-input-slider'

type Props = {
  label: string
  id: string
  value: number
  min: number
  max: number
  onChange: (value: number) => void
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
  align-items: center;
`
const InputValue = styled.div`
  padding-right: 15px;
  margin-right: 15px;
  border-right: 1px solid #666;
  display: inline-block;
`

export const Slider = ({
  label,
  id,
  value,
  min,
  max,
  onChange,
}: Props): JSX.Element => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputWrapper>
        <InputValue>{value}</InputValue>
        <InputSlider
          styles={{
            track: {
              backgroundColor: '#666',
              height: 3,
            },
            active: {
              backgroundColor: '#666',
              height: 3,
            },
            thumb: {
              backgroundColor: '#FBC638',
              boxShadow: '0 0 0 transparent',
            },
          }}
          xmin={min}
          xmax={max}
          x={value}
          axis="x"
          onChange={({ x }) => onChange(x)}
        />
      </InputWrapper>
    </Wrapper>
  )
}

export default Slider
