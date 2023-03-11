import { useState } from 'react'
// Unused code
function useLocalStorageVenta (key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(key)
      return value ? JSON.parse(value) : defaultValue
    } catch (error) {
      console.log(error)
      return defaultValue
    }
  })
  const setValue = (newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.log(error)
    }
    setStoredValue(newValue)
  }
  return [storedValue, setValue]
}
export default useLocalStorageVenta
