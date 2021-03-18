import 'twin.macro'

import React from 'react'

import Modal, { useModalState } from '../../components/Modal'

const PreviewPhotoButton = ({ id, label, url, ...props }) => {
  const { isOpen, open, close } = useModalState()

  return (
    <>
      <button onClick={open} {...props} />
      <Modal open={isOpen} onClickOutside={close}>
        <div tw="w-full max-w-screen-xl  p-4">
          <img tw="w-full rounded-2xl" src={url} alt={label} />
        </div>
      </Modal>
    </>
  )
}

export default PreviewPhotoButton
