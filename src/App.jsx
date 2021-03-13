import 'twin.macro'

import React from 'react'

import Photos from './components/Photos'
import Topbar from './components/Topbar'

function App() {
  return (
    <div tw="flex justify-center min-h-screen md:py-4">
      <div tw="grid grid-template-rows[min-content 1fr] w-full max-w-screen-xl p-4">
        <Topbar />
        <Photos />
      </div>
    </div>
  )
}

export default App
