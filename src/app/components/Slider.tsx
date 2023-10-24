'use client'
import { useEffect, useRef, useState } from 'react'
import { Flex } from '@radix-ui/themes'
import Image from 'next/image'
import { ColumnSpacingIcon } from '@radix-ui/react-icons'

export default function Slider() {
  const imgRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>(150)
  const [widthPercent, setWidthPercent] = useState<number>(50)

  const handleSlide = (e: any) => {
    const value = e.target.value
    setWidthPercent(value)
    const length = imgRef.current?.offsetWidth
    setWidth((length! * value) / 100)
  }

  useEffect(() => {
    const length = imgRef.current?.offsetWidth
    setWidth(length! * 0.5)
  }, [imgRef])

  return (
    <Flex className='relative w-2/3 h-screen mx-auto overflow-hidden'>
      <Flex
        ref={imgRef}
        className='absolute left-0 top-0 bg-white w-full h-full'
        style={{
          clip: `rect(auto, ${width}px, auto, auto)`,
        }}
      >
        <Image src='/assets/1.svg' alt='before image' fill />
      </Flex>
      <Flex className='absolute left-0 top-0 w-full h-full -z-10'>
        <Image src='/assets/2.svg' alt='after image' fill />
      </Flex>
      <input
        type='range'
        step='.1'
        min='0'
        max='100'
        value='50'
        onChange={handleSlide}
        className='absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20'
      />
      <Flex
        className='absolute w-2 h-full inset-0 bg-white -translate-x-1/2 -z-1 shadow-xl'
        style={{ left: `${widthPercent}%` }}
      ></Flex>
      <ColumnSpacingIcon
        className='absolute inset-0 w-10 h-10 top-1/2 -translate-y-1/2 -translate-x-1/2 text-blue-300 rounded-full border-solid border-2 p-1 border-blue-300 bg-white'
        style={{ left: `${widthPercent}%` }}
      />
    </Flex>
  )
}
