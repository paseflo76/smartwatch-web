export const productos = [
  {
    id: 1,
    nombre: 'Garmin Forerunner 265',
    marca: 'Garmin',
    precio: null,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 13 días',
    llamadas: false,
    categoria: 'Running',
    imagen: '/assets/Garmin-Forerunner-265.jpg',
    enlaceAmazon: '',

    descripcion:
      'Reloj deportivo avanzado orientado al running y al entrenamiento. Incorpora GPS multibanda, métricas de rendimiento, seguimiento de recuperación y herramientas para planificar entrenamientos.',

    ventajas: [
      'GPS multibanda con tecnología SatIQ',
      'Métricas avanzadas de entrenamiento y recuperación',
      'Pantalla AMOLED',
      'Hasta 20 horas de GPS solo',
      'Garmin Pay y almacenamiento de música'
    ],

    inconvenientes: [
      'No permite realizar llamadas Bluetooth desde el reloj',
      'La autonomía disminuye considerablemente utilizando GPS multibanda',
      'Puede resultar excesivo para usuarios que solo buscan funciones básicas'
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
      pantalla: 'AMOLED de 1,3 pulgadas',
      resolucion: '416 x 416 píxeles',
      peso: '47 gramos',
      resistenciaAgua: '5 ATM',

      bateriaSmartwatch: 'Hasta 13 días',
      bateriaGps: 'Hasta 20 horas en GPS solo',
      bateriaGpsMultibanda:
        'Hasta 14 horas con todos los sistemas y multibanda',

      gps: 'GPS, GLONASS, Galileo, BeiDou y QZSS. Multibanda y SatIQ',

      sensores:
        'Frecuencia cardiaca Garmin Elevate, pulsioxímetro, acelerómetro, giroscopio, brújula, altímetro barométrico, termómetro y sensor de luz ambiental',

      deporte:
        'Running, trail running, ciclismo, natación, triatlón, fuerza, HIIT, yoga y otros perfiles deportivos',

      entrenamiento:
        'VO2 máximo, carga de entrenamiento, efecto del entrenamiento, tiempo de recuperación, HRV, PacePro y entrenamientos diarios recomendados',

      conectividad: 'Bluetooth, ANT+ y Wi-Fi',

      funcionesInteligentes:
        'Notificaciones, Garmin Pay, almacenamiento de música, Connect IQ y control de música',

      llamadas: 'No dispone de micrófono ni altavoz para llamadas Bluetooth',

      compatibilidad: 'Android e iOS'
    }
  },

  {
    id: 2,
    nombre: 'Huawei Watch Fit 3',
    marca: 'Huawei',
    precio: null,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 7 días (uso típico)',
    llamadas: true,
    categoria: 'Uso diario y deporte',
    imagen: '/assets/Huawei-Watch-Fit-3.jpg',
    enlaceAmazon: '',

    descripcion:
      'Smartwatch ligero con diseño rectangular, pantalla AMOLED, GPS integrado y funciones de seguimiento de actividad, salud y llamadas Bluetooth. Está orientado al uso diario y al deporte general.',

    ventajas: [
      'Diseño ligero de aproximadamente 26 gramos sin correa',
      'Pantalla AMOLED de 1,82 pulgadas',
      'GPS integrado',
      'Llamadas Bluetooth',
      'Hasta 10 días de autonomía máxima y 7 días de uso típico'
    ],

    inconvenientes: [
      'Menos métricas avanzadas de entrenamiento que el Garmin Forerunner 265',
      'Autonomía inferior con la pantalla siempre encendida',
      'La conectividad NFC depende de la versión y el acabado'
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
      pantalla: 'AMOLED de 1,82 pulgadas',
      resolucion: '480 x 408 píxeles',
      peso: 'Aproximadamente 26 gramos sin correa',
      resistenciaAgua: '5 ATM',

      bateriaSmartwatch:
        'Hasta 10 días en condiciones máximas y 7 días de uso típico',

      bateriaGps:
        'No se especifica una autonomía GPS independiente en la ficha técnica consultada',

      gps: 'GPS integrado para registrar actividades al aire libre',

      sensores:
        'Sensor IMU de 9 ejes (acelerómetro, giroscopio y magnetómetro), sensor óptico de frecuencia cardiaca y sensor de luz ambiental',

      deporte:
        'Seguimiento de actividad física, entrenamiento al aire libre, carrera, ciclismo, natación y otros modos deportivos',

      entrenamiento:
        'Seguimiento de frecuencia cardiaca, actividad, sueño, estrés y oxígeno en sangre',

      conectividad: 'Bluetooth 5.2 y NFC en determinadas versiones',

      funcionesInteligentes:
        'Notificaciones, llamadas Bluetooth, control de música y funciones de salud',

      llamadas:
        'Permite realizar y recibir llamadas Bluetooth conectado al teléfono',

      compatibilidad: 'Android 8.0 o posterior e iOS 13.0 o posterior'
    }
  },

  {
    id: 3,
    nombre: 'Amazfit Balance',
    marca: 'Amazfit',
    precio: null,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 14 días',
    llamadas: true,
    categoria: 'Uso diario y deporte',
    imagen: '/assets/Amazfit-Balance.jpg',
    enlaceAmazon: '',

    descripcion:
      'Smartwatch equilibrado entre deporte, salud y uso diario. Incorpora GPS de doble banda, numerosos modos deportivos, seguimiento avanzado de salud, llamadas Bluetooth y funciones inteligentes mediante Zepp OS.',

    ventajas: [
      'Hasta 14 días de autonomía en uso típico',
      'GPS de doble banda con seis sistemas de posicionamiento',
      '156 modos deportivos',
      'Llamadas Bluetooth',
      'Funciones avanzadas de salud y composición corporal'
    ],

    inconvenientes: [
      'La autonomía disminuye con uso intensivo y pantalla siempre encendida',
      'Algunas funciones y servicios dependen de la aplicación Zepp',
      'No alcanza la profundidad de análisis deportivo de Garmin en determinados entrenamientos'
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
      pantalla: 'AMOLED de 1,5 pulgadas',
      resolucion: '480 x 480 píxeles',
      peso: '35 gramos sin correa',
      resistenciaAgua: '5 ATM',

      bateriaSmartwatch: 'Hasta 14 días en uso típico',
      bateriaIntensivo: 'Hasta 7 días en uso intensivo',
      bateriaGps: 'Hasta 26 horas en modo GPS preciso',

      gps: 'GPS de doble banda con seis sistemas de posicionamiento por satélite',

      sensores:
        'BioTracker 5.0 PPG, sensor de impedancia bioeléctrica, acelerómetro, giroscopio, sensor geomagnético, barómetro, sensor de luz ambiental y sensor de temperatura',

      deporte:
        '156 modos deportivos, entrenamiento de fuerza, carrera, ciclismo, natación y otras actividades',

      entrenamiento:
        'Zepp Coach, PeakBeats, métricas deportivas, navegación de rutas y entrenamiento por intervalos',

      conectividad: 'Bluetooth 5.0 y Wi-Fi 2,4 GHz',

      funcionesInteligentes:
        'Llamadas Bluetooth, Zepp Flow, Alexa, Zepp Pay, aplicaciones, almacenamiento de música y notificaciones',

      llamadas: 'Permite realizar y recibir llamadas Bluetooth',

      compatibilidad: 'Android 7.0 o posterior e iOS 14.0 o posterior'
    }
  }
]
