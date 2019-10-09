import axios from 'axios'
import _ from 'lodash'
import { Promise } from 'es6-promise'

import { localStorageUtils } from 'utils'
import BASE_URL from 'constants/baseUrl'
import { HackathonLoader } from '../components/generics'
import { toastrService } from './toastrService'

const CONTENT_TYPE = { 'Content-Type': 'application/json' }
const _config = {
  headers: {
    ...CONTENT_TYPE,
  },
}

class HttpService {
  constructor() {
    this.axios = this._getAxiosInstance()
    toastrService.error = _.debounce(toastrService.error, 1000)
  }

  async get(url) {
    const response = await this.axios.get(`${BASE_URL}/${url}`, this.getConfig())
    return response && response.data
  }

  async post(url, data = {}, config = this.getConfig()) {
    const response = await this.axios.post(`${BASE_URL}/${url}`, data, config)
    return response && response.data
  }

  async put(url, data = {}) {
    const response = await this.axios.put(`${BASE_URL}/${url}`, data, this.getConfig())
    return response && response.data
  }

  async delete(url) {
    const response = await this.axios.delete(`${BASE_URL}/${url}`, this.getConfig())
    return response && response.data
  }

  async accessExternal(method, url) {
    return this.axios[method](url)
  }

  async health() {
    return this.get('health')
  }

  setHeader(header = {}) {
    _config.headers = { ...CONTENT_TYPE, ...header }
  }

  getConfig() {
    if (!_config.headers.authorization) {
      this.setHeader({
        authorization: localStorageUtils.getToken(),
      })
    }

    return _config
  }

  _getAxiosInstance() {
    const axiosInstance = axios.create()

    axiosInstance.interceptors.request.use((config) => { HackathonLoader.show(); return config }, error => Promise.reject(error))
    axiosInstance.interceptors.response.use((response) => { HackathonLoader.hide(); return response }, (error) => {
      HackathonLoader.hide()
      toastrService.error('Um erro ocorreu. Tente novamente mais tarde')
      Promise.reject(error)
    })

    return axiosInstance
  }
}

const httpService = new HttpService()
export { httpService }
