import styled from 'styled-components'

const Label = styled.p`
  color: ${({ theme }) => theme.colors.textLightBlue};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  margin-bottom: 8px;
  /* padding: 13px 16px; */
  /* margin-bottom: 16px; */
`
const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-template-rows: 1fr;
  background: #00000033;
  border-radius: 8px;
  margin-bottom: 16px;
  /* padding: 13px 16px; */
  /* margin-bottom: 16px; */
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  padding-left: 13px;
  border: none;
  background: #00000008;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.primary};
  &:hover :placeholder-shown {
    background: #00000020;
    border-radius: 8px;
  }
`

const TextField = ({ label, placeholder, autoFocus, hide }) => {
  return (
    <>
      <Label> {label} </Label>
      <InputWrapper>
        <Input autoFocus={autoFocus} placeholder={placeholder} />
      </InputWrapper>
    </>
  )
}

export default TextField
