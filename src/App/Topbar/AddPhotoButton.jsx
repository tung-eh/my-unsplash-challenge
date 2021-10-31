import 'twin.macro'

import React from 'react'
import { useForm } from 'react-hook-form'

import { addPhoto } from '../../db'
import { useAddPhoto } from '../shared/PhotosContext'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Modal, { useModalState } from '../../components/Modal'

const AddPhotoButton = () => {
  const { isOpen, open, close } = useModalState()
  const { register, handleSubmit } = useForm()

  const addPhotoToState = useAddPhoto()
  const onSubmit = async (values) => {
    const id = await addPhoto(values)

    addPhotoToState({ id, ...values })
    close()
  }

  return (
    <>
      <Button tw="bg-green-500 hover:bg-green-600" onClick={open}>
        Add a photo
      </Button>
      <Modal open={isOpen} onClickOutside={close}>
        <form
          tw="width[38rem] bg-white rounded-xl text-gray-700 grid gap-6 py-6 px-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 tw="text-2xl">Add a new photo</h1>
          <Input
            name="label"
            label="Label"
            placeholder="an amzing photo"
            autoFocus
            fullWidth
            ref={register({ required: true })}
          />
          <Input
            name="url"
            label="Photo URL"
            placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b"
            fullWidth
            ref={register({ required: true })}
          />
          <div tw="flex justify-end gap-5">
            <Button text tw="text-gray-400 hover:text-gray-500" onClick={close}>
              Cancel
            </Button>
            <Button tw="bg-green-500 hover:bg-green-600" onClick={open}>
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AddPhotoButton
