'use client'
import React from 'react'

type Props = {
  children?: React.ReactNode | undefined
  variant?: 'primary' | 'neutral' | 'ghost' | 'danger'
  onClick?: () => void | undefined
}

function Button({ variant = 'primary', onClick, children }: Props) {
  const buttonStyle = () => {
    switch (variant) {
      case 'primary':
        return 'btn btn-primary'
      case 'neutral':
        return 'btn btn-neutral'
      case 'ghost':
        return 'btn btn-ghost'
      case 'danger':
        return 'btn btn-error'
      default:
        return 'btn btn-neutral'
    }
  }
  return (
    <button className={`${buttonStyle()} btn-sm`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
