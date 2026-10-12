import { Link as RouterLink, useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Heading,
  List,
  Text,
  VStack
} from '@chakra-ui/react'

const contenidos = {
  'elegir-smartwatch': {
    titulo: 'Cómo elegir un smartwatch en 2026',
    introduccion:
      'El mejor smartwatch no es necesariamente el más caro. La elección depende de tu móvil, las actividades que haces y las funciones que realmente necesitas.',
    secciones: [
      {
        titulo: '1. Comprueba la compatibilidad',
        texto:
          'Antes de comprar, verifica que el reloj sea compatible con tu teléfono y que las funciones que te interesan estén disponibles en tu sistema operativo.'
      },
      {
        titulo: '2. Valora la autonomía',
        texto:
          'La duración anunciada por el fabricante suele depender de un uso determinado. El GPS, las llamadas, la pantalla siempre encendida y las mediciones frecuentes pueden reducirla.'
      },
      {
        titulo: '3. Decide qué pantalla necesitas',
        texto:
          'Las pantallas AMOLED suelen destacar por sus colores y contraste. Otras tecnologías pueden priorizar la visibilidad exterior o el consumo energético.'
      },
      {
        titulo: '4. Revisa el GPS y los sensores',
        texto:
          'Si haces deporte al aire libre, comprueba si el reloj incorpora GPS propio y qué sistemas de posicionamiento admite. También conviene revisar las métricas que ofrece.'
      },
      {
        titulo: '5. Define tu presupuesto',
        texto:
          'Haz una lista de las funciones imprescindibles y compara varios modelos. Pagar más solo compensa si las mejoras son útiles para ti.'
      }
    ]
  },
  'smartwatch-deporte': {
    titulo: 'Qué smartwatch elegir para hacer deporte',
    introduccion:
      'Para elegir un reloj deportivo, piensa en tus actividades habituales y en la información que necesitas durante y después del entrenamiento.',
    secciones: [
      {
        titulo: '1. Para caminar y entrenar de forma ocasional',
        texto:
          'Prioriza comodidad, autonomía, seguimiento de actividad y facilidad de uso. No necesitas necesariamente las métricas más avanzadas.'
      },
      {
        titulo: '2. Para correr',
        texto:
          'Comprueba la calidad del GPS, las métricas de ritmo y distancia, los perfiles de entrenamiento y la compatibilidad con tus aplicaciones deportivas.'
      },
      {
        titulo: '3. Para entrenamientos variados',
        texto:
          'Si alternas gimnasio, bicicleta y otras actividades, busca perfiles deportivos adecuados y revisa cómo registra cada disciplina.'
      },
      {
        titulo: '4. No te fijes solo en los sensores',
        texto:
          'La comodidad, el ajuste de la correa y la facilidad para consultar los datos también influyen en la experiencia diaria.'
      }
    ]
  },
  'bateria-smartwatch': {
    titulo: 'La batería de un smartwatch: qué debes saber',
    introduccion:
      'La autonomía depende tanto de la batería como de las funciones activadas y de la forma de utilizar el reloj.',
    secciones: [
      {
        titulo: '1. La autonomía anunciada es una referencia',
        texto:
          'Los fabricantes suelen indicar condiciones concretas de uso. Tu resultado puede ser distinto si utilizas muchas funciones.'
      },
      {
        titulo: '2. El GPS consume energía',
        texto:
          'Las sesiones frecuentes con GPS pueden reducir notablemente los días de autonomía entre cargas.'
      },
      {
        titulo: '3. La pantalla también influye',
        texto:
          'El brillo alto y la pantalla siempre encendida pueden aumentar el consumo energético.'
      },
      {
        titulo: '4. Compara con tu uso real',
        texto:
          'Si entrenas a menudo, comprueba la autonomía estimada con GPS y no solo la duración máxima anunciada para uso general.'
      }
    ]
  },
  'gps-smartwatch': {
    titulo: 'GPS en un smartwatch: cómo elegir bien',
    introduccion:
      'El GPS permite registrar recorridos y distancias al aire libre. Sin embargo, no todos los relojes ofrecen las mismas prestaciones de posicionamiento.',
    secciones: [
      {
        titulo: '1. GPS integrado o conectado al móvil',
        texto:
          'Con GPS integrado, el reloj puede registrar una actividad al aire libre sin depender del GPS del teléfono. Los modelos conectados pueden necesitar llevar el móvil.'
      },
      {
        titulo: '2. Sistemas de posicionamiento',
        texto:
          'Algunos relojes admiten varios sistemas de satélites y otros incorporan GNSS multibanda. Estas características pueden ayudar en entornos difíciles, aunque no garantizan por sí solas una precisión perfecta.'
      },
      {
        titulo: '3. Comprueba las pruebas reales',
        texto:
          'La precisión depende del entorno, el ajuste del reloj y el software. Consulta pruebas independientes realizadas en condiciones parecidas a las tuyas.'
      },
      {
        titulo: '4. Ten en cuenta la batería',
        texto:
          'Registrar recorridos con GPS consume energía. Compara la autonomía durante actividades, especialmente si haces rutas largas.'
      }
    ]
  }
}

function GuiaDetalle() {
  const { id } = useParams()
  const guia = contenidos[id]

  if (!guia) {
    return (
      <Container maxW='900px' py='16' px='6'>
        <Heading size='xl' mb='4'>
          Guía no encontrada
        </Heading>

        <Text color='gray.600' mb='6'>
          No existe una guía con esa dirección.
        </Text>

        <Button asChild colorPalette='blue'>
          <RouterLink to='/guias'>Volver a las guías</RouterLink>
        </Button>
      </Container>
    )
  }

  return (
    <Container maxW='900px' py={{ base: '10', md: '16' }} px='6'>
      <Button asChild variant='outline' mb='8'>
        <RouterLink to='/guias'>← Volver a las guías</RouterLink>
      </Button>

      <VStack align='stretch' gap='7'>
        <Heading as='h1' size='2xl' color='gray.900'>
          {guia.titulo}
        </Heading>

        <Text color='gray.600' fontSize='lg' lineHeight='1.9'>
          {guia.introduccion}
        </Text>

        {guia.secciones.map((seccion) => (
          <Box key={seccion.titulo}>
            <Heading as='h2' size='lg' mb='3' color='gray.900'>
              {seccion.titulo}
            </Heading>

            <Text color='gray.700' lineHeight='1.9'>
              {seccion.texto}
            </Text>
          </Box>
        ))}

        <Box bg='gray.50' p='6' borderRadius='xl'>
          <Heading size='md' mb='3'>
            Antes de decidir
          </Heading>

          <Text color='gray.600' lineHeight='1.8' mb='4'>
            Compara las características de varios modelos y comprueba sus
            especificaciones antes de comprar.
          </Text>

          <Button asChild colorPalette='blue'>
            <RouterLink to='/smartwatches'>
              Ver catálogo de smartwatches
            </RouterLink>
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}

export default GuiaDetalle
