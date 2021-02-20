//TODO move to .env
const apiUrl = "http://jsonplaceholder.typicode.com"


export const getUsers = async () => {
  return await doRequest("users")
}

export const getAlbums = async (userId) => {

}

export const getPhotos = async (albumId) => {

}

const doRequest = async (path, params = "") => {
  return await fetch(`${apiUrl}/${path}?${params}`)
}
