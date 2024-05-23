export function random (min = 0, max = 10): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function uuid(){
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
