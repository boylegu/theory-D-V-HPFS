import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 15000
})

export default service
