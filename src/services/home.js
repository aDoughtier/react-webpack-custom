import ajax from '@/config/axios.config'

export default {
  getList(data, type = 'get') {
    return ajax({
      url: '',
      data,
      type
    })
  }
}