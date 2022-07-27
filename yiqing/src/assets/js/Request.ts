import axios from 'axios'
const Request:any = axios.create({
  baseURL: 'http://49.232.173.220:3001/',
  timeout: 2000
})

export default Request
