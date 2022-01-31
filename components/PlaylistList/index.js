import { Card } from '@supabase/ui'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import { useUser } from '../../hooks/authUser'

import { fetchPlaylists } from '../../hooks/playlist'

export default function PlaylistList() {
  const { user } = useUser()

  const [playlistList, setPlaylistName] = useState([])

  useEffect(() => {
    fetchPlaylists(user.id).then(({ data, error }) => {
      if (error) {
        console.log(error)
      } else {
        setPlaylistName(data)
      }
    })
  }, [user])

  return (
    <div className="flex justify-start gap-10">
      {playlistList.map((data) => (
        <Link href={`/playlist/${data.id}`} key={data.id}>
          <a>
            <Card title={data.name} key={data.id}></Card>
          </a>
        </Link>
      ))}
    </div>
  )
}
