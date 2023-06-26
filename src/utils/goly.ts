import { CreateGolyDTO, Goly } from '../interfaces/goly.interface'

export const getGolies = async (): Promise<Goly[]> => {
  const res = await fetch('http://127.0.0.1:3001/goly', { cache: "no-store"})
  await(400)
  const golies: Goly[] = await res.json()
  return golies
}

export const createGoly = async (data: CreateGolyDTO): Promise<Goly> => {
  const json = {
    redirect: data.redirect,
    goly: data.goly,
    random: data.random,
  }
  // create a patch request to update the goly
  const res = await fetch('http://127.0.0.1:3001/goly', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
  const goly = await res.json()
  return goly
}

export const updateGoly = async (data: Goly): Promise<Goly> => {
  const json = {
    redirect: data.redirect,
    goly: data.goly,
    random: data.random,
    id: data.id
  }
  // create a patch request to update the goly
  const res = await fetch('http://127.0.0.1:3001/goly', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
  const updatedGoly = await res.json()
  return updatedGoly
}

export const deleteGoly = async (id: number): Promise<void> => {
  // create a delete request to delete the goly
  await fetch(`http://127.0.0.1:3001/goly/${id}`,{
    method: 'DELETE'
  })
}