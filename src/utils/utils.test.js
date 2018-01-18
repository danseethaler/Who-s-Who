import {getOptions, getSize} from './index'
import {options} from './utils.fixtures'

const selection = 'c'

describe('Utility functions', () => {
  it('getOptions should return all options if less than count', () => {
    const result = getOptions(options, selection, 100)
    expect(result).toEqual(options)
  })

  it('getOptions should return the count specified', () => {
    const length = 5
    const result = getOptions(options, selection, length)
    expect(result.length).toEqual(length)
  })

  it('getOptions should include the selected option even if it is not provided', () => {
    const optionsWithoutSelection = options.slice()
    optionsWithoutSelection.splice(options.indexOf(selection), 1)

    const result = getOptions(optionsWithoutSelection, selection, 3)
    expect(result.indexOf(selection)).toBeGreaterThan(-1)
  })

  it('getSize should return xl on giant size', () => {
    expect(getSize(5000)).toEqual('xl')
  })

  it('getSize should return phone on mini size', () => {
    expect(getSize(5)).toEqual('phone')
  })
})
