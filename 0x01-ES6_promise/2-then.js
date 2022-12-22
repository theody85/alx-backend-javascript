export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise === Promise.resolve()) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(Error());
    }
  }).then(console.log('Got a response from the API'));
}
