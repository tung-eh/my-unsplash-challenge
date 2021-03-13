import 'twin.macro'

import React, { useEffect, useRef, useState } from 'react'

import { getPhotos } from '../db'

const MasonryItem = ({ label, url }) => {
  const [loaded, setLoaded] = useState(false)
  const [gridRow, setGridRow] = useState('')
  const [height, setHeight] = useState('')
  const imageRef = useRef()

  useEffect(() => {
    const image = imageRef.current
    if (!image || !loaded) return

    const grid = image.parentElement

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
    // item.style.gridRowEnd = 'span ' + rowSpan
    // image.style.height = `${(rowSpan - 1) * (rowHeight + rowGap)}px`
  }, [loaded, imageRef])

  return (
    <img
      tw="rounded-2xl object-cover"
      src={url}
      alt={label}
      ref={imageRef}
      onLoad={() => setLoaded(true)}
      style={{
        gridRowEnd: gridRow,
        height,
      }}
    />
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
