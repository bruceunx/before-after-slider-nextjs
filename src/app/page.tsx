'use client'
import { Flex } from '@radix-ui/themes'
import BeforeAfterSlider from './components/Slider'

export default function Home() {
  return (
    <Flex width='100%' height='100%' justify='center' align='center'>
      <BeforeAfterSlider />
    </Flex>
  )
}
