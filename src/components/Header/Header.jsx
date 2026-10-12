import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/react'

function Header() {
  return (
    <Box
      as='header'
      bg='white'
      borderBottom='1px solid'
      borderColor='gray.200'
      position='sticky'
      top='0'
      zIndex='100'
    >
      <Flex
        maxW='1200px'
        mx='auto'
        px={{ base: '5', md: '8' }}
        minH='76px'
        align='center'
        justify='space-between'
        gap='6'
        wrap='wrap'
        py='3'
      >
        <Link href='/' _hover={{ textDecoration: 'none' }}>
          <Heading size='lg' color='gray.900' letterSpacing='-1px'>
            SMARTWATCH
            <Box as='span' color='blue.600'>
              LAB
            </Box>
          </Heading>
        </Link>

        <HStack gap={{ base: '4', md: '7' }} wrap='wrap'>
          <Link href='/' color='gray.700' fontWeight='medium'>
            Inicio
          </Link>

          <Link href='/smartwatches' color='gray.700' fontWeight='medium'>
            Smartwatches
          </Link>

          <Link href='/comparador' color='gray.700' fontWeight='medium'>
            Comparador
          </Link>

          <Link href='/guias' color='gray.700' fontWeight='medium'>
            Guías
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
