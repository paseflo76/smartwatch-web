import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function Footer() {
  return (
    <Box as='footer' bg='gray.950' color='white' mt='16'>
      <Container maxW='1200px' py='12' px='6'>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap='10'>
          <VStack align='start' gap='3'>
            <Heading size='lg' letterSpacing='-1px'>
              SMARTWATCH
              <Box as='span' color='blue.400'>
                LAB
              </Box>
            </Heading>

            <Text color='gray.400' fontSize='sm' lineHeight='1.8'>
              Análisis, comparativas y guías para ayudarte a elegir el
              smartwatch que mejor se adapta a ti.
            </Text>
          </VStack>

          <VStack align='start' gap='3'>
            <Heading size='sm'>Explora la web</Heading>

            <Link as={RouterLink} to='/' color='gray.300'>
              Inicio
            </Link>

            <Link as={RouterLink} to='/smartwatches' color='gray.300'>
              Smartwatches
            </Link>

            <Link as={RouterLink} to='/comparador' color='gray.300'>
              Comparador
            </Link>

            <Link as={RouterLink} to='/guias' color='gray.300'>
              Guías de compra
            </Link>
          </VStack>

          <VStack align='start' gap='3'>
            <Heading size='sm'>Información legal</Heading>

            <Link as={RouterLink} to='/aviso-legal' color='gray.300'>
              Aviso legal
            </Link>

            <Link as={RouterLink} to='/privacidad' color='gray.300'>
              Política de privacidad
            </Link>

            <Link as={RouterLink} to='/cookies' color='gray.300'>
              Política de cookies
            </Link>

            <Link as={RouterLink} to='/afiliados' color='gray.300'>
              Aviso de afiliación
            </Link>
          </VStack>
        </SimpleGrid>

        <Box borderTop='1px solid' borderColor='gray.800' mt='10' pt='6'>
          <Text color='gray.400' fontSize='sm' lineHeight='1.8'>
            Algunos enlaces de esta web podrán ser enlaces de afiliado. Si
            compras a través de ellos, podríamos recibir una comisión sin coste
            adicional para ti. Las condiciones se explicarán de forma
            transparente cuando se incorporen esos enlaces.
          </Text>

          <Flex
            justify='space-between'
            direction={{ base: 'column', md: 'row' }}
            gap='3'
            mt='6'
          >
            <Text color='gray.500' fontSize='sm'>
              © {new Date().getFullYear()} Smartwatch Lab
            </Text>

            <Text color='gray.500' fontSize='sm'>
              Información para elegir mejor.
            </Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
