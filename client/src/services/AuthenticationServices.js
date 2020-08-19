import Api from './Api'

export default {
  register(credentials) {
    // Register the user (passes in creds (username, pass))
    return Api.post('register', credentials)
  }
}