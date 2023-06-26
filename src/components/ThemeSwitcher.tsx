'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { MdBrightnessLow, MdDarkMode } from 'react-icons/md'

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const setTheme = (isDark: boolean) => {
    setIsDarkMode(isDark)

    if (isDark) {
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }

  const adaptTheme = useCallback(() => {
    let themePreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    switch (window.localStorage.getItem('theme')) {
      case 'dark':
        themePreference = true
        break
      case 'light':
        themePreference = false
        break
      default:
        themePreference = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches
    }
    setTheme(themePreference)

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        const newIsDark = e.matches
        setTheme(newIsDark)
      })
  }, [])

  useEffect(() => {
    adaptTheme()
  }, [adaptTheme])

  return (
    <div className='flex items-center'>
      {isDarkMode ? <MdDarkMode /> : <MdBrightnessLow />}
      <label className='relative flex justify-between items-center group p-2 text-xl'>
        <input
          type='checkbox'
          className='absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md hover:cursor-pointer'
          onChange={(e) => {
            setTheme(!isDarkMode)
          }}
          checked={isDarkMode}
        />

        <span className='w-10 h-6 flex items-center flex-shrink-0 ml-1 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-blue-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-4'></span>
      </label>
    </div>
  )
}
