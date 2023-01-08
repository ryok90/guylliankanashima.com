import { Center, Image } from '@chakra-ui/react'

function App() {
  return (
    <Center h={{ base: '90vh', lg: '95vh' }} w='100%'>
      <Image w={{ base: '15rem', lg: 'auto' }} src='/images/under-construction.webp' alt='under construction' />
    </Center>
  )
}

export default App
