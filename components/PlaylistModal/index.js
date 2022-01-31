import { Button, Modal, Input } from '@supabase/ui'
import { useState } from 'react'

import { useUser } from '../../hooks/authUser'

import { createPlaylist } from '../../hooks/playlist'

export default function PlaylistModal() {
  const { user } = useUser()

  const [visible, setVisible] = useState(false)
  const [playlistName, setPlaylistName] = useState(false)

  const toggle = () => {
    setVisible(!visible)
  }

  const createPlaylistSupabase = async (name) => {
    const { data, error } = await createPlaylist(user.id, name)
    console.log(data)
    if (error) {
      alert('an error occurred, please try again', error)
      toggle()
    } else {
      alert(`Playlist ${data[0].name} successfully created`)
      toggle()
    }
  }

  return (
    <>
      <Button onClick={toggle}>Create Playlist</Button>
      <Modal
        title="Add a new Playlist"
        visible={visible}
        onCancel={toggle}
        onConfirm={() => createPlaylistSupabase(playlistName)}
      >
        <Input
          label="Name of the playlist"
          onChange={(event) => setPlaylistName(event.target.value)}
        />
      </Modal>
    </>
  )
}
