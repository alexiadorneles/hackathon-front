import LS_KEYS from 'constants/localStorageKeys'

class LocalStorageUtils {
  get(key) {
    return localStorage.getItem(key)
  }

  set(key, value) {
    if (!key || !value) return
    return localStorage.setItem(key, value)
  }

  getUserId() {
    return this.get(LS_KEYS.USER_ID)
  }

  setUserId(userId) {
    this.set(LS_KEYS.USER_ID, userId)
  }

  getToken() {
    return this.get(LS_KEYS.TOKEN)
  }

  setToken(token) {
    this.set(LS_KEYS.TOKEN, token)
  }

  
  getRole() {
    return this.get(LS_KEYS.ROLE)
  }

  setRole(role) {
    return this.set(LS_KEYS.ROLE, role)

  }

}

const localStorageUtils = new LocalStorageUtils()
export { localStorageUtils }
