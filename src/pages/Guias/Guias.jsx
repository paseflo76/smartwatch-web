import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

const guias = [
  {
    id: 'elegir-smartwatch',
    categoria: 'GUÍA DE COMPRA',
    titulo: 'Cómo elegir un smartwatch en 2026',
    descripcion:
      'Aprende qué debes mirar antes de comprar: pantalla, batería, GPS, sensores y compatibilidad con tu móvil.',
    lectura: '6 minutos'
  },
  {
    id: 'smartwatch-deporte',
    categoria: 'DEPORTE',
    titulo: 'Qué smartwatch elegir para hacer deporte',
    descripcion:
      'Descubre qué funciones importan para correr, caminar, entrenar en el gimnasio o controlar tus actividades.',
    lectura: '7 minutos'
  },
  {
    id: 'bateria-smartwatch',
    categoria: 'CARACTERÍSTICAS',
    titulo: 'La batería de un smartwatch: qué debes saber',
    descripcion:
      'Entiende por qué cambia la autonomía real según el GPS, la pantalla, las llamadas y el seguimiento de salud.',
    lectura: '5 minutos'
  },
  {
    id: 'gps-smartwatch',
    categoria: 'TECNOLOGÍA',
    titulo: 'GPS en un smartwatch: cómo elegir bien',
    descripcion:
      'Conoce las diferencias entre relojes con GPS integrado y los que dependen del teléfono.',
    lectura: '5 minutos'
  }
]

function Guias() {
  return (
    <Container maxW='1200px' py={{ base: '10', md: '16' }} px='6'>
      <VStack align='stretch' gap='8'>
        <Box>
          <Text
            color='blue.600'
            fontWeight='bold'
            fontSize='sm'
            letterSpacing='1px'
            mb='3'
          >
            APRENDE ANTES DE COMPRAR
          </Text>

          <Heading as='h1' size='2xl' color='gray.900' mb='4'>
            Guías para elegir tu smartwatch
          </Heading>

          <Text color='gray.600' maxW='750px' lineHeight='1.8'>
            Explicaciones sencillas y consejos prácticos para entender las
            características de los relojes inteligentes y elegir el modelo que
            mejor encaja con tus necesidades.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap='6'>
          {guias.map((guia) => (
            <Box
              key={guia.id}
              border='1px solid'
              borderColor='gray.200'
              borderRadius='xl'
              p={{ base: '6', md: '8' }}
              bg='white'
              transition='all 0.2s'
              _hover={{
                borderColor: 'blue.400',
                transform: 'translateY(-3px)',
                boxShadow: 'md'
              }}
            >
              <VStack align='stretch' gap='4'>
                <Text
                  color='blue.600'
                  fontWeight='bold'
                  fontSize='xs'
                  letterSpacing='1px'
                >
                  {guia.categoria}
                </Text>

                <Heading as='h2' size='lg' color='gray.900'>
                  {guia.titulo}
                </Heading>

                <Text color='gray.600' lineHeight='1.8'>
                  {guia.descripcion}
                </Text>

                <Text color='gray.500' fontSize='sm'>
                  Lectura estimada: {guia.lectura}
                </Text>

                <Button asChild colorPalette='blue' alignSelf='start'>
                  <RouterLink to={`/guias/${guia.id}`}>Leer guía</RouterLink>
                </Button>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Guias
