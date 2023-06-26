export interface Goly {
  id: number
  redirect: string
  goly: string
  clicked: boolean
  random: boolean
}

export interface UpdateGolyModalData {
  redirect: string,
  goly: string,
  random: boolean
  action: () => void
}

export interface UpdateGolyFormDTO {
  redirect: string,
  goly: string,
  random: boolean
}

export interface CreateGolyDTO {
  redirect: string,
  goly: string,
  random: boolean
}