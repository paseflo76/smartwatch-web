import { useState } from 'react'
import {
  Box,
  Container,
  Heading,
  NativeSelect,
  SimpleGrid,
  Table,
  Text,
  VStack
} from '@chakra-ui/react'

import { productos } from '../../data/productos.js'
import RadarComparacion from '../../components/RadarComparacion/RadarComparacion.jsx'

function mostrarPrecio(producto) {
  if (producto.precio === null || producto.precio === undefined) {
    return 'Pendiente de verificar'
  }

  return `${Number(producto.precio).toFixed(2).replace('.', ',')} €`
}

function Comparador() {
  const [idProductoA, setIdProductoA] = useState(
    productos[0]?.id?.toString() || ''
  )

  const [idProductoB, setIdProductoB] = useState(
    productos[1]?.id?.toString() || productos[0]?.id?.toString() || ''
  )

  const productoA = productos.find(
    (producto) => producto.id === Number(idProductoA)
  )

  const productoB = productos.find(
    (producto) => producto.id === Number(idProductoB)
  )

  const caracteristicas = [
    {
      nombre: 'Precio',
      valor: (producto) => mostrarPrecio(producto)
    },
    { nombre: 'Marca', valor: (producto) => producto.marca },
    { nombre: 'Pantalla', valor: (producto) => producto.pantalla },
    {
      nombre: 'GPS integrado',
      valor: (producto) => (producto.gps ? 'Sí' : 'No')
    },
    { nombre: 'Batería anunciada', valor: (producto) => producto.bateria },
    {
      nombre: 'Llamadas Bluetooth',
      valor: (producto) => (producto.llamadas ? 'Sí' : 'No')
    },
    { nombre: 'Categoría', valor: (producto) => producto.categoria }
  ]

  const mismaSeleccion = productoA && productoB && productoA.id === productoB.id

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
            COMPARADOR
          </Text>

          <Heading as='h1' size='2xl' color='gray.900' mb='4'>
            Compara dos smartwatches
          </Heading>

          <Text color='gray.600' maxW='750px' lineHeight='1.8'>
            Selecciona dos modelos y compara sus puntuaciones, precios y
            características principales.
          </Text>
        </Box>

        {productos.length < 2 ? (
          <Box bg='gray.50' p='6' borderRadius='xl'>
            <Text color='gray.600'>
              Necesitas al menos dos productos para utilizar el comparador.
            </Text>
          </Box>
        ) : (
          <>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap='6'>
              <Box>
                <Text fontWeight='semibold' mb='2'>
                  Primer smartwatch
                </Text>

                <NativeSelect.Root>
                  <NativeSelect.Field
                    value={idProductoA}
                    onChange={(event) => setIdProductoA(event.target.value)}
                  >
                    {productos.map((producto) => (
                      <option key={producto.id} value={producto.id.toString()}>
                        {producto.nombre}
                      </option>
                    ))}
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Box>

              <Box>
                <Text fontWeight='semibold' mb='2'>
                  Segundo smartwatch
                </Text>

                <NativeSelect.Root>
                  <NativeSelect.Field
                    value={idProductoB}
                    onChange={(event) => setIdProductoB(event.target.value)}
                  >
                    {productos.map((producto) => (
                      <option key={producto.id} value={producto.id.toString()}>
                        {producto.nombre}
                      </option>
                    ))}
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Box>
            </SimpleGrid>

            {mismaSeleccion && (
              <Text color='orange.600' fontSize='sm'>
                Has seleccionado el mismo reloj en las dos columnas. Elige otro
                modelo para realizar una comparación útil.
              </Text>
            )}

            {productoA && productoB && !mismaSeleccion && (
              <>
                <Box
                  border='1px solid'
                  borderColor='gray.200'
                  borderRadius='2xl'
                  p={{ base: '3', md: '6' }}
                >
                  <RadarComparacion
                    productos={[productoA, productoB]}
                    titulo='Comparativa visual de prestaciones'
                  />
                </Box>

                <Box>
                  <Heading size='lg' mb='4'>
                    Comparación de características
                  </Heading>

                  <Box overflowX='auto' borderWidth='1px' borderRadius='xl'>
                    <Table.Root size='md' variant='line'>
                      <Table.Header>
                        <Table.Row>
                          <Table.ColumnHeader>
                            Característica
                          </Table.ColumnHeader>

                          <Table.ColumnHeader>
                            {productoA.nombre}
                          </Table.ColumnHeader>

                          <Table.ColumnHeader>
                            {productoB.nombre}
                          </Table.ColumnHeader>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        {caracteristicas.map((caracteristica) => (
                          <Table.Row key={caracteristica.nombre}>
                            <Table.Cell fontWeight='semibold'>
                              {caracteristica.nombre}
                            </Table.Cell>

                            <Table.Cell>
                              {caracteristica.valor(productoA)}
                            </Table.Cell>

                            <Table.Cell>
                              {caracteristica.valor(productoB)}
                            </Table.Cell>
                          </Table.Row>
                        ))}
                      </Table.Body>
                    </Table.Root>
                  </Box>
                </Box>
              </>
            )}
          </>
        )}
      </VStack>
    </Container>
  )
}

export default Comparador
