import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

import tw from 'twin.macro'

import { usePhotos } from '../shared/PhotosContext'
import DeletePhotoButton from './DeletePhotoButton'
import PreviewPhotoButton from './PreviewPhotoButton'
import Spinner from '../../components/Spinner'

const MasonryItem = ({ id, label, url }) => {
  const [loaded, setLoaded] = useState(false)
  const [gridRow, setGridRow] = useState('')
  const [height, setHeight] = useState('')
  const [previewId, setPreviewId] = useState(null)
  const ref = useRef()
  const imageRef = useRef()

  useEffect(() => {
    const item = ref.current
    const image = imageRef.current
    if (!item || !image || !loaded) return

    const grid = item.parentElement

    const rowHeight = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
    )
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
    )

    const rowSpan = Math.ceil(
      (image.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
    )

    setGridRow('span ' + rowSpan)
    setHeight(`${(rowSpan - 1) * (rowHeight + rowGap)}px`)
  }, [loaded, ref, imageRef])

  return (
    <div tw="relative" className="group" style={{ gridRow, height }} ref={ref}>
      <AnimateSharedLayout>
        {id !== previewId && (
          <motion.img
            layoutId={id}
            tw="object-cover w-full rounded-2xl"
            css={[height && tw`h-full`]}
            src={url}
            alt={label}
            ref={imageRef}
            onLoad={() => setLoaded(true)}
          />
        )}
        <PreviewPhotoButton
          tw="hidden group-hover:flex absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 flex-col justify-between font-monts text-left rounded-2xl p-6"
          id={id}
          label={label}
          url={url}
          setPreviewId={setPreviewId}
        >
          <div tw="w-full flex justify-end">
            <DeletePhotoButton
              tw="text-xs text-red-500 hover:text-white hover:bg-red-500 border border-red-500 rounded-full py-1 px-4"
              photoId={id}
            >
              delete
            </DeletePhotoButton>
          </div>
          <p tw="text-white text-lg font-bold max-width[18rem]">{label}</p>
        </PreviewPhotoButton>
      </AnimateSharedLayout>
    </div>
  )
}

const Photos = () => {
  const photos = usePhotos()

  if (!photos) {
    return <Spinner tw="m-auto" />
  }

  return (
    <div tw="grid grid-cols-3 grid-auto-rows[0] gap-12">
      {photos.map((photo) => (
        <MasonryItem key={photo.id} {...photo} />
      ))}
    </div>
  )
}

export default Photos
