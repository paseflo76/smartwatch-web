import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import { productos } from '../../data/productos.js'

const categorias = [
  {
    titulo: 'Mejores smartwatches',
    descripcion: 'Encuentra el reloj que mejor encaja con tu presupuesto.',
    numero: '01'
  },
  {
    titulo: 'Comparativas',
    descripcion: 'Compara características, autonomía, GPS y prestaciones.',
    numero: '02'
  },
  {
    titulo: 'Guías de compra',
    descripcion: 'Aprende qué características importan antes de comprar.',
    numero: '03'
  }
]

function Home() {
  return (
    <Box>
      <Box bg='gray.950' color='white'>
        <Container maxW='1200px' py={{ base: '16', md: '24' }} px='6'>
          <VStack align='start' gap='6' maxW='760px'>
            <Text
              color='blue.300'
              fontWeight='bold'
              fontSize='sm'
              letterSpacing='2px'
              textTransform='uppercase'
            >
              Tecnología para elegir mejor
            </Text>

            <Heading
              as='h1'
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight='1.08'
              letterSpacing='-2px'
            >
              Encuentra tu próximo smartwatch sin complicaciones
            </Heading>

            <Text fontSize={{ base: 'md', md: 'xl' }} color='gray.300'>
              Análisis, comparativas y guías para descubrir qué reloj
              inteligente merece la pena según tus necesidades y presupuesto.
            </Text>

            <Flex gap='4' wrap='wrap' pt='2'>
              <Button as='a' href='/smartwatches' colorPalette='blue' size='lg'>
                Explorar smartwatches
              </Button>

              <Button
                as='a'
                href='/comparador'
                variant='outline'
                color='white'
                borderColor='gray.600'
                size='lg'
              >
                Comparar modelos
              </Button>
            </Flex>
          </VStack>
        </Container>
      </Box>

      <Container maxW='1200px' py={{ base: '14', md: '20' }} px='6'>
        <VStack align='start' gap='3' mb='10'>
          <Text
            color='blue.600'
            fontWeight='bold'
            fontSize='sm'
            letterSpacing='1px'
          >
            EXPLORA SMARTWATCH LAB
          </Text>

          <Heading as='h2' size='2xl' color='gray.900'>
            Todo para elegir bien
          </Heading>

          <Text color='gray.600' maxW='650px' fontSize='lg'>
            Información práctica para comparar relojes, conocer sus diferencias
            y encontrar el modelo adecuado para ti.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap='6'>
          {categorias.map((categoria) => (
            <Box
              key={categoria.numero}
              border='1px solid'
              borderColor='gray.200'
              borderRadius='xl'
              p='7'
              bg='white'
              transition='all 0.2s'
              _hover={{
                borderColor: 'blue.400',
                transform: 'translateY(-4px)',
                boxShadow: 'md'
              }}
            >
              <Text color='blue.600' fontWeight='bold' fontSize='sm' mb='5'>
                {categoria.numero}
              </Text>

              <Heading as='h3' size='lg' mb='3' color='gray.900'>
                {categoria.titulo}
              </Heading>

              <Text color='gray.600' lineHeight='1.8'>
                {categoria.descripcion}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box mt={{ base: '16', md: '24' }}>
          <Flex
            justify='space-between'
            align={{ base: 'start', md: 'end' }}
            direction={{ base: 'column', md: 'row' }}
            gap='3'
            mb='8'
          >
            <Box>
              <Text
                color='blue.600'
                fontWeight='bold'
                fontSize='sm'
                letterSpacing='1px'
                mb='2'
              >
                NUESTRA SELECCIÓN
              </Text>
              <Heading as='h2' size='xl' color='gray.900'>
                Smartwatches destacados
              </Heading>
            </Box>

            <Text color='gray.500' fontSize='sm'>
              Características y análisis para elegir mejor.
            </Text>
          </Flex>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap='6'>
            {productos.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
