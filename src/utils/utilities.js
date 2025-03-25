export function generateId() {
  return Math.floor(Math.random() * 10000);
}

export function getNewExpirationTime() {
  return Date.now() + 1000; // 1 second expiration
}
