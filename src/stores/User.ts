import type { UserResponse } from '@/types/Response'
import { writable } from 'svelte/store'

export const User = writable<UserResponse>()
