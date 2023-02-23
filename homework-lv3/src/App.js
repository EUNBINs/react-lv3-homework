import React from 'react'
import FeatureButton from './features/Button'
import FeatureInput from './features/Input'
import FeatureModal from './features/Modal'
import FeatureSelect from './features/Select'

function App() {
  return (
    <div>
      <FeatureButton />
      <FeatureInput />
      <FeatureModal />
      <FeatureSelect />
    </div>
  )
}

export default App