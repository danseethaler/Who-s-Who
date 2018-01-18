export const placeholderImage =
  '//images.contentful.com/3cttzl4i3k1h/5ZUiD3uOByWWuaSQsayAQ6/c630e7f851d5adb1876c118dc4811aed/featured-image-TEST1.png'

export const hasValidImage = ({headshot: {url}}) =>
  url && url !== placeholderImage

export const isUnique = (position, i, array) =>
  position && array.indexOf(position) === i
