import React, { forwardRef } from 'react'

import tw from 'twin.macro'

import Icon from './Icon'

// Copy from https://gist.github.com/gordonbrander/2230317
const generateId = () => '_' + Math.random().toString(36).substr(2, 9)

const TwInput = tw.input`border border-gray-400 focus:border-gray-900 rounded-lg text-sm p-4`

const Input = forwardRef(({ label, id, icon, fullWidth, ...props }, ref) => {
  const inputId = id || generateId()

  return (
    <div tw="focus-within:font-bold">
      {label && (
        <label tw="inline-block text-gray-700 text-sm mb-2" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div tw="relative flex items-center text-gray-400 focus-within:text-gray-700">
        {icon && <Icon name={icon} tw="absolute w-5 h-5 left-4" />}
        <TwInput
          css={[icon && tw`pl-14`, fullWidth ? tw`w-full` : tw`w-72`]}
          id={inputId}
          ref={ref}
          {...props}
        />
      </div>
    </div>
  )
})

export default Input
