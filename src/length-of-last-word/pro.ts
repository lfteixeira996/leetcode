export function lengthOfLastWordPro(str: string): number {
  const arr = str.split(' ')
  let position = arr.length - 1

  while (!arr[position] && position > 0) {
    position -= 1
  }

  return arr[position].length
}
