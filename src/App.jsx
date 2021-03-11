import 'twin.macro'

import React, { useEffect } from 'react'

import { getPhotos } from './db'

function App() {
  useEffect(() => {
    getPhotos().then(console.log)
  }, [])

  return (
    <>
      <p>My unsplash</p>
      <button tw="bg-gray-200 text-red-500 border border-red-500 hover:bg-red-500 hover:text-gray-100 p-1">
        Click me
      </button>
    </>
  )
}

export default App
