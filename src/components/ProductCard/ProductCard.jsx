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
        h='190px'
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
            maxH='160px'
            maxW='100%'
            objectFit='contain'
          />
        ) : (
          <VStack gap='2' color='gray.400'>
            <Text fontSize='4xl'>◉</Text>
            <Text fontSize='sm'>Imagen próximamente</Text>
          </VStack>
        )}
      </Box>

      <VStack align='stretch' p='5' gap='4'>
        <HStack justify='space-between' align='center'>
          <Badge colorPalette='blue'>{producto.marca}</Badge>
          <Badge colorPalette='gray'>{producto.categoria}</Badge>
        </HStack>

        <Heading size='md' color='gray.900' minH='48px'>
          {producto.nombre}
        </Heading>

        <SimpleGrid columns={2} gap='3'>
          <Box>
            <Text fontSize='xs' color='gray.500'>
              Pantalla
            </Text>
            <Text fontWeight='semibold'>{producto.pantalla}</Text>
          </Box>

          <Box>
            <Text fontSize='xs' color='gray.500'>
              GPS
            </Text>
            <Text fontWeight='semibold'>
              {producto.gps ? 'Integrado' : 'No'}
            </Text>
          </Box>

          <Box>
            <Text fontSize='xs' color='gray.500'>
              Batería anunciada
            </Text>
            <Text fontWeight='semibold'>{producto.bateria}</Text>
          </Box>

          <Box>
            <Text fontSize='xs' color='gray.500'>
              Llamadas Bluetooth
            </Text>
            <Text fontWeight='semibold'>{producto.llamadas ? 'Sí' : 'No'}</Text>
          </Box>
        </SimpleGrid>

        <Text color='gray.600' fontSize='sm' lineHeight='1.7'>
          {producto.descripcion}
        </Text>

        <Button
          as='a'
          href={`/producto/${producto.id}`}
          colorPalette='blue'
          width='100%'
        >
          Ver análisis
        </Button>
      </VStack>
    </Box>
  )
}

export default ProductCard
