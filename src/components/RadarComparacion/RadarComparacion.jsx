import { useState } from 'react'

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts'

import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  NativeSelect
} from '@chakra-ui/react'

const categorias = [
  { clave: 'bateria', nombre: 'Batería' },
  { clave: 'gps', nombre: 'GPS' },
  { clave: 'sensores', nombre: 'Sensores' },
  { clave: 'deporte', nombre: 'Deporte' },
  { clave: 'conectividad', nombre: 'Conectividad' },
  { clave: 'funcionesInteligentes', nombre: 'Funciones inteligentes' }
]

const perfiles = {
  equilibrado: {
    nombre: 'Equilibrado',
    descripcion: 'Todas las características tienen el mismo peso.',
    pesos: {
      bateria: 1,
      gps: 1,
      sensores: 1,
      deporte: 1,
      conectividad: 1,
      funcionesInteligentes: 1
    }
  },

  deportivo: {
    nombre: 'Deportivo',
    descripcion: 'Prioriza GPS, sensores y entrenamiento.',
    pesos: {
      bateria: 1,
      gps: 2.5,
      sensores: 2,
      deporte: 3,
      conectividad: 0.5,
      funcionesInteligentes: 1
    }
  },

  diario: {
    nombre: 'Uso diario',
    descripcion: 'Prioriza batería, conectividad y funciones inteligentes.',
    pesos: {
      bateria: 2.5,
      gps: 1,
      sensores: 1.5,
      deporte: 1,
      conectividad: 2,
      funcionesInteligentes: 2
    }
  }
}

function calcularValoracion(puntuaciones, perfil) {
  const pesos = perfil.pesos

  let sumaPuntuaciones = 0
  let sumaPesos = 0

  categorias.forEach((categoria) => {
    const peso = pesos[categoria.clave]
    const puntuacion = puntuaciones[categoria.clave]

    sumaPuntuaciones += puntuacion * peso
    sumaPesos += peso
  })

  return (sumaPuntuaciones / sumaPesos).toFixed(1).replace('.', ',')
}

function RadarComparacion({
  productos,
  titulo = 'Comparativa de prestaciones'
}) {
  const [perfilSeleccionado, setPerfilSeleccionado] = useState('equilibrado')

  const modelos = Array.isArray(productos) ? productos : [productos]

  const modelosValidos = modelos.filter(
    (producto) =>
      producto?.puntuaciones &&
      categorias.every(
        (categoria) =>
          Number.isFinite(producto.puntuaciones[categoria.clave]) &&
          producto.puntuaciones[categoria.clave] >= 0 &&
          producto.puntuaciones[categoria.clave] <= 10
      )
  )

  if (modelosValidos.length === 0) {
    return (
      <Box bg='gray.50' borderRadius='xl' p='6'>
        <Text color='gray.600'>
          Todavía no hay puntuaciones disponibles para mostrar.
        </Text>
      </Box>
    )
  }

  const perfil = perfiles[perfilSeleccionado]

  const datos = categorias.map((categoria) => {
    const fila = { categoria: categoria.nombre }

    modelosValidos.forEach((producto, index) => {
      fila[`modelo${index}`] = producto.puntuaciones[categoria.clave]
    })

    return fila
  })

  const colores = ['#3182CE', '#E76F9A', '#38A169']

  return (
    <VStack align='stretch' gap='5' width='100%'>
      <Heading size='lg'>{titulo}</Heading>

      {/* SELECTOR DE PERFIL */}
      <Box>
        <Text fontWeight='semibold' mb='2'>
          Tipo de valoración
        </Text>

        <NativeSelect.Root>
          <NativeSelect.Field
            value={perfilSeleccionado}
            onChange={(event) => setPerfilSeleccionado(event.target.value)}
          >
            <option value='equilibrado'>Equilibrado</option>
            <option value='deportivo'>Deportivo</option>
            <option value='diario'>Uso diario</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator />
        </NativeSelect.Root>

        <Text color='gray.500' fontSize='sm' mt='2'>
          {perfil.descripcion}
        </Text>
      </Box>

      {/* GRÁFICO DE RADAR */}
      <Box width='100%' height={{ base: '320px', md: '430px' }}>
        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart data={datos} outerRadius='70%'>
            <PolarGrid />

            <PolarAngleAxis
              dataKey='categoria'
              tick={{ fill: '#4A5568', fontSize: 12 }}
            />

            <PolarRadiusAxis
              angle={90}
              domain={[0, 10]}
              tickCount={6}
              tick={{ fill: '#718096', fontSize: 10 }}
            />

            {modelosValidos.map((producto, index) => (
              <Radar
                key={producto.id}
                name={producto.nombre}
                dataKey={`modelo${index}`}
                stroke={colores[index % colores.length]}
                fill={colores[index % colores.length]}
                fillOpacity={0.18}
                strokeWidth={2}
              />
            ))}

            <Tooltip formatter={(valor) => [`${valor}/10`, 'Puntuación']} />

            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </Box>

      {/* PUNTUACIONES INDIVIDUALES */}
      <SimpleGrid columns={{ base: 1, md: modelosValidos.length }} gap='4'>
        {modelosValidos.map((producto) => (
          <Box
            key={producto.id}
            border='1px solid'
            borderColor='gray.200'
            borderRadius='xl'
            p='4'
          >
            <Text fontWeight='bold' mb='3'>
              {producto.nombre}
            </Text>

            <Box mb='4'>
              <Heading size='2xl' color='blue.600'>
                {calcularValoracion(producto.puntuaciones, perfil)}/10
              </Heading>

              <Text color='gray.500' fontSize='xs'>
                Valoración {perfil.nombre}
              </Text>
            </Box>

            <VStack align='stretch' gap='3'>
              {categorias.map((categoria) => {
                const puntuacion = producto.puntuaciones[categoria.clave]

                return (
                  <Box key={categoria.clave}>
                    <Box display='flex' justifyContent='space-between' mb='1'>
                      <Text fontSize='sm' color='gray.600'>
                        {categoria.nombre}
                      </Text>

                      <Text fontSize='sm' fontWeight='bold'>
                        {puntuacion}/10
                      </Text>
                    </Box>

                    <Box
                      bg='gray.100'
                      borderRadius='full'
                      height='7px'
                      overflow='hidden'
                    >
                      <Box
                        bg='blue.500'
                        width={`${puntuacion * 10}%`}
                        height='100%'
                        borderRadius='full'
                      />
                    </Box>
                  </Box>
                )
              })}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  )
}

export default RadarComparacion
