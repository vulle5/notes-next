const defaultOptions = {
  method: 'GET',
  headers: {
    Connection: 'keep-alive',
    'Content-Type': 'application/json'
  },
  body: '{}'
}

class Fetch {
  constructor(url, options) {
    const { body, headers } = options

    this.url = url
    this.options = { ...defaultOptions, ...options }
    this.options.body = body && JSON.stringify(options.body)
    this.options.headers = { ...defaultOptions.headers, ...headers }
  }

  static exec(url, options) {
    const { body, headers } = options
    const newOptions = { ...defaultOptions, ...options }
    newOptions.body = body && JSON.stringify(options.body)
    newOptions.headers = { ...defaultOptions.headers, ...headers }

    return fetch(url, { ...defaultOptions, ...newOptions })
  }

  async json() {
    try {
      const res = await fetch(this.url, this.options)
      return res.json()
    } catch (err) {
      return err
    }
  }

  async text() {
    try {
      const res = await fetch(this.url, this.options)
      return res.json()
    } catch (err) {
      return err
    }
  }
}

export default Fetch
