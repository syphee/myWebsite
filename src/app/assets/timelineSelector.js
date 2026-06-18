'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

const toLabel = (id) =>
  id.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

export default function TimeLineSelector({ returnHeight = () => {} }) {
  const [ids, setIds] = useState([])
  const [circleIndex, setCircleIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

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
    <div className="fixed top-1/2 -translate-y-1/2 right-4 z-50 flex flex-col items-end gap-4">
      {ids.map((item, index) => {
        const isActive = index === circleIndex
        const isHovered = index === hoveredIndex
        const showLabel = isActive || isHovered

        return (
          <Link
            key={index}
            href={`#${item}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="flex items-center gap-2 group"
          >
            {/* Label */}
            <span
              className={`text-xs font-light tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                showLabel
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-2 pointer-events-none'
              } ${isActive ? 'text-sky-400' : 'text-white/60'}`}
            >
              {toLabel(item)}
            </span>

            {/* Dot */}
            <div className={`rounded-full flex-shrink-0 transition-all duration-500 ease-in-out ${
              isActive
                ? 'bg-sky-400 w-3 h-3 animate-pulse shadow-[0_0_8px_2px_rgba(56,189,248,0.6)]'
                : 'bg-white/40 w-2 h-2 group-hover:bg-white group-hover:w-3 group-hover:h-3'
            }`} />
          </Link>
        )
      })}
    </div>
  )
}
