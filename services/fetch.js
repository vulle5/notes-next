const defaultOptions = {
  method: 'GET',
  headers: {
    Connection: 'keep-alive',
    'Content-Type': 'application/json'
  },
  body: '{}'
}

class Fetch {
  constructor(url, options = {}) {
    this.url = url
    this.options = { ...defaultOptions, ...options }
    if (options.body) this.options.body = JSON.stringify(options.body)
    if (options.headers) this.options.headers = { ...defaultOptions.headers, ...options.headers }
  }

  static exec(url, options = {}) {
    const newOptions = { ...defaultOptions, ...options }
    if (options.body) newOptions.body = JSON.stringify(options.body)
    if (options.headers) newOptions.headers = { ...defaultOptions.headers, ...options.headers }

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
      return res.text()
    } catch (err) {
      return err
    }
  }
}

export default Fetch
