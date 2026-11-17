import { Link as RouterLink, useParams } from 'react-router-dom'

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

import RadarComparacion from '../../components/RadarComparacion/RadarComparacion.jsx'

const nombresTecnicos = {
  pantalla: 'Pantalla',
  resolucion: 'Resolución',
  peso: 'Peso',
  resistenciaAgua: 'Resistencia al agua',
  bateriaSmartwatch: 'Autonomía en uso normal',
  bateriaGps: 'Autonomía con GPS',
  bateriaGpsMultibanda: 'Autonomía GPS multibanda',
  bateriaIntensivo: 'Autonomía en uso intensivo',
  gps: 'Sistemas GPS',
  sensores: 'Sensores',
  deporte: 'Modos deportivos',
  entrenamiento: 'Funciones de entrenamiento',
  conectividad: 'Conectividad',
  funcionesInteligentes: 'Funciones inteligentes',
  llamadas: 'Llamadas',
  compatibilidad: 'Compatibilidad'
}

function Producto() {
  const { id } = useParams()

  const producto = productos.find((item) => item.id === Number(id))

  if (!producto) {
    return (
      <Container maxW='1000px' py='16' px='6'>
        <Heading size='xl' mb='4'>
          Producto no encontrado
        </Heading>

        <Text color='gray.600' mb='6'>
          No hemos encontrado el smartwatch que buscas.
        </Text>

        <Button asChild colorPalette='blue'>
          <RouterLink to='/smartwatches'>Volver al catálogo</RouterLink>
        </Button>
      </Container>
    )
  }

  return (
    <Container maxW='1150px' py={{ base: '10', md: '16' }} px='6'>
      <Button asChild variant='outline' mb='8'>
        <RouterLink to='/smartwatches'>← Volver al catálogo</RouterLink>
      </Button>

      {/* INFORMACIÓN PRINCIPAL */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap='10'>
        <Box
          bg='gray.50'
          borderRadius='2xl'
          minH='350px'
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
              maxH='400px'
              objectFit='contain'
            />
          ) : (
            <Text fontSize='7xl'>⌚</Text>
          )}
        </Box>

        <VStack align='stretch' gap='5'>
          <Badge colorPalette='blue' alignSelf='start'>
            {producto.marca}
          </Badge>

          <Heading as='h1' size='2xl' color='gray.900'>
            {producto.nombre}
          </Heading>

          <Text color='gray.600' lineHeight='1.9'>
            {producto.descripcion}
          </Text>

          {/* PRECIO */}
          <Box bg='gray.50' borderRadius='xl' p='5'>
            <Text color='gray.500' fontSize='sm' mb='1'>
              Precio de referencia
            </Text>

            {producto.precio !== null && producto.precio !== undefined ? (
              <Heading size='2xl' color='gray.900'>
                {Number(producto.precio).toFixed(2).replace('.', ',')} €
              </Heading>
            ) : (
              <Text color='gray.600'>Precio pendiente de verificar</Text>
            )}
          </Box>

          {/* CARACTERÍSTICAS BÁSICAS */}
          <Box>
            <Heading size='md' mb='4'>
              Características principales
            </Heading>

            <VStack align='stretch' gap='3'>
              <Habilidad nombre='Pantalla' valor={producto.pantalla} />

              <Habilidad
                nombre='GPS'
                valor={producto.gps ? 'Integrado' : 'No integrado'}
              />

              <Habilidad
                nombre='Autonomía anunciada'
                valor={producto.bateria}
              />

              <Habilidad
                nombre='Llamadas Bluetooth'
                valor={producto.llamadas ? 'Sí' : 'No'}
              />

              <Habilidad nombre='Categoría' valor={producto.categoria} />
            </VStack>
          </Box>

          {producto.enlaceAmazon && (
            <Button asChild colorPalette='orange' size='lg' width='100%'>
              <a
                href={producto.enlaceAmazon}
                target='_blank'
                rel='nofollow sponsored noopener noreferrer'
              >
                Consultar en Amazon
              </a>
            </Button>
          )}

          <Text color='gray.500' fontSize='xs' lineHeight='1.7'>
            Los precios y la disponibilidad pueden cambiar. Comprueba siempre el
            importe final en la tienda.
          </Text>
        </VStack>
      </SimpleGrid>

      {/* VALORACIÓN Y GRÁFICO */}
      <Box
        border='1px solid'
        borderColor='gray.200'
        borderRadius='2xl'
        p={{ base: '3', md: '6' }}
        mt='12'
      >
        <RadarComparacion
          productos={[producto]}
          titulo='Valoración de prestaciones'
        />
      </Box>

      {/* FICHA TÉCNICA COMPLETA */}
      <Box mt='14'>
        <Heading size='xl' mb='3'>
          Ficha técnica completa
        </Heading>

        <Text color='gray.600' mb='6' lineHeight='1.8'>
          Consulta las especificaciones y funciones principales del{' '}
          {producto.nombre}.
        </Text>

        <Box
          border='1px solid'
          borderColor='gray.200'
          borderRadius='xl'
          overflow='hidden'
        >
          {Object.entries(producto.datosTecnicos || {}).map(
            ([clave, valor], index) => (
              <Box
                key={clave}
                display='grid'
                gridTemplateColumns={{
                  base: '1fr',
                  md: '220px 1fr'
                }}
                gap='2'
                p='4'
                bg={index % 2 === 0 ? 'gray.50' : 'white'}
                borderBottom={
                  index === Object.keys(producto.datosTecnicos).length - 1
                    ? 'none'
                    : '1px solid'
                }
                borderColor='gray.200'
              >
                <Text fontWeight='semibold' color='gray.700' fontSize='sm'>
                  {nombresTecnicos[clave] || clave}
                </Text>

                <Text color='gray.600' fontSize='sm' lineHeight='1.8'>
                  {valor}
                </Text>
              </Box>
            )
          )}
        </Box>

        <Text color='gray.500' fontSize='xs' mt='3'>
          Las especificaciones pueden variar según la versión, el mercado y las
          actualizaciones del fabricante.
        </Text>
      </Box>

      {/* VENTAJAS E INCONVENIENTES */}
      <SimpleGrid columns={{ base: 1, md: 2 }} gap='6' mt='14'>
        <Box border='1px solid' borderColor='green.200' borderRadius='xl' p='6'>
          <Heading size='lg' color='green.700' mb='5'>
            Ventajas
          </Heading>

          <VStack align='stretch' gap='3'>
            {producto.ventajas.map((ventaja) => (
              <Box key={ventaja} display='flex' gap='2' alignItems='start'>
                <Text color='green.600' fontWeight='bold'>
                  ✓
                </Text>

                <Text color='gray.700' lineHeight='1.7'>
                  {ventaja}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>

        <Box
          border='1px solid'
          borderColor='orange.200'
          borderRadius='xl'
          p='6'
        >
          <Heading size='lg' color='orange.700' mb='5'>
            Inconvenientes
          </Heading>

          <VStack align='stretch' gap='3'>
            {producto.inconvenientes.map((inconveniente) => (
              <Box
                key={inconveniente}
                display='flex'
                gap='2'
                alignItems='start'
              >
                <Text color='orange.600' fontWeight='bold'>
                  −
                </Text>

                <Text color='gray.700' lineHeight='1.7'>
                  {inconveniente}
                </Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </SimpleGrid>

      {/* ACCESO AL COMPARADOR */}
      <Box bg='gray.50' borderRadius='xl' p='6' mt='10'>
        <Heading size='md' mb='3'>
          ¿Quieres comparar este reloj con otro?
        </Heading>

        <Text color='gray.600' mb='5' lineHeight='1.8'>
          Compara sus prestaciones, puntuaciones y características para conocer
          las diferencias entre modelos.
        </Text>

        <Button asChild colorPalette='blue'>
          <RouterLink to='/comparador'>Ir al comparador</RouterLink>
        </Button>
      </Box>
    </Container>
  )
}

function Habilidad({ nombre, valor }) {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='start'
      gap='4'
      borderBottom='1px solid'
      borderColor='gray.100'
      pb='3'
    >
      <Text color='gray.500' fontSize='sm'>
        {nombre}
      </Text>

      <Text color='gray.900' fontWeight='semibold' textAlign='right'>
        {valor}
      </Text>
    </Box>
  )
}

export default Producto
