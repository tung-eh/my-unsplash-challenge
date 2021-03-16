import 'twin.macro'

import { useForm } from 'react-hook-form'
import React from 'react'

import { useSearchPhotos } from '../shared/PhotosContext'
import AddPhotoButton from './AddPhotoButton'
import Input from '../../components/Input'
import logo from '../../assets/images/logo.svg'

const Topbar = () => {
  const { register, handleSubmit } = useForm()

  const searchPhoto = useSearchPhotos()

  return (
    <div tw="flex items-center justify-between mb-20">
      <div tw="flex gap-6 items-center">
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit(({ search }) => searchPhoto(search))}>
          <Input
            icon="search"
            name="search"
            placeholder="Search by name"
            ref={register()}
          />
          <input type="submit" hidden />
        </form>
      </div>
      <AddPhotoButton />
    </div>
  )
}

export default Topbar
