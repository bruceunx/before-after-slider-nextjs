import { Flex } from '@radix-ui/themes'
import Image from 'next/image'

export default function Home() {

  return (
    <Flex width='100%' height='100%' justify='center' align='center'>
      <Flex className='relative w-2/3 h-screen mx-auto overflow-hidden'>
        <Flex
          className='absolute left-0 top-0 bg-white w-full h-full'
          style={{
            clip: 'rect(auto, 650px, auto, auto)',
          }}
        >
          <Image src='/assets/1.svg' alt='1.svg' fill />
        </Flex>
        <Flex
          className='absolute left-0 top-0 w-full h-full'
          style={{
            zIndex: '-10',
          }}
        >
          <Image src='/assets/2.svg' alt='2.svg' fill />
        </Flex>
      </Flex>
    </Flex>
  )
}
