import 'twin.macro'

import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root')

const useScrollLock = (lock) => {
  useEffect(() => {
    if (lock) {
      const scrollY = window.scrollY
      Object.assign(document.body.style, {
        position: 'fixed',
        top: `-${scrollY}px`,
        left: 0,
        right: 0,
      })

      return () => {
        Object.assign(document.body.style, {
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

const Modal = ({ children, open = false, onClickOutside, ...props }) => {
  useScrollLock(open)

  const modal = open && (
    <div
      tw="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex justify-center items-center"
      onClick={onClickOutside}
    >
      <div {...props} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )

  return ReactDOM.createPortal(modal, modalRoot)
}

export const useModalState = (defaultValue = false) => {
  const [openState, setOpen] = useState(defaultValue)

  const open = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen((x) => !x), [])

  return { isOpen: openState, open, close, toggle }
}

export default Modal
