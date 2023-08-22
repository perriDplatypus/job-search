const nextElementInList = (list, value) => {
  const currnetValueIndex = list.indexOf(value)
  const nextValueIndex = (currnetValueIndex + 1) % list.length
  return list[nextValueIndex]
}

export default nextElementInList
