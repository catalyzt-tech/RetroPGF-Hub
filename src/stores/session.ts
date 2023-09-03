import { writable } from 'svelte/store'

const stored = localStorage.session || ""

export const loginSession = writable(stored)

// Anytime the store changes, update the local storage value.
loginSession.subscribe((value) => localStorage.session = value)

export const googleInitialized = writable(false)