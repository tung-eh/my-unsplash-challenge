import 'twin.macro'

import React from 'react'

import { PhotosContextProvider } from './shared/PhotosContext'
import Photos from './Photos'
import Topbar from './Topbar'

function App() {
  return (
    <PhotosContextProvider>
      <div tw="flex justify-center min-h-screen md:py-4">
        <div tw="grid grid-template-rows[min-content 1fr] w-full max-w-screen-xl p-4">
          <Topbar />
          <Photos />
        </div>
      </div>
    </PhotosContextProvider>
  )
}

export default App
