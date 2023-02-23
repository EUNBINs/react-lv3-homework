import React, { useState } from 'react'
import Stack from '../components/stack/Stack'
import * as Input from '../components/input/Input'
import Button from '../components/button/Button';

function FeatureInput() {

  const [form, setForm] = useState({
    name : '',
    price : '',
  })

  const onSubmitHandler = (event) => {
    event.preventDefault();

    Object.values(form).filter((el) => el !== '').length === 0
      ? window.alert('이름과 가격 모두 입력해줘용!')
      : window.alert(`{name : ${form.name}, price : ${form.price}}`)
  }

  const normalNameValue = (value) => {
    setForm((pre) => ( { ...pre, name: value } ))
  }
  const normalPriceValue = (value) => {
    setForm((pre) => ( { ...pre, price : value.raw} ))
  }
  return (
    <div>
      <h1>Input</h1>
      <form onSubmit={onSubmitHandler}>
        <Stack gap={10}>
          <div>
            <label>이름</label>
            <Input.Normal 
              getValues={normalNameValue}/>
          </div>
          <div>
            <label>가격</label>
            <Input.Price 
              getValues={normalPriceValue}/>
          </div>
          <Button.Primary size='small'>저장</Button.Primary>
        </Stack>
      </form>
    </div>
  )
}

export default FeatureInput