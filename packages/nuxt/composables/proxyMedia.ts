export function useProxyMedia (path: string) {
  const { origin } = useRequestURL()
  const toReturn = [origin, path]
  
  if (origin.startsWith('http://')) {
    toReturn[0] = origin.replace('http://', 'https://')
  }
  
  return toReturn.join('')
}
