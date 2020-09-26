const defaultOptions = {
  method: 'GET',
  headers: {
    Connection: 'keep-alive',
    'Content-Type': 'application/json'
  },
  body: '{}'
}

const handleError = async res => {
  const error = await res.json()
  throw error
}

class Fetch {
  constructor(url, options = {}) {
    this.url = url
    this.options = { ...defaultOptions, ...options }
    if (options.body) this.options.body = JSON.stringify(options.body)
    if (options.headers) this.options.headers = { ...defaultOptions.headers, ...options.headers }
  }

  static async exec(url, options = {}) {
    const newOptions = { ...defaultOptions, ...options }
    if (options.body) newOptions.body = JSON.stringify(options.body)
    if (options.headers) newOptions.headers = { ...defaultOptions.headers, ...options.headers }

    const res = await fetch(url, { ...defaultOptions, ...newOptions })
    if (!res.ok) return handleError(res)

    return res
  }

  async json() {
    const res = await fetch(this.url, this.options)
    if (!res.ok) await handleError(res)

    return res.json()
  }

  async text() {
    const res = await fetch(this.url, this.options)
    if (!res.ok) await handleError(res)

    return res.text()
  }
}

export default Fetch
