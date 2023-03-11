import { create } from 'zustand'
export const useCounterStore = create((set, get) => ({
  count: 0,
  title: 'Counter',
  posts: [],
  increment: (value) => {
    if (!value) value = 0
    set((state) => ({ count: state.count + 1 + value }))
  },
  getPosts: async () => {
    // const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    // const posts = await res.json()
    const posts = await (
      await fetch('https://jsonplaceholder.typicode.com/posts')
    ).json()
    set((state) => ({ ...state, posts }))
  },
  clearStore: () => {
    set({}, true)
  },
  multiply: (value) => {
    const { count } = get()
    if (!value) value = 2
    set({ count: count * value })
  }
}))
