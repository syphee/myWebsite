'use client'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const toLabel = (id) =>
  id.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

export default function TimeLineSelector({ returnHeight = () => {} }) {
  const [ids, setIds] = useState([])
  const [circleIndex, setCircleIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const elementsRef = useRef([])

  useEffect(() => {
    const pageContent = document.querySelectorAll('.pageContent')
    const arrInput = []
    elementsRef.current = []
    pageContent.forEach(el => {
      arrInput.push(el.id)
      elementsRef.current.push(el)
    })
    setIds(arrInput)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      returnHeight(scrollY)

      const viewportMid = window.innerHeight * 0.35

      let bestIndex = 0
      let bestDistance = Infinity

      elementsRef.current.forEach((el, index) => {
        const rect = el.getBoundingClientRect()
        // Distance from the element's top edge to 35% down the viewport
        const distance = Math.abs(rect.top - viewportMid)
        // Prefer sections whose top has already entered the upper 35% of screen
        if (rect.top <= viewportMid && distance < bestDistance) {
          bestDistance = distance
          bestIndex = index
        } else if (bestDistance === Infinity) {
          // Nothing above threshold yet — pick the closest one below
          if (distance < bestDistance) {
            bestDistance = distance
            bestIndex = index
          }
        }
      })

      setCircleIndex(bestIndex)
    }

    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }, 300)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ids, returnHeight])

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
            <span
              className={`text-xs font-light tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
                showLabel
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-2 pointer-events-none'
              } ${isActive ? 'text-sky-400' : 'text-white/60'}`}
            >
              {toLabel(item)}
            </span>

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
