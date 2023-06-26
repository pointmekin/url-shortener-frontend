'use client'

import React, { useContext, useEffect, useState } from 'react'
import Modal from './Modal'
import { ModalContext } from '../contexts/ModalContext'
import { UpdateGolyFormDTO } from '../interfaces/goly.interface'
import { useForm } from 'react-hook-form'
import { createGoly, updateGoly } from '../utils/goly'

export default function UpdateGolyModal() {
  // Context
  const { updateGolyModalData: goly, setUpdateGolyModalData } =
    useContext(ModalContext)

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateGolyFormDTO>({
    mode: 'onChange',
  })
  const onSubmit = async (data: UpdateGolyFormDTO) => {
    try {
      if (!goly) {
        const result = await createGoly(data)
        if (result) window.location.reload()
      } else {
        const result = await updateGoly({
          ...goly,
          ...data,
        })
        if (result) window.location.reload()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    closeUpdateGolyModal()
  }
  const { closeUpdateGolyModal } = useContext(ModalContext)

  // States
  const [randomizeGoly, setRandomizeGoly] = useState<boolean>(false)

  useEffect(() => {
    console.log(goly)
    if (goly) {
      setRandomizeGoly(Boolean(goly && goly.random))
    } 
  }, [goly, setUpdateGolyModalData])

  return (
    <Modal modalId='update_goly_modal' title='Update Goly'>
      <form
        method='dialog'
        onSubmit={handleSubmit(onSubmit)}
        className='modal-box bg-white dark:bg-gray-800 w-11/12 max-w-5xl'
      >
        <h3 className='font-bold text-lg mb-4'>UpdateGoly</h3>
        <div className='h-20'>
          <label htmlFor='redirect'>Readirect To: </label>
          <input
            {...register('redirect')}
            name='redirect'
            type='text'
            defaultValue={goly ? goly.redirect : ''}
            placeholder='https://...'
            className='input input-sm input-bordered w-full'
          />
        </div>

        <div className='h-20'>
          <label htmlFor='goly'>Goly: </label>
          <input
            {...register('goly')}
            name='goly'
            type='text'
            defaultValue={goly ? goly.goly : ''}
            placeholder='Enter your goly...'
            disabled={randomizeGoly}
            className='input input-sm input-bordered w-full disabled:bg-opacity-20 disabled:opacity-50'
          />
        </div>

        <div className='modal-action'>
          <button className='btn btn-neutral' onClick={onCancel}>
            Cancel
          </button>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </form>
    </Modal>
  )
}
