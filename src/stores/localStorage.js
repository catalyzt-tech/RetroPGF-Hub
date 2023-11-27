import { writable } from 'svelte/store'

export const localStorageStore = {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  getItem(key) {
    const storedValue = localStorage.getItem(key)
    return storedValue ? JSON.parse(storedValue) : null
  },
}
