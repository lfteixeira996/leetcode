export const topKFrequent = (nums: number[], k: number) => {
  let hash: any = {}

  for (let n of nums) {
    hash[n] = ~~hash[n] + 1
  }

  const entries = Object.entries(hash)
  entries.sort((a, b) => b[1] - a[1])

  return entries.slice(0, k).map(arr => Number(arr[0]))
}
