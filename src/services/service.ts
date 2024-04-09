import axios from 'axios'

export function searchApi(searchString : string) {
  return axios.get(`https://api.github.com/users/${searchString}`)
}
