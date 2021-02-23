//TODO move to .env
const apiUrl = "https://jsonplaceholder.typicode.com"


export const getUsers = async () => {
  return await doRequest("users")
}

export const getUser = async (userId) => {
  return await doRequest(`users/${userId}`)
}

export const getAlbums = async (userId) => {
  let params = {}
  if (userId)
    params.userId = userId
  return await doRequest("albums", params)
}

export const getPhotos = async (albumId) => {
  let params = {}
  params._limit = 50 //temp
  if (albumId)
    params.albumId = albumId
  return await doRequest("photos", params) //temp
}

export const getPhoto = async (photoId) => {
  return await doRequest(`photos/${photoId}`)
}

const doRequest = async (path, params = ({})) => {
  return await fetch(`${apiUrl}/${path}?${new URLSearchParams(params)}`)
}
