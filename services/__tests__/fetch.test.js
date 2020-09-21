import Fetch from 'services/fetch'

const data = {
  1: { name: 'Jesse' },
  2: { name: 'Archie' }
}

describe('static method', () => {
  global.fetch = jest.fn().mockResolvedValue(data)

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
  const json = jest.fn(() => Promise.resolve(data))
  const text = jest.fn(() => Promise.resolve(data))

  beforeEach(() => {
    fetch.mockReset()
    fetcher = new Fetch('test.com')
    global.fetch = jest.fn(() => Promise.resolve({ json, text }))
  })

  test('json() returns data from fetch json function', async () => {
    const response = await fetcher.json()

    expect(json).toHaveBeenCalledTimes(1)
    expect(response).toEqual(data)
  })

  test('json() catches and returns the error', async () => {
    const rejection = Promise.reject(new Error('error'))
    global.fetch = jest.fn(() => rejection)
    const response = await fetcher.json()

    expect(json).toHaveBeenCalledTimes(1)
    expect(response).toEqual(Error('error'))
  })

  test('text() returns data from fetch text function', async () => {
    const response = await fetcher.text()

    expect(text).toHaveBeenCalledTimes(1)
    expect(response).toEqual(data)
  })

  test('text() catches and returns the error', async () => {
    const rejection = Promise.reject(new Error('error'))
    global.fetch = jest.fn(() => rejection)
    const response = await fetcher.text()

    expect(text).toHaveBeenCalledTimes(1)
    expect(response).toEqual(Error('error'))
  })
})
