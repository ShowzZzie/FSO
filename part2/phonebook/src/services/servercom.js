import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const add = newContact => {
    const request = axios.post(baseURL, newContact)
    return request.then(response => response.data)
}

const deletion = info => {
    // Return a promise that resolves with the result of getAll() or rejects with the error from axios.delete()
    return axios.delete(`${baseURL}/${info}`)
      .then(response => {
        // After the contact has been deleted, call getAll()
        return getAll()
      })
      .catch(error => {
        // If an error occurred, throw it so it can be caught in deleteTest()
        throw error
      })
  }

const put = (id, object) => {
    /*const request = axios.put(`${baseURL}/${id}`, object)
    console.log(request)
    return request.then(response => response.data)*/

    return axios.put(`${baseURL}/${id}`, object)
         .catch(error => {
            throw error
         })
         .then(response => response.data)

}

export default { getAll, add, deletion, put }