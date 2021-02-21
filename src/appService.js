//TODO move to .env
const apiUrl = "https://jsonplaceholder.typicode.com"


export const getUsers = async () => {
  return await doRequest("users")
}

export const getAlbums = async (userId) => {
  let params = {}
  if (userId)
    params.userId = userId
  return await doRequest("albums", params)
}

export const getPhotos = async (albumId) => {
  return await doRequest("photos", {_limit: 50}) //temp
}

const doRequest = async (path, params = ({})) => {
  return await fetch(`${apiUrl}/${path}?${new URLSearchParams(params)}`)
}
