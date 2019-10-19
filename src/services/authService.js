import { httpService } from './httpService'
import { localStorageUtils } from 'utils'

class AuthService {
  async login(user) {
    const loginResponse = await httpService.post('public/login', user)
    return loginResponse
  }

  storeLoginData(accessToken) {
    localStorageUtils.setToken(this.getToken(accessToken))
  }

  getToken(accessToken) {
    return 'Bearer '.concat(accessToken)
  }
}

const authService = new AuthService()
export { authService }
