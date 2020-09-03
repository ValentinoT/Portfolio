import { useState, useEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // const themeOS = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    //   ? 'dark'
    //   : 'light'

    const localTheme = window.localStorage.getItem('theme')

    // themeOS &&
    !localTheme
      ? setTheme('dark')
      : localTheme && setTheme(localTheme)
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }
  return [theme, toggleTheme]
}
