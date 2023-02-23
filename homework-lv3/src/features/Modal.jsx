import React from 'react'
import styled from 'styled-components'
import Stack from '../components/stack/Stack'
import Button from '../components/button/Button'
import * as Modal from '../components/modal/Modal'

function FeatureModal() {
  return (
    <div>
      <h1>Modal</h1>
      <Stack gap={30}>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button.Primary>첫번째 모달</Button.Primary>
          </Modal.Trigger>
          <Modal.Portal>
            <Modal.Overlay />
            <StModalContent>
              <div>
                안녕! 난 첫번쨰 모달이야
              </div>
              <ModalButtonSetter>
                <Modal.Close asChild>
                  <Button.Negative outlined>닫기</Button.Negative>
                </Modal.Close>
                <Button.Primary
                  onClick={() => {console.log('모달 확인버튼을 눌렀어요')}}>
                    확인
                </Button.Primary>
              </ModalButtonSetter>
            </StModalContent>
          </Modal.Portal>
        </Modal.Root>
        <Modal.Root>
          <Modal.Trigger asChild>
            <Button.Primary outlined>두번째 모달</Button.Primary>
          </Modal.Trigger>
          <Modal.Portal>
            <Modal.Overlay />
            <StModalContent>
              <div>
                난 두번째 모달이라고 해.
              </div>
              <ModalButtonSetter>
                <Modal.Close asChild>
                  <Button.Negative>닫기</Button.Negative>
                </Modal.Close>
                <Button.Primary
                  onClick={() => {console.log('모달 확인버튼을 눌렀어요')}}>
                    확인
                </Button.Primary>
              </ModalButtonSetter>
            </StModalContent>
          </Modal.Portal>
        </Modal.Root>
      </Stack>
    </div>
  )
}

export default FeatureModal

const StModalContent = styled(Modal.Content)`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: #fff;
  width: 500px;
  height: 300px;
`
const MiniModalContent = styled(Modal.Content)`
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: #fff;
  width: 300px;
  height: 200px;
`

const ModalButtonSetter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`
const ModalButtonSetterSecond = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`
const StModalClose = styled.button`
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  :hover {
    border: 1px solid #333;
  }
`
