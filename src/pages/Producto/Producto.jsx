import { useParams, Link as RouterLink } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

import { productos } from '../../data/productos.js'

function Producto() {
  const { id } = useParams()

  const producto = productos.find((item) => item.id === Number(id))

  if (!producto) {
    return (
      <Container maxW='1200px' py='16'>
        <Heading size='xl' mb='4'>
          Producto no encontrado
        </Heading>

        <Text color='gray.600' mb='6'>
          No hemos encontrado el smartwatch que buscas.
        </Text>

        <Button asChild colorPalette='blue'>
          <RouterLink to='/'>Volver al inicio</RouterLink>
        </Button>
      </Container>
    )
  }

  return (
    <Container maxW='1000px' py={{ base: '10', md: '16' }} px='6'>
      <Button asChild variant='outline' mb='8'>
        <RouterLink to='/'>← Volver a los smartwatches</RouterLink>
      </Button>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap='10'>
        <Box
          bg='gray.50'
          borderRadius='xl'
          minH='300px'
          display='flex'
          alignItems='center'
          justifyContent='center'
          p='8'
        >
          {producto.imagen ? (
            <Box
              as='img'
              src={producto.imagen}
              alt={producto.nombre}
              maxW='100%'
              maxH='350px'
              objectFit='contain'
            />
          ) : (
            <Text color='gray.500'>Imagen próximamente</Text>
          )}
        </Box>

        <VStack align='stretch' gap='5'>
          <Badge colorPalette='blue' alignSelf='start'>
            {producto.marca}
          </Badge>

          <Heading as='h1' size='2xl' color='gray.900'>
            {producto.nombre}
          </Heading>

          <Text color='gray.600' lineHeight='1.8'>
            {producto.descripcion}
          </Text>

          <Heading size='md'>Características principales</Heading>

          <Box>
            <Text>
              <strong>Pantalla:</strong> {producto.pantalla}
            </Text>

            <Text>
              <strong>GPS:</strong>{' '}
              {producto.gps ? 'Integrado' : 'No integrado'}
            </Text>

            <Text>
              <strong>Batería anunciada:</strong> {producto.bateria}
            </Text>

            <Text>
              <strong>Llamadas Bluetooth:</strong>{' '}
              {producto.llamadas ? 'Sí' : 'No'}
            </Text>

            <Text>
              <strong>Categoría:</strong> {producto.categoria}
            </Text>
          </Box>

          <Heading size='md'>Ventajas</Heading>

          <VStack align='stretch' gap='2'>
            {producto.ventajas.map((ventaja) => (
              <Text key={ventaja} color='gray.700'>
                ✓ {ventaja}
              </Text>
            ))}
          </VStack>

          <Heading size='md'>Inconvenientes</Heading>

          <VStack align='stretch' gap='2'>
            {producto.inconvenientes.map((inconveniente) => (
              <Text key={inconveniente} color='gray.700'>
                − {inconveniente}
              </Text>
            ))}
          </VStack>

          <Text color='gray.500' fontSize='sm'>
            El precio y la disponibilidad se añadirán cuando verifiquemos los
            datos del producto.
          </Text>
        </VStack>
      </SimpleGrid>
    </Container>
  )
}

export default Producto
