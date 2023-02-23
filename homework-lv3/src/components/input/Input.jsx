import React, { useState } from 'react'
import styled from 'styled-components'

function PrmitiveInput ( { value, ...restProps } ) {
  return (
    <StInput {...restProps} value={value.format ?? value} type='text' />
  )
}

// Normal
const NormalInput = ( { getValues } ) => {
  const [value, setValue] = useState('')

  const onChangeHandler = (event) => {
    const { value } = event.target
    setValue(event.target.value)
    getValues(value)
  }
  return <PrmitiveInput onChange={onChangeHandler} value={value} />
}

// Price
const PriceFormatInput = ( { getValues } ) => {
  const [value, setValue] = useState({
    raw: '0',
    format: '0',
  })
  const onChangeHandler = ( { target } ) => {
    // 숫자만 반환
    const rex = /\D/g;

    const raw = target.value.replaceAll(',', '')
    const format = new Intl.NumberFormat().format(
      target.value.replaceAll(',', '')
    )

    if (!rex.test(target.value.replaceAll('',''))) {
      setValue((old) => ({
        ...old,
        raw,
        format
      }));
      // && and ,  || or
      getValues && getValues({ raw, format })
    }
  }
  return <PrmitiveInput onChange={onChangeHandler} value={value} />
}

const Price = PriceFormatInput;
const Normal = NormalInput;

export { Price, Normal };

const StInput = styled.input`
  border : 1px solid #333333;
  height : 40px;
  width : 200px;
  outline : none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;

  &:focus-within {
    box-shadow : 0 0 0 1px #000;
  }
`