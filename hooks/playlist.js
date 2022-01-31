import { supabase } from '../utils/initSupabase'

const createPlaylist = async (creatorId, name) => {
  const { data, error } = await supabase.from('playlists').insert([{ creatorId, name }])

  return { data, error }
}

const fetchPlaylists = async (creatorId) => {
  console.log('creatorId: ', creatorId)
  const { data, error } = await supabase.from('playlists').select('*').eq('creatorId', creatorId)

  return { data, error }
}

const fetchPlaylist = async (playlistId) => {
  console.log('playlistId: ', playlistId)
  const { data, error } = await supabase.from('playlists').select('*').eq('id', playlistId)

  return { data, error }
}

export { createPlaylist, fetchPlaylists, fetchPlaylist }
