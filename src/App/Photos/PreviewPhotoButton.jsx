import 'twin.macro'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'

import Modal, { useModalState } from '../../components/Modal'

const PreviewPhotoButton = ({ id, label, url, setPreviewId, ...props }) => {
  const { isOpen, open, close } = useModalState()

  useEffect(() => {
    if (isOpen) {
      setPreviewId(id)
    } else {
      setPreviewId(null)
    }
  }, [id, isOpen, setPreviewId])

  return (
    <AnimatePresence>
      <button onClick={open} {...props} />
      <Modal noMotion open={isOpen} onClickOutside={close}>
        <motion.div
          layoutId={id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          tw="w-full max-w-screen-xl p-4"
        >
          <img tw="w-full rounded-2xl" src={url} alt={label} />
        </motion.div>
      </Modal>
    </AnimatePresence>
  )
}

export default PreviewPhotoButton
