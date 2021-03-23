import tw from 'twin.macro'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const appRoot = document.getElementById('root')
const modalRoot = document.getElementById('modal-root')

const useScrollLock = (lock) => {
  useEffect(() => {
    if (lock) {
      const scrollY = window.scrollY
      Object.assign(appRoot.style, {
        position: 'fixed',
        top: `-${scrollY}px`,
        left: 0,
        right: 0,
      })

      return () => {
        Object.assign(appRoot.style, {
          position: '',
          top: '',
          left: '',
          right: '',
        })
        window.scrollTo(0, scrollY)
      }
    }
  }, [lock])
}

const Modal = ({
  noMotion,
  children,
  open = false,
  onClickOutside,
  ...props
}) => {
  useScrollLock(open)

  const Container = tw(
    noMotion ? 'div' : motion.div
  )`absolute top-0 left-0 min-w-full min-h-screen bg-black bg-opacity-25 flex justify-center items-center`

  const motionModal = (
    <AnimatePresence>
      {open && (
        <Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClickOutside}
        >
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            {...props}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </Container>
      )}
    </AnimatePresence>
  )

  const modal = open && (
    <Container onClick={onClickOutside}>
      <div {...props} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Container>
  )

  return ReactDOM.createPortal(noMotion ? modal : motionModal, modalRoot)
}

export const useModalState = (defaultValue = false) => {
  const [openState, setOpen] = useState(defaultValue)

  const open = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((x) => !x), [])

  return { isOpen: openState, open, close, toggle }
}

export default Modal
