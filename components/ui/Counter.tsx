"use client"

import { useEffect, useState } from "react"

export default function Counter({ value }: { value: string | number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = typeof value === 'string' ? parseInt(value) : value

    if (start === end) return

    let duration = 1200
    let incrementTime = Math.floor(duration / end)

    let timer = setInterval(() => {
      start += 5
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count}+</span>
}