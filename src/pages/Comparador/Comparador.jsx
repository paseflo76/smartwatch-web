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
      nombre: 'Marca',
      valor: (producto) => producto.marca
    },
    {
      nombre: 'Pantalla',
      valor: (producto) => producto.pantalla
    },
    {
      nombre: 'GPS integrado',
      valor: (producto) => (producto.gps ? 'Sí' : 'No')
    },
    {
      nombre: 'Batería anunciada',
      valor: (producto) => producto.bateria
    },
    {
      nombre: 'Llamadas Bluetooth',
      valor: (producto) => (producto.llamadas ? 'Sí' : 'No')
    },
    {
      nombre: 'Categoría',
      valor: (producto) => producto.categoria
    }
  ]

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
            Selecciona dos modelos y consulta sus principales características
            para descubrir cuál se adapta mejor a tus necesidades.
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

            {productoA && productoB && (
              <Box overflowX='auto' borderWidth='1px' borderRadius='xl'>
                <Table.Root size='md' variant='line'>
                  <Table.Header>
                    <Table.Row>
                      <Table.ColumnHeader>Característica</Table.ColumnHeader>

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
            )}

            {productoA && productoB && productoA.id === productoB.id && (
              <Text color='orange.600' fontSize='sm'>
                Has seleccionado el mismo reloj en las dos columnas. Elige otro
                modelo para realizar una comparación útil.
              </Text>
            )}
          </>
        )}
      </VStack>
    </Container>
  )
}

export default Comparador
