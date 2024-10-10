export function useProxyMedia(path) {
  const { origin } = window.location;
  const toReturn = [origin, path];
  if (origin.startsWith("http://")) {
    toReturn[0] = origin.replace("http://", "https://");
  }
  return toReturn.join("");
}
