import React from 'react'

import tw from 'twin.macro'

const TwButton = tw.button`bg-gray-500 hover:bg-gray-600 transform active:scale-105 text-white font-bold rounded-xl shadow py-4 px-6`

const TwTextButton = tw.button`transform active:scale-105`

const Button = ({ text = false, ...props }) => {
  const Component = text ? TwTextButton : TwButton
  return <Component {...props} />
}

export default Button
