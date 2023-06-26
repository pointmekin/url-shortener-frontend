import List from '@/src/components/List'
import { ModalContextProvider } from '@/src/contexts/ModalContext'
import { getGolies } from '@/src/utils/goly'

export default async function Home() {
  const golies = await getGolies()

  return (
    <ModalContextProvider>
      <main className='flex min-h-screen flex-col items-center justify-between py-24'>
        <h1 className='text-4xl font-bold text-center'>Welcome to Goly!</h1>
        <div className='container'>
          <List golies={golies} />
        </div>
      </main>
    </ModalContextProvider>
  )
}
