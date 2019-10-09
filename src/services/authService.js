import { Promise } from 'es6-promise'

import { httpService } from './httpService'
import { localStorageUtils } from 'utils'

class AuthService {
  async login(user) {
    const loginResponse = await httpService.post('/public/login', user)
    return new Promise(resolve => {
      httpService.setHeader({
        authorization: this.getToken(loginResponse.accessToken),
      })

      this.storeLoginData(loginResponse)
      resolve()
    })
  }

  storeLoginData(loginResponse) {
    const { idUsuario, accessToken } = loginResponse
    localStorageUtils.setUserId(idUsuario)
    localStorageUtils.setToken(this.getToken(accessToken))
  }

  getToken(accessToken) {
    return accessToken.replace('Bearer', 'Bearer ')
  }
}

const authService = new AuthService()
export { authService }
