const {
  REACT_APP_API_URL,
  REACT_APP_USERNAME,
  REACT_APP_PASSWORD,
} = process.env

const config = {
  API_URL: REACT_APP_API_URL,
  USER: {
    USERNAME: REACT_APP_USERNAME,
    PASSWORD: REACT_APP_PASSWORD,
  },
}

export { config }