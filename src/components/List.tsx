'use client'
import React, { useContext } from 'react'
import { Item } from './Item'
import { Goly } from '../interfaces/goly.interface'
import UpdateGolyModal from './UpdateGolyModal'
import { ModalContext } from '../contexts/ModalContext'
import CreateGolyModal from './CreateGolyModal'

type Props = {
  golies: Goly[]
}

export default async function List(props: Props) {
  // const { openUpdateGolyModal } = useContext(ModalContext)

  if (!props || !props.golies) return <div>Loading...</div>
  return (
    <div>
      <div className='grid place-items-center'>
        <button
          className='btn btn-primary'
          // onClick={() => openUpdateGolyModal()}
          onClick={() => {
            // @ts-ignore
            window['create_goly_modal'].showModal()
          }}
        >
          Create goly
        </button>
      </div>
      <div>
        {props.golies.map((goly: Goly, index: number) => (
          <div key={index}>
            <Item key={goly.id} goly={goly} />
          </div>
        ))}
        <UpdateGolyModal />
        <CreateGolyModal />
      </div>
    </div>
  )
}
