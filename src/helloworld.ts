import sum from '#/sum'

export default function helloworld() {
  const filename = import.meta.filename
  console.log('%s: hello world', filename)

  const s = sum(1, 2)
  console.log('1 + 2 = %d', s)
}
