import { api } from '@/services/api'

const rootPath = '/user/'

export default {
  login(data) {
    return api().post(`${rootPath}/login/`, data)
  },
  logout() {
    return api().get(`${rootPath}/logout/`)
  },
  register(data) {
    return api().post(`${rootPath}/register/`, data)
  }
}
