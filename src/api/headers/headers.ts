import { RequestHeader } from '../../interfaces/interfaces';

const Headers = (token: string): RequestHeader => {
  return {
    headers: {
      Authentication: 'Bearer ' + token
    }
  }
}

export default Headers;