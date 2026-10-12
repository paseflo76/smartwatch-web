import { useMemo, useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Input,
  NativeSelect,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'

import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import { productos } from '../../data/productos.js'

function Smartwatches() {
  const [busqueda, setBusqueda] = useState('')
  const [marca, setMarca] = useState('Todas')
  const [precioMaximo, setPrecioMaximo] = useState('Todos')

  const marcas = useMemo(
    () => ['Todas', ...new Set(productos.map((producto) => producto.marca))],
    []
  )

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())

    const coincideMarca = marca === 'Todas' || producto.marca === marca

    const coincidePrecio =
      precioMaximo === 'Todos' ||
      (producto.precio !== null &&
        Number(producto.precio) <= Number(precioMaximo))

    return coincideBusqueda && coincideMarca && coincidePrecio
  })

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
            CATÁLOGO SMARTWATCH LAB
          </Text>

          <Heading as='h1' size='2xl' color='gray.900' mb='4'>
            Encuentra tu smartwatch ideal
          </Heading>

          <Text color='gray.600' maxW='750px' lineHeight='1.8'>
            Busca por modelo, filtra por marca y compara las características de
            los relojes inteligentes antes de decidir cuál encaja contigo.
          </Text>
        </Box>

        {/* FILTROS */}
        <SimpleGrid columns={{ base: 1, md: 3 }} gap='5'>
          <Box>
            <Text fontWeight='semibold' mb='2'>
              Buscar por nombre
            </Text>

            <Input
              placeholder='Ej. Garmin Forerunner'
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
            />
          </Box>

          <Box>
            <Text fontWeight='semibold' mb='2'>
              Marca
            </Text>

            <NativeSelect.Root>
              <NativeSelect.Field
                value={marca}
                onChange={(event) => setMarca(event.target.value)}
              >
                {marcas.map((nombreMarca) => (
                  <option key={nombreMarca} value={nombreMarca}>
                    {nombreMarca}
                  </option>
                ))}
              </NativeSelect.Field>

              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Box>

          <Box>
            <Text fontWeight='semibold' mb='2'>
              Precio máximo
            </Text>

            <NativeSelect.Root>
              <NativeSelect.Field
                value={precioMaximo}
                onChange={(event) => setPrecioMaximo(event.target.value)}
              >
                <option value='Todos'>Todos los precios</option>
                <option value='100'>Hasta 100 €</option>
                <option value='200'>Hasta 200 €</option>
                <option value='300'>Hasta 300 €</option>
                <option value='500'>Hasta 500 €</option>
              </NativeSelect.Field>

              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Box>
        </SimpleGrid>

        {/* RESULTADOS */}
        <Box>
          <Text color='gray.600' mb='5'>
            {productosFiltrados.length === 1
              ? '1 smartwatch encontrado'
              : `${productosFiltrados.length} smartwatches encontrados`}
          </Text>

          {productosFiltrados.length > 0 ? (
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap='6'>
              {productosFiltrados.map((producto) => (
                <ProductCard key={producto.id} producto={producto} />
              ))}
            </SimpleGrid>
          ) : (
            <Box
              textAlign='center'
              bg='gray.50'
              borderRadius='xl'
              p={{ base: '8', md: '12' }}
            >
              <Heading size='md' color='gray.700' mb='3'>
                No encontramos resultados
              </Heading>

              <Text color='gray.600'>
                Prueba con otro nombre, otra marca o un precio diferente.
              </Text>
            </Box>
          )}
        </Box>
      </VStack>
    </Container>
  )
}

export default Smartwatches
