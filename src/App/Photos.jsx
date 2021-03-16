import tw from 'twin.macro'

import React, { useEffect, useRef, useState } from 'react'

import { getPhotos } from '../db'

const MasonryItem = ({ label, url }) => {
  const [loaded, setLoaded] = useState(false)
  const [gridRow, setGridRow] = useState('')
  const [height, setHeight] = useState('')
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
    console.log({
      imageHeight: image.getBoundingClientRect().height,
      rowGap,
      rowHeight,
    })

    const rowSpan = Math.ceil(
      (image.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
    )

    setGridRow('span ' + rowSpan)
    setHeight(`${(rowSpan - 1) * (rowHeight + rowGap)}px`)
  }, [loaded, ref, imageRef])

  return (
    <div
      tw="relative rounded-2xl overflow-hidden"
      className="group"
      style={{ gridRow, height }}
      ref={ref}
    >
      <img
        tw="object-cover w-full"
        css={[height && tw`h-full`]}
        src={url}
        alt={label}
        ref={imageRef}
        onLoad={() => setLoaded(true)}
      />
      <button tw="hidden group-hover:flex absolute w-full h-full top-0 left-0 bg-black bg-opacity-40 flex-col justify-between font-monts text-left p-6">
        <div tw="w-full flex justify-end">
          <span tw="text-xs text-red-500 border border-red-500 rounded-full py-1 px-4">
            delete
          </span>
        </div>
        <p tw="text-white text-lg font-bold max-w-xs">{label}</p>
      </button>
    </div>
  )
}

const Photos = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    getPhotos().then(setPhotos)
  }, [])

  return (
    <div tw="grid grid-cols-3 grid-auto-rows[0] gap-12">
      {photos.map((photo) => (
        <MasonryItem key={photo.id} {...photo} />
      ))}
    </div>
  )
}

export default Photos
