import 'twin.macro'

import React from 'react'

import Icon from '../atoms/Icon'
import logo from '../assets/images/logo.svg'

const Topbar = () => (
  <div tw="flex items-center justify-between mb-20">
    <div tw="flex gap-6 items-center">
      <img src={logo} alt="logo" />
      <div tw="relative flex items-center text-gray-400 focus-within:text-gray-900">
        <Icon name="search" tw="absolute w-5 h-5 left-4" />
        <input
          tw="border border-gray-400 focus:border-gray-900 rounded-lg text-sm w-72 p-4 pl-14"
          placeholder="Search by name"
        />
      </div>
    </div>
    <button tw="bg-green-500 text-white font-bold rounded-xl shadow py-4 px-5">
      Add a photo
    </button>
  </div>
)

export default Topbar
