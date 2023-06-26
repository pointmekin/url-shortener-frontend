import { getGolies } from '@/src/utils/goly'
import React from 'react'

export default async function Test() {
  const golies = await getGolies()
  return (
    <div>{JSON.stringify(golies)}</div>
  )
}
