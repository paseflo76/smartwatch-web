import { useState } from 'react'
import {
  Box,
  Button,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import { productos } from '../../data/productos'
import RadarComparacion from '../../components/RadarComparacion/RadarComparacion'

const nombresTecnicos = {
  pantalla: 'Pantalla',
  resolucion: 'Resolución',
  peso: 'Peso',
  resistenciaAgua: 'Resistencia al agua',
  bateriaSmartwatch: 'Autonomía en modo smartwatch',
  bateriaGps: 'Autonomía con GPS',
  bateriaGpsMultibanda: 'Autonomía con GPS multibanda',
  bateriaIntensivo: 'Autonomía en uso intensivo',
  gps: 'Sistema GPS',
  sensores: 'Sensores',
  deporte: 'Modos deportivos',
  entrenamiento: 'Funciones de entrenamiento',
  conectividad: 'Conectividad',
  funcionesInteligentes: 'Funciones inteligentes',
  llamadas: 'Llamadas',
  compatibilidad: 'Compatibilidad'
}

function Comparador() {
  const [idA, setIdA] = useState(productos[0]?.id)
  const [idB, setIdB] = useState(productos[1]?.id)

  const productoA = productos.find(
    (producto) => Number(producto.id) === Number(idA)
  )

  const productoB = productos.find(
    (producto) => Number(producto.id) === Number(idB)
  )

  const cambiarProductoA = (event) => {
    const nuevoId = Number(event.target.value)

    if (nuevoId !== Number(idB)) {
      setIdA(nuevoId)
    }
  }

  const cambiarProductoB = (event) => {
    const nuevoId = Number(event.target.value)

    if (nuevoId !== Number(idA)) {
      setIdB(nuevoId)
    }
  }

  if (!productoA || !productoB || productos.length < 2) {
    return (
      <Container maxW='container.xl' py={12}>
        <Heading size='lg'>Comparador</Heading>
        <Text mt={4}>
          Necesitas al menos dos smartwatches para utilizar el comparador.
        </Text>
      </Container>
    )
  }

  const clavesTecnicas = [
    ...new Set([
      ...Object.keys(productoA.datosTecnicos || {}),
      ...Object.keys(productoB.datosTecnicos || {})
    ])
  ]

  const estiloSelect = {
    width: '100%',
    padding: '12px',
    border: '1px solid #CBD5E0',
    borderRadius: '8px',
    background: 'white',
    fontSize: '15px'
  }

  const estiloCelda = {
    padding: '14px',
    borderBottom: '1px solid #E2E8F0',
    textAlign: 'left',
    verticalAlign: 'top',
    minWidth: '150px'
  }

  const mostrarPrecio = (producto) => {
    if (producto.precio == null) {
      return 'Precio pendiente de verificar'
    }

    return `${producto.precio} ${producto.moneda || '€'}`
  }

  return (
    <Container maxW='container.xl' py={10}>
      <VStack align='stretch' gap={8}>
        <Box textAlign='center'>
          <Heading size='2xl' mb={3}>
            Comparador de smartwatches
          </Heading>

          <Text color='gray.600'>
            Compara especificaciones, autonomía, GPS, sensores y funciones para
            encontrar el reloj que mejor se adapta a tus necesidades.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Box borderWidth='1px' borderRadius='xl' p={5}>
            <Text fontWeight='bold' mb={3}>
              Primer smartwatch
            </Text>

            <select
              value={idA}
              onChange={cambiarProductoA}
              style={estiloSelect}
            >
              {productos.map((producto) => (
                <option
                  key={producto.id}
                  value={producto.id}
                  disabled={Number(producto.id) === Number(idB)}
                >
                  {producto.nombre}
                </option>
              ))}
            </select>

            <Box mt={5} textAlign='center'>
              <Box
                as='img'
                src={productoA.imagen}
                alt={productoA.nombre}
                maxH='190px'
                mx='auto'
                objectFit='contain'
              />

              <Heading size='md' mt={3}>
                {productoA.nombre}
              </Heading>

              <Text color='gray.600' mt={1}>
                {productoA.marca}
              </Text>

              <Button
                as={RouterLink}
                to={`/producto/${productoA.id}`}
                mt={4}
                colorPalette='blue'
                variant='outline'
              >
                Ver ficha completa
              </Button>
            </Box>
          </Box>

          <Box borderWidth='1px' borderRadius='xl' p={5}>
            <Text fontWeight='bold' mb={3}>
              Segundo smartwatch
            </Text>

            <select
              value={idB}
              onChange={cambiarProductoB}
              style={estiloSelect}
            >
              {productos.map((producto) => (
                <option
                  key={producto.id}
                  value={producto.id}
                  disabled={Number(producto.id) === Number(idA)}
                >
                  {producto.nombre}
                </option>
              ))}
            </select>

            <Box mt={5} textAlign='center'>
              <Box
                as='img'
                src={productoB.imagen}
                alt={productoB.nombre}
                maxH='190px'
                mx='auto'
                objectFit='contain'
              />

              <Heading size='md' mt={3}>
                {productoB.nombre}
              </Heading>

              <Text color='gray.600' mt={1}>
                {productoB.marca}
              </Text>

              <Button
                as={RouterLink}
                to={`/producto/${productoB.id}`}
                mt={4}
                colorPalette='blue'
                variant='outline'
              >
                Ver ficha completa
              </Button>
            </Box>
          </Box>
        </SimpleGrid>

        <Box borderWidth='1px' borderRadius='xl' p={{ base: 3, md: 6 }}>
          <Heading size='lg' mb={5}>
            Comparación de puntuaciones
          </Heading>

          <RadarComparacion productos={[productoA, productoB]} />
        </Box>

        <Box>
          <Heading size='lg' mb={5}>
            Comparación técnica completa
          </Heading>

          <Box overflowX='auto' borderWidth='1px' borderRadius='xl'>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px'
              }}
            >
              <thead>
                <tr style={{ background: '#EDF2F7' }}>
                  <th style={estiloCelda}>Características</th>
                  <th style={estiloCelda}>{productoA.nombre}</th>
                  <th style={estiloCelda}>{productoB.nombre}</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={estiloCelda}>
                    <strong>Marca</strong>
                  </td>
                  <td style={estiloCelda}>{productoA.marca}</td>
                  <td style={estiloCelda}>{productoB.marca}</td>
                </tr>

                <tr>
                  <td style={estiloCelda}>
                    <strong>Categoría</strong>
                  </td>
                  <td style={estiloCelda}>{productoA.categoria}</td>
                  <td style={estiloCelda}>{productoB.categoria}</td>
                </tr>

                <tr>
                  <td style={estiloCelda}>
                    <strong>Precio</strong>
                  </td>
                  <td style={estiloCelda}>{mostrarPrecio(productoA)}</td>
                  <td style={estiloCelda}>{mostrarPrecio(productoB)}</td>
                </tr>

                {clavesTecnicas.map((clave) => (
                  <tr key={clave}>
                    <td style={estiloCelda}>
                      <strong>{nombresTecnicos[clave] || clave}</strong>
                    </td>

                    <td style={estiloCelda}>
                      {productoA.datosTecnicos?.[clave] ?? 'No especificado'}
                    </td>

                    <td style={estiloCelda}>
                      {productoB.datosTecnicos?.[clave] ?? 'No especificado'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>

          <Text color='gray.500' fontSize='xs' mt={3}>
            Las características se muestran según los datos disponibles en
            nuestra base de productos. Los valores no especificados no se
            interpretan como prestaciones inexistentes.
          </Text>
        </Box>

        <Heading size='lg'>Ventajas e inconvenientes</Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {[productoA, productoB].map((producto) => (
            <Box key={producto.id} borderWidth='1px' borderRadius='xl' p={5}>
              <Heading size='md' mb={4}>
                {producto.nombre}
              </Heading>

              <Text fontWeight='bold' color='green.600' mb={2}>
                Ventajas
              </Text>

              {producto.ventajas?.map((ventaja, index) => (
                <Text key={`${producto.id}-ventaja-${index}`} mb={2}>
                  {`+ ${ventaja}`}
                </Text>
              ))}

              <Text fontWeight='bold' color='red.600' mt={5} mb={2}>
                Inconvenientes
              </Text>

              {producto.inconvenientes?.map((inconveniente, index) => (
                <Text key={`${producto.id}-inconveniente-${index}`} mb={2}>
                  {`- ${inconveniente}`}
                </Text>
              ))}
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Comparador
