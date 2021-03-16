import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { getPhotos } from '../../db'

const PhotosContext = createContext()

export const PhotosContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState()

  useEffect(() => {
    getPhotos().then(setPhotos)
  }, [])

  return (
    <PhotosContext.Provider value={[photos, setPhotos]}>
      {children}
    </PhotosContext.Provider>
  )
}

export const usePhotos = () => {
  const [photos] = useContext(PhotosContext)

  return photos || []
}

export const useAddPhoto = () => {
  const [, setPhotos] = useContext(PhotosContext)

  return useCallback(
    (photo) => {
      setPhotos((photos) => [photo, ...photos])
    },
    [setPhotos]
  )
}

export const useDeletePhoto = () => {
  const [, setPhotos] = useContext(PhotosContext)

  return useCallback(
    (id) => {
      setPhotos((photos) => photos.filter((photo) => photo.id !== id))
    },
    [setPhotos]
  )
}

export default PhotosContext
