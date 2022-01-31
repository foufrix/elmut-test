import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { fetchPlaylist } from '../../hooks/playlist'
import Header from '../../components/Header'

const Playlist = () => {
  const router = useRouter()
  const { pid } = router.query

  const [playlist, setPlaylist] = useState({})

  useEffect(() => {
    fetchPlaylist(pid).then(({ data, error }) => {
      if (error) {
        console.log(error)
      } else {
        console.log('data: ', data)
        setPlaylist(data[0])
      }
    })
  }, [pid])

  return (
    <>
      <Header />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Playlist : {playlist.name}</span>{' '}
          </h1>
          {playlist.musics &&
            playlist.musics.map((data) => (
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Create a playlist and add music to it !
              </p>
            ))}
        </div>
      </main>
    </>
  )
}

export default Playlist
