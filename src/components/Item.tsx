'use client'

import React from 'react'
import Card from './Card'
import Button from './Button'
import { Goly } from '../interfaces/goly.interface'
import { ModalContext } from '../contexts/ModalContext'
import { deleteGoly } from '../utils/goly'

type Props = {
  goly: Goly
}
export const Item: React.FC<Props> = ({ goly }: Props) => {
  const { openUpdateGolyModal } = React.useContext(ModalContext)

  const openModal = () => {
    openUpdateGolyModal(goly)
  }

  const removeGoly = () => {
    try {
      deleteGoly(goly.id)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card>
      <div className='flex gap-2 mb-1'>
        <span className='flex-none w-20 break-words text-black  dark:text-gray-200 opacity-40'>
          Goly:
        </span>
        <span className='flex-wrap grow break-all'>
          http://localhost:3000/r/{goly.goly}
        </span>
      </div>

      <div className='flex gap-2 mb-1'>
        <span className='flex-none w-20 break-words text-black  dark:text-gray-200 opacity-40'>
          Redirect:
        </span>
        <p className='flex-wrap grow break-all'>{goly.redirect}</p>
      </div>

      <div className='flex gap-2 mb-1'>
        <span className='flex-none w-20 break-words text-black  dark:text-gray-200 opacity-40'>
          Clicked:
        </span>
        <p className='flex-wrap grow break-all'>{goly.clicked}</p>
      </div>

      <div className='flex justify-between'>
        <div className='flex gap-2 mt-3'>
          <Button variant='neutral' onClick={openModal}>
            Update
          </Button>
          <Button variant='neutral' onClick={removeGoly}>
            Delete
          </Button>
        </div>
        <div className='flex gap-2 mt-3'>
          <a href={goly.redirect}>
            <Button variant='primary'>Visit</Button>
          </a>
        </div>
      </div>
    </Card>
  )
}
