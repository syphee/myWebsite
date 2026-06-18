'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

export default function TimeLineSelector({ returnHeight = () => {} }) {
  const [ids, setIds] = useState([])
  const [circleIndex, setCircleIndex] = useState(0)

  useEffect(() => {
    const pageContent = document.querySelectorAll('.pageContent')
    const arrInput = []
    pageContent.forEach(el => arrInput.push(el.id))
    setIds(arrInput)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const height = window.scrollY
      const selectedDot = Math.trunc(height / window.innerHeight)
      setCircleIndex(selectedDot)
      returnHeight(height)
    }

    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll)
    }, 500)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [returnHeight])

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 flex flex-col items-center gap-4">
      {ids.map((item, index) => (
        <Link key={index} href={`#${item}`}>
          <div className={`rounded-full transition-all duration-500 ease-in-out hover:scale-125 ${
            index === circleIndex
              ? 'bg-sky-400 w-3 h-3 animate-pulse shadow-[0_0_8px_2px_rgba(56,189,248,0.6)]'
              : 'bg-white/40 w-2 h-2 hover:bg-white'
          }`} />
        </Link>
      ))}
    </div>
  )
}
