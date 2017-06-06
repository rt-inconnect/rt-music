let sounds = [
  { name: 'Cyclist - Heartbeat Speed (feat. Jocelyn Alice)', duration: 283 },
  { name: 'Modjo - Lady (Hear Me Tonight)', duration: 306 },
  { name: 'One Republic - If I Lose Myself  (Alex Inc Beachbreeze Chill Mash)', duration: 277 },
  { name: 'Burak Yeter - Tuesday Ft.Danelle Sandoval', duration: 246 },
  { name: 'Roy Woods - Menace (CDQ)', duration: 294 },
  { name: 'Mishlawi - All Night', duration: 199 },
  { name: 'Sane - Infatuated', duration: 189 },
  { name: 'Break Ft. Fade - Darkness (Original mix)', duration: 129 },
  { name: 'Lostlojic  - Untitled (Craset remix)', duration: 162 },
  { name: 'LTN - Feeling Like Yeah - LTN Sunrise Remix', duration: 361 },
  { name: 'Edamame - didnt I', duration: 215 },
  { name: 'EL B - Buck & Bury feat. Juiceman (Enigma Dubz Remix)', duration: 286 }
]

function generateSounds() {

  let results = []

  sounds.forEach((sound, i) => {
    results.push({
      id: i + 1,
      artist: sound.name.split(' - ')[0],
      name: sound.name.split(' - ')[1],
      cover: i + '.jpg',
      url: i + '.mp3',
      duration: sound.duration,
      position: 0
    })
  })

  return results

}

export default {
  settings: { volume: 100, mute: false, shuffle: false, repeat: false },
  styles: { background: '#6f3634,#616563' },
  playing: generateSounds()[0],
  sounds: generateSounds()

}