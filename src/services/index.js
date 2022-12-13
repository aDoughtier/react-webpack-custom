import ajax from '@/config/axios.config'
import home from './home'

const common = {
  getMenu(){
    return ajax({
      url:'',
      data:'',
      type:'get'
    })
  }
}

export default {
  ...common,
  ...home
}