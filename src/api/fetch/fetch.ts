export const Fetch = (url: string, method: string, body?: object): void => {
  fetch(url, {
    headers: {

    },
    method: url,
    body: JSON.stringify(body)
  })
    .then(response => console.log(response))
    .catch((error: any) => console.log(error));
}