import { useCallback, useState } from 'react'
import { profile } from './data/profile.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import QuickStats from './components/QuickStats.jsx'
import Highlights from './components/Highlights.jsx'
import Athletic from './components/Athletic.jsx'
import Career from './components/Career.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import VideoModal from './components/VideoModal.jsx'

export default function App() {
  const [videoOpen, setVideoOpen] = useState(false)
  const openVideo = useCallback(() => setVideoOpen(true), [])
  const closeVideo = useCallback(() => setVideoOpen(false), [])

  return (
    <>
      <Header />
      <main>
        <Hero onPlay={openVideo} />
        <QuickStats />
        <Highlights />
        <Athletic />
        <Career />
        <Contact />
      </main>
      <Footer />
      <VideoModal open={videoOpen} onClose={closeVideo} video={profile.videos.main} />
    </>
  )
}
