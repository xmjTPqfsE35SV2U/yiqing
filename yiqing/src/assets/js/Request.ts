import axios from 'axios'
const Request:any = axios.create({
  baseURL: 'http://49.232.173.220:3001/',
  timeout: 9000
})

export default Request
