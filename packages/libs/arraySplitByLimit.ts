export function arraySplitByLimit (list: any[], maxLength: number) {
  return list.reduce((acc, entry, i) => {
    const index = i % maxLength
    
    if (!acc[index]) {
      acc[index] = []
    }

    acc[index].push(entry)

    return acc
  }, [])
}
