import {shuffle} from '@danseethaler/ut'

export const placeholderImage =
  '//images.contentful.com/3cttzl4i3k1h/5ZUiD3uOByWWuaSQsayAQ6/c630e7f851d5adb1876c118dc4811aed/featured-image-TEST1.png'

export const hasValidImage = ({headshot: {url}}) =>
  url && url !== placeholderImage

export const isCurrentEmployee = ({jobTitle}) => jobTitle

export const isUnique = (position, i, array) =>
  position && array.indexOf(position) === i

export const getOptions = (options, selection, count = 5) => {
  options = options.filter(isUnique)
  if (options.length <= count) return options

  const selectionIndex = options.indexOf(selection)
  options.splice(selectionIndex, 1)
  options = shuffle(options, true)

  return shuffle([selection, ...options.slice(0, count - 1)])
}
