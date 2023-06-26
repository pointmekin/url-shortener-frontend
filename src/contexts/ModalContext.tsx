'use client'
import { Dispatch, SetStateAction, createContext, useState } from 'react'
import { Goly, UpdateGolyModalData } from '../interfaces/goly.interface'

interface ModalContextStruct {
  updateGolyModalData: Goly | undefined
  setUpdateGolyModalData: Dispatch<
    SetStateAction<Goly | undefined>
  >
  openUpdateGolyModal: (data?: Goly) => void
  closeUpdateGolyModal: () => void
}

export const ModalContext = createContext({} as ModalContextStruct)

export const ModalContextProvider = ({ ...props }) => {
  const [updateGolyModalData, setUpdateGolyModalData] = useState<
    Goly | undefined
  >()

  const openUpdateGolyModal = (data?: Goly) => {
    if (data) setUpdateGolyModalData(data)
    // @ts-ignore
    window['update_goly_modal'].showModal()
  }

  const closeUpdateGolyModal = () => {
    // @ts-ignore
    window['update_goly_modal'].close()
  }
  

  const values: ModalContextStruct = {
    updateGolyModalData,
    setUpdateGolyModalData,
    openUpdateGolyModal,
    closeUpdateGolyModal,
  }

  return (
    <ModalContext.Provider value={values}>
      {props.children}
    </ModalContext.Provider>
  )
}
