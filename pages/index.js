import Header from '../components/Header'
import Head from '../components/Head'
import PlaylistModal from '../components/PlaylistModal'
import PlaylistList from '../components/PlaylistList'
import { useUser } from '../hooks/authUser'

const LoggedIn = () => {
  const { user } = useUser()
  if (user) {
    return (
      <div>
        <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Create a playlist and add music to it !
        </p>
        <div className="p-4">
          <PlaylistModal />
        </div>
        <PlaylistList />
      </div>
    )
  } else {
    return (
      <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        Please login
      </p>
    )
  }
}

const Index = () => {
  const { user } = useUser()
  console.log('user: ', user)
  return (
    <>
      <Head />

      <Header />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Playlist</span>{' '}
          </h1>
          <LoggedIn />
        </div>
      </main>
    </>
  )
}

export default Index
