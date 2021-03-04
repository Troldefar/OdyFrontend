import { RequestHeader } from '../../interfaces/interfaces';

const BearerToken = (token: string): RequestHeader => {
  return {
    headers: {
      Authentication: 'Bearer ' + token
    }
  }
}

export default BearerToken;