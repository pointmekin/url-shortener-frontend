"use client"

import React from 'react'

type Props = {
  children?: React.ReactNode,
  title: string,
  modalId: string,
}


export default function Modal(props: Props) {
  return (
    <dialog id={props.modalId} className='modal text-black dark:text-white'>
      {props.children}
    </dialog>
  )
}
