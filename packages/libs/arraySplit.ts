export function arraySplit (list: any[], rows: number) {
  return list.reduce((acc, entry, i) => {
    const index = i % rows
    
    if (!acc[index]) {
      acc[index] = []
    }

    acc[index].push(entry)

    return acc
  }, [])
}
