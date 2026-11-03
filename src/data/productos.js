export const productos = [
  {
    id: 1,
    nombre: 'Garmin Forerunner 265',
    marca: 'Garmin',
    precio: 317.19,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 13 días',
    llamadas: false,
    categoria: 'Running',
    imagen: '/assets/Garmin-Forerunner-265.jpg',
    enlaceAmazon: '',
    descripcion:
      'Reloj deportivo orientado al entrenamiento, con métricas deportivas y funciones de posicionamiento por satélite.',
    ventajas: [
      'Funciones avanzadas de entrenamiento',
      'GPS integrado',
      'Pantalla AMOLED'
    ],
    inconvenientes: [
      'Puede resultar caro para un uso básico',
      'No permite realizar llamadas Bluetooth desde el reloj'
    ],
    puntuaciones: {
      bateria: 7,
      gps: 9,
      sensores: 9,
      deporte: 10,
      conectividad: 7,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      bateriaSmartwatch: 'Hasta 13 días',
      bateriaGps: 'Hasta 20 horas en modo GPS',
      gps: 'Multibanda y varios sistemas GNSS',
      sensores:
        'Frecuencia cardiaca, pulsioxímetro, acelerómetro, giroscopio y brújula',
      deporte:
        'Entrenamiento avanzado, carga, recuperación y métricas de carrera',
      conectividad: 'Bluetooth, ANT+ y Wi-Fi',
      funcionesInteligentes: 'Notificaciones, música, Garmin Pay y Connect IQ'
    }
  },
  {
    id: 2,
    nombre: 'Huawei Watch Fit 3',
    marca: 'Huawei',
    precio: 150,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 10 días',
    llamadas: true,
    categoria: 'Uso diario y deporte',
    imagen: '/assets/Huawei-Watch-Fit-3.jpg',
    enlaceAmazon: '',
    descripcion:
      'Reloj ligero con pantalla AMOLED, seguimiento de actividad y funciones de llamadas Bluetooth.',
    ventajas: [
      'Diseño ligero',
      'Pantalla AMOLED',
      'Funciones para el día a día'
    ],
    inconvenientes: [
      'Menos herramientas avanzadas de entrenamiento que algunos relojes deportivos especializados',
      'La autonomía real depende del uso'
    ],

    puntuaciones: {
      bateria: 8,
      gps: 7,
      sensores: 7,
      deporte: 7,
      conectividad: 8,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      bateriaSmartwatch: 'Hasta 10 días; 7 días de uso típico según Huawei',
      bateriaGps: 'Autonomía variable según el uso del GPS',
      gps: 'GPS integrado',
      sensores: 'Frecuencia cardiaca, acelerómetro, giroscopio y magnetómetro',
      deporte: 'Seguimiento de actividad y modos deportivos',
      conectividad: 'Bluetooth 5.2 y NFC en determinadas versiones',
      funcionesInteligentes:
        'Notificaciones, llamadas Bluetooth y control de música'
    }
  },
  {
    id: 3,
    nombre: 'Amazfit Balance',
    marca: 'Amazfit',
    precio: 205.83,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 14 días',
    llamadas: true,
    categoria: 'Uso diario y deporte',
    imagen: '/assets/Amazfit-Balance.jpg',
    enlaceAmazon: '',
    descripcion:
      'Smartwatch con seguimiento de actividad, GPS integrado y funciones de llamadas Bluetooth.',

    ventajas: [
      'Funciones de salud y actividad',
      'GPS integrado',
      'Autonomía anunciada amplia'
    ],

    inconvenientes: [
      'La precisión de las mediciones puede variar según la actividad',
      'La autonomía depende de las funciones activadas'
    ],

    puntuaciones: {
      bateria: 9,
      gps: 8,
      sensores: 8,
      deporte: 8,
      conectividad: 8,
      funcionesInteligentes: 9
    },

    datosTecnicos: {
      bateriaSmartwatch: 'Hasta 14 días de uso típico',
      bateriaGps: 'Hasta 26 horas en modo GPS preciso',
      gps: 'Doble banda y seis sistemas de posicionamiento',
      sensores:
        'BioTracker 5.0, sensor de impedancia bioeléctrica, acelerómetro, giroscopio y sensor geomagnético',
      deporte:
        'Más de 150 modos deportivos, Zepp Coach y métricas de entrenamiento',
      conectividad: 'Bluetooth 5.0 y Wi-Fi',
      funcionesInteligentes:
        'Llamadas Bluetooth, Alexa, Zepp Pay y aplicaciones descargables'
    }
  }
]
