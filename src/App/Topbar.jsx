import 'twin.macro'

import React from 'react'

import Button from '../components/Button'
import Input from '../components/Input'
import Modal, { useModalState } from '../components/Modal'
import logo from '../assets/images/logo.svg'

const AddPhotoButton = () => {
  const { isOpen, open, close } = useModalState()

  return (
    <>
      <Button tw="bg-green-500 hover:bg-green-600" onClick={open}>
        Add a photo
      </Button>
      <Modal
        tw="width[38rem] bg-white rounded-xl text-gray-700 grid gap-6 py-6 px-8"
        open={isOpen}
        onClickOutside={close}
      >
        <h1 tw="text-2xl">Add a new photo</h1>
        <Input label="Label" placeholder="an amzing photo" fullWidth />
        <Input
          label="Photo URL"
          placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b"
          fullWidth
        />
        <div tw="flex justify-end gap-5">
          <Button text tw="text-gray-400 hover:text-gray-500" onClick={close}>
            Cancel
          </Button>
          <Button tw="bg-green-500 hover:bg-green-600" onClick={open}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  )
}

const Topbar = () => (
  <div tw="flex items-center justify-between mb-20">
    <div tw="flex gap-6 items-center">
      <img src={logo} alt="logo" />
      <Input icon="search" placeholder="Search by name" />
    </div>
    <AddPhotoButton />
  </div>
)

export default Topbar
