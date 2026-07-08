export const authStorageKeys = {
  role: 'lb-role',
  token: 'lb-token',
  username: 'lb-username',
}

export function getAuthSession() {
  if (typeof window === 'undefined') return null

  const role = window.localStorage.getItem(authStorageKeys.role)
  const token = window.localStorage.getItem(authStorageKeys.token)
  const username = window.localStorage.getItem(authStorageKeys.username)

  if (!role || !token) return null

  return { role, token, username }
}

export function clearAuthSession() {
  if (typeof window === 'undefined') return

  window.localStorage.removeItem(authStorageKeys.role)
  window.localStorage.removeItem(authStorageKeys.token)
  window.localStorage.removeItem(authStorageKeys.username)
}
