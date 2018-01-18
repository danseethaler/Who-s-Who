import {getOptions} from './index'
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
})
