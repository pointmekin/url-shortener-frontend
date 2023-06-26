import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Card: React.FC<Props> = (props) => {
  return (
    <div className='w-full dark:text-white bg-white dark:bg-gray-800 backdrop-filter backdrop-blur-md drop-shadow-2xl mx-3 my-2 p-3'>
      {props.children}
    </div>
  )
}

export default Card
