import { Link as RouterLink } from 'react-router-dom'
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

function ProductCard({ producto }) {
  return (
    <Box
      border='1px solid'
      borderColor='gray.200'
      borderRadius='xl'
      overflow='hidden'
      bg='white'
      transition='all 0.2s'
      _hover={{
        borderColor: 'blue.400',
        transform: 'translateY(-4px)',
        boxShadow: 'lg'
      }}
    >
      <Box
        bg='gray.50'
        h='220px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        p='5'
      >
        {producto.imagen ? (
          <Box
            as='img'
            src={producto.imagen}
            alt={producto.nombre}
            maxH='190px'
            maxW='100%'
            objectFit='contain'
          />
        ) : (
          <VStack gap='2' color='gray.400'>
            <Text fontSize='5xl'>⌚</Text>
            <Text fontSize='sm'>Imagen próximamente</Text>
          </VStack>
        )}
      </Box>

      <VStack align='stretch' p='5' gap='4'>
        <HStack justify='space-between' wrap='wrap'>
          <Badge colorPalette='blue'>{producto.marca}</Badge>
          <Badge colorPalette='gray'>{producto.categoria}</Badge>
        </HStack>

        <Heading size='md' color='gray.900' minH='48px'>
          {producto.nombre}
        </Heading>

        <SimpleGrid columns={2} gap='4'>
          <Box>
            <Text fontSize='xs' color='gray.500' mb='1'>
              Pantalla
            </Text>
            <Text fontWeight='semibold' fontSize='sm'>
              {producto.pantalla}
            </Text>
          </Box>

          <Box>
            <Text fontSize='xs' color='gray.500' mb='1'>
              GPS
            </Text>
            <Text fontWeight='semibold' fontSize='sm'>
              {producto.gps ? 'Integrado' : 'No integrado'}
            </Text>
          </Box>

          <Box>
            <Text fontSize='xs' color='gray.500' mb='1'>
              Autonomía anunciada
            </Text>
            <Text fontWeight='semibold' fontSize='sm'>
              {producto.bateria}
            </Text>
          </Box>

          <Box>
            <Text fontSize='xs' color='gray.500' mb='1'>
              Llamadas Bluetooth
            </Text>
            <Text fontWeight='semibold' fontSize='sm'>
              {producto.llamadas ? 'Sí' : 'No'}
            </Text>
          </Box>
        </SimpleGrid>

        <Text color='gray.600' fontSize='sm' lineHeight='1.8'>
          {producto.descripcion}
        </Text>

        <Button asChild colorPalette='blue' width='100%'>
          <RouterLink to={`/producto/${producto.id}`}>
            Ver análisis completo
          </RouterLink>
        </Button>

        {producto.enlaceAmazon && (
          <Button asChild variant='outline' colorPalette='orange' width='100%'>
            <a
              href={producto.enlaceAmazon}
              target='_blank'
              rel='nofollow sponsored noopener noreferrer'
            >
              Consultar en Amazon
            </a>
          </Button>
        )}
      </VStack>
    </Box>
  )
}

export default ProductCard
