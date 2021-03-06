// Time Complexity O(1)
// Space Complexity O(1)

export function hammingDistance(x: number, y: number) {
  let z = (x ^ y).toString(2)
  const matchBits = z.match(/1/g) || []

  return matchBits.length
}
