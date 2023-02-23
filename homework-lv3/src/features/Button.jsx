import React from 'react'
import Stack from '../components/stack/Stack'
import Button from '../components/button/Button'
import { IconArrow, IconBell } from '../components/button/Icon'

function FeatureButton() {
  return (
    <Stack row={false} gap={10}>
      <h1>Button</h1>
      <Stack row={true} gap={10}>
        <Button.Primary 
          rightSlot={<IconArrow color={'#26d79c'} />}
          size='large'
          outlined
          onClick={() => window.alert('난 큰 버튼이야!')}>
          왕버튼
        </Button.Primary>
        <Button.Primary size='medium'>중간버튼</Button.Primary>
        <Button.Primary outlined>쪼꼬미버튼</Button.Primary>
      </Stack>
      <Stack gap={10}>
        <Button.Negative
          size='large'
          outlined
          rightSlot={<IconBell />}
          onClick={() => console.log(window.prompt('여긴 어디, 나는 누구?'))}>
          왕네거티브 버튼
        </Button.Negative>
        <Button.Negative size='medium' outlined>중간버튼</Button.Negative>
        <Button.Negative size='small'>소심이버튼</Button.Negative>
      </Stack>
    </Stack>
  )
}

export default FeatureButton;