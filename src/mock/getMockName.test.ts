

it('getMockName', () => {

    const mock = jest.fn()
    mock.mockName('mock')
    expect(mock.getMockName()).toBe('mock')

})

it('mock.calls', () => {

    const mock = jest.fn((x: number, y: number) => x + y)
    mock(1, 2)
    mock(3, 4)
    expect(mock.mock.calls[0][0]).toBe(1)
    expect(mock.mock.calls[0][1]).toBe(2)
    expect(mock.mock.calls[1][0]).toBe(3)
    expect(mock.mock.calls[1][1]).toBe(4)

})

it('mock.results', () => {

    const mock = jest.fn((x: number, y: number) => x + y)
    mock(1, 2)
    mock(3, 4)
    expect(mock.mock.results[0].value).toBe(3)
    expect(mock.mock.results[1].value).toBe(7)
})

it('mockClear', () => {

    const mock = jest.fn((x: number, y: number) => x + y)
    mock(1, 2)
    mock(3, 4)
    expect(mock.mock.results[0].value).toBe(3)
    expect(mock.mock.results[1].value).toBe(7)
    mock.mockClear()
    expect(mock.mock.calls.length).toBe(0)
    expect(mock.mock.results.length).toBe(0)
})