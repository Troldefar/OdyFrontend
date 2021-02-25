const Headers = (token: string): Object => {
  return {
    headers: {
      Authentication: 'Bearer ' + token
    }
  }
}

export default Headers;