import Fetch from 'services/fetch'

const data = {
  1: { name: 'Jesse' },
  2: { name: 'Archie' }
}
const error = {
  message: 'Bad things happened'
}

const json = jest.fn(() => Promise.resolve(data))
const text = jest.fn(() => Promise.resolve(data))
const methods = {
  ok: true,
  json,
  text
}

describe('constructor', () => {
  test('handles default options', () => {
    const fetcher = new Fetch('test.com')
    expect(fetcher.url).toEqual('test.com')
    expect(fetcher.options).toEqual({
      method: 'GET',
      headers: { Connection: 'keep-alive', 'Content-Type': 'application/json' },
      body: '{}'
    })
  })

  test('handles custom options', () => {
    const fetcher = new Fetch('test.com', { method: 'POST', headers: { Accept: 'application/json' }, body: { 1: { name: 'test' } } })
    expect(fetcher.options).toEqual({
      method: 'POST',
      headers: { Accept: 'application/json', Connection: 'keep-alive', 'Content-Type': 'application/json' },
      body: JSON.stringify({ 1: { name: 'test' } })
    })
  })
})

describe('static method', () => {
  global.fetch = jest.fn().mockResolvedValue(methods)

  beforeEach(() => {
    fetch.mockClear()
  })

  test('exec() to call fetch with default values', async () => {
    await Fetch.exec('test.com')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('test.com', (
      {
        method: 'GET',
        headers: { Connection: 'keep-alive', 'Content-Type': 'application/json' },
        body: '{}'
      }
    ))
  })

  test('exec() to call fetch options', async () => {
    await Fetch.exec('test.com', { method: 'POST', headers: { Accept: 'application/json' }, body: { 1: { name: 'test' } } })
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('test.com', (
      {
        method: 'POST',
        headers: { Accept: 'application/json', Connection: 'keep-alive', 'Content-Type': 'application/json' },
        body: JSON.stringify({ 1: { name: 'test' } })
      }
    ))
  })
})

describe('class method', () => {
  let fetcher
  const errorJson = jest.fn(() => Promise.resolve(error))

  beforeEach(() => {
    fetch.mockReset()
    fetcher = new Fetch('test.com')
    global.fetch = jest.fn().mockResolvedValue(methods)
  })

  test('json() returns data from fetch json function', async () => {
    const response = await fetcher.json()

    expect(json).toHaveBeenCalledTimes(1)
    expect(response).toEqual(data)
  })

  test('json() catches and returns the error', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ...methods, json: errorJson, ok: false })

    await expect(fetcher.json()).rejects.toEqual({ message: 'Bad things happened' })
    expect(json).toHaveBeenCalledTimes(1)
  })

  test('text() returns data from fetch text function', async () => {
    const response = await fetcher.text()

    expect(text).toHaveBeenCalledTimes(1)
    expect(response).toEqual(data)
  })

  test('text() catches and returns the error', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ...methods, json: errorJson, ok: false })

    await expect(fetcher.text()).rejects.toEqual({ message: 'Bad things happened' })
    expect(text).toHaveBeenCalledTimes(1)
  })
})
