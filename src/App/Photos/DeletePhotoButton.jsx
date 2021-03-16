import 'twin.macro'

import { useForm } from 'react-hook-form'
import React from 'react'

import { deletePhoto } from '../../db'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Modal, { useModalState } from '../../components/Modal'

const DeletePhotoButton = ({ photoId, ...props }) => {
  const { isOpen, open, close } = useModalState()
  const { register, handleSubmit } = useForm()

  return (
    <>
      <button
        onClick={() => {
          console.log('zo')
          open()
        }}
        {...props}
      />
      <Modal open={isOpen} onClickOutside={close}>
        <form
          tw="width[38rem] bg-white rounded-xl text-gray-700 grid gap-6 py-6 px-8"
          onSubmit={handleSubmit(() => deletePhoto(photoId).then(close))}
        >
          <h1 tw="text-2xl">Are you sure?</h1>
          <Input
            type="password"
            name="password"
            label="Password (myunsplash)"
            placeholder="****************"
            fullWidth
            ref={register({
              required: true,
              validate: (value) => value === 'myunsplash',
            })}
          />
          <div tw="flex justify-end gap-5">
            <Button text tw="text-gray-400 hover:text-gray-500" onClick={close}>
              Cancel
            </Button>
            <Button tw="bg-red-500 hover:bg-red-600" onClick={open}>
              Delete
            </Button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default DeletePhotoButton
