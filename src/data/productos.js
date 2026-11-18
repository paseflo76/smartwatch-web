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
      'Reloj deportivo avanzado especializado en running. Incorpora GPS multibanda, métricas de rendimiento, seguimiento de recuperación y herramientas para planificar entrenamientos.',

    ventajas: [
      'GPS multibanda con tecnología SatIQ',
      'Métricas avanzadas de entrenamiento y recuperación',
      'Pantalla AMOLED',
      'Hasta 20 horas de GPS solo',
      'Garmin Pay y almacenamiento de música'
    ],

    inconvenientes: [
      'No permite realizar llamadas Bluetooth desde el reloj',
      'La autonomía disminuye utilizando GPS multibanda',
      'No incorpora mapas cartográficos completos'
    ],

    puntuaciones: {
      bateria: 8,
      gps: 9,
      sensores: 8,
      deporte: 10,
      conectividad: 8,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      pantalla: 'AMOLED de 1,3 pulgadas',
      resolucion: '416 x 416 píxeles',
      peso: '47 gramos',
      resistenciaAgua: '5 ATM',
      bateriaSmartwatch: 'Hasta 13 días',
      bateriaGps: 'Hasta 20 horas en GPS solo',
      bateriaGpsMultibanda: 'Hasta 14 horas',
      gps: 'GPS, GLONASS, Galileo, BeiDou y QZSS. Multibanda y SatIQ',
      sensores:
        'Garmin Elevate, pulsioxímetro, acelerómetro, giroscopio, brújula, altímetro barométrico, termómetro y sensor de luz ambiental',
      deporte:
        'Running, trail running, ciclismo, natación, triatlón, fuerza, HIIT y yoga',
      entrenamiento:
        'VO2 máximo, carga de entrenamiento, efecto del entrenamiento, recuperación, HRV y PacePro',
      conectividad: 'Bluetooth, ANT+ y Wi-Fi',
      funcionesInteligentes:
        'Notificaciones, Garmin Pay, música, Connect IQ y control de música',
      llamadas: 'No dispone de micrófono ni altavoz para llamadas',
      compatibilidad: 'Android e iOS'
    }
  },

  {
    id: 2,
    nombre: 'Huawei Watch Fit 5 Pro',
    marca: 'Huawei',
    precio: null,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 7 días',
    llamadas: true,
    categoria: 'Uso diario y deporte',
    imagen: '/assets/Huawei-Watch-Fit-5-Pro.jpg',
    enlaceAmazon: '',

    descripcion:
      'Smartwatch ligero con pantalla AMOLED de gran brillo, cristal de zafiro, GPS de doble banda y sensores avanzados de salud. Combina seguimiento deportivo, funciones inteligentes y un diseño ligero.',

    ventajas: [
      'Pantalla AMOLED de 1,92 pulgadas y hasta 3000 nits',
      'Cristal de zafiro',
      'GPS de doble banda',
      'ECG y sensor de profundidad',
      'Hasta 7 días de autonomía típica',
      'Llamadas Bluetooth'
    ],

    inconvenientes: [
      'Menos profundidad de análisis deportivo que Garmin',
      'La autonomía baja con pantalla siempre encendida',
      'Algunas funciones dependen de Huawei Salud'
    ],

    puntuaciones: {
      bateria: 8,
      gps: 8,
      sensores: 9,
      deporte: 8,
      conectividad: 8,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      pantalla: 'AMOLED de 1,92 pulgadas',
      resolucion: '480 x 408 píxeles',
      brillo: 'Hasta 3000 nits',
      peso: '30,4 gramos sin correa',
      materiales: 'Marco de aluminio, bisel de titanio y cristal de zafiro',
      resistenciaAgua: '5 ATM, IP6X y buceo libre hasta 40 metros',
      bateriaSmartwatch: 'Hasta 7 días de uso típico y 10 días de uso ligero',
      bateriaAOD: 'Hasta 4 días con pantalla siempre encendida',
      gps: 'GPS de doble banda L1 + L5, GLONASS, BeiDou, Galileo, QZSS y NavIC',
      sensores:
        'Frecuencia cardiaca óptica, ECG, acelerómetro, giroscopio, magnetómetro, barómetro, temperatura, luz ambiental y profundidad',
      deporte:
        'Running, ciclismo, natación, entrenamiento de fuerza y múltiples actividades deportivas',
      entrenamiento:
        'Seguimiento de actividad, frecuencia cardiaca, sueño, estrés y recuperación',
      conectividad: 'Bluetooth 6.0 y NFC',
      funcionesInteligentes:
        'Notificaciones, llamadas Bluetooth y funciones de salud',
      llamadas: 'Permite realizar y recibir llamadas Bluetooth',
      compatibilidad: 'Android 9.0 o posterior e iOS 13.0 o posterior'
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
      'Smartwatch equilibrado entre deporte, salud y uso diario. Incorpora GPS de doble banda, numerosos modos deportivos, seguimiento de salud, llamadas Bluetooth y funciones inteligentes mediante Zepp OS.',

    ventajas: [
      'Hasta 14 días de autonomía típica',
      'GPS de doble banda con seis sistemas de posicionamiento',
      '156 modos deportivos',
      'Llamadas Bluetooth',
      'Funciones avanzadas de salud'
    ],

    inconvenientes: [
      'La autonomía disminuye con uso intensivo y AOD',
      'Algunas funciones dependen de Zepp',
      'Menor profundidad deportiva que Garmin en determinados entrenamientos'
    ],

    puntuaciones: {
      bateria: 9,
      gps: 9,
      sensores: 8,
      deporte: 8,
      conectividad: 7,
      funcionesInteligentes: 8
    },

    datosTecnicos: {
      pantalla: 'AMOLED de 1,5 pulgadas',
      resolucion: '480 x 480 píxeles',
      peso: '35 gramos sin correa',
      resistenciaAgua: '5 ATM',
      bateriaSmartwatch: 'Hasta 14 días de uso típico',
      bateriaIntensivo: 'Hasta 7 días',
      bateriaGps: 'Hasta 26 horas en GPS preciso',
      gps: 'GPS de doble banda con seis sistemas de posicionamiento',
      sensores:
        'BioTracker 5.0 PPG, impedancia bioeléctrica, acelerómetro, giroscopio, geomagnético, barómetro, luz ambiental y temperatura',
      deporte:
        '156 modos deportivos, fuerza, running, ciclismo, natación y otras actividades',
      entrenamiento:
        'Zepp Coach, PeakBeats, métricas deportivas, navegación de rutas y entrenamiento por intervalos',
      conectividad: 'Bluetooth 5.0 y Wi-Fi 2,4 GHz',
      funcionesInteligentes:
        'Llamadas Bluetooth, Zepp Flow, Alexa, Zepp Pay, aplicaciones, música y notificaciones',
      llamadas: 'Permite realizar y recibir llamadas Bluetooth',
      compatibilidad: 'Android e iOS'
    }
  },

  {
    id: 4,
    nombre: 'Huawei Watch GT Runner 2',
    marca: 'Huawei',
    precio: null,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 7 días',
    llamadas: true,
    categoria: 'Running avanzado',
    imagen: '/assets/Huawei-Watch-GT-Runner-2.jpg',
    enlaceAmazon: '',

    descripcion:
      'Reloj deportivo diseñado para corredores que buscan precisión GPS y herramientas avanzadas de entrenamiento. Incorpora antena 3D, posicionamiento de doble banda, sensores de salud y una construcción ligera con aleación de titanio.',

    ventajas: [
      'GPS de doble banda y antena 3D',
      'Hasta 32 horas de entrenamiento exterior con GPS',
      'Carcasa frontal de aleación de titanio',
      'Pantalla AMOLED de alta resolución',
      'ECG y sensores avanzados',
      'Llamadas Bluetooth'
    ],

    inconvenientes: [
      'Menor ecosistema deportivo que Garmin',
      'Autonomía inferior a algunos relojes outdoor',
      'Algunas funciones dependen de Huawei Salud'
    ],

    puntuaciones: {
      bateria: 8,
      gps: 10,
      sensores: 9,
      deporte: 10,
      conectividad: 8,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      pantalla: 'AMOLED de 1,32 pulgadas',
      resolucion: '466 x 466 píxeles',
      peso: '34,5 gramos sin correa',
      materiales:
        'Carcasa frontal de titanio y parte trasera de material compuesto reforzado',
      resistenciaAgua: '5 ATM e IP69',
      bateriaSmartwatch: 'Hasta 7 días de uso típico y 14 días de uso ligero',
      bateriaGps: 'Hasta 32 horas en entrenamiento exterior',
      gps: 'GPS de doble banda L1 + L5, GLONASS, BeiDou, Galileo, QZSS y NavIC',
      sensores:
        'Frecuencia cardiaca óptica, ECG, acelerómetro, giroscopio, magnetómetro, barómetro, temperatura, luz ambiental y profundidad',
      deporte:
        'Running, trail running, ciclismo, natación y múltiples disciplinas deportivas',
      entrenamiento:
        'Métricas de carrera, seguimiento de entrenamiento, recuperación y análisis deportivo',
      conectividad: 'Bluetooth 6.0 y NFC',
      funcionesInteligentes:
        'Notificaciones, llamadas Bluetooth y funciones de salud',
      llamadas: 'Permite realizar y recibir llamadas Bluetooth',
      compatibilidad: 'Android 9.0 o posterior e iOS 13.0 o posterior'
    }
  },

  {
    id: 5,
    nombre: 'Garmin fēnix 7X Pro Solar Edition',
    marca: 'Garmin',
    precio: null,
    moneda: 'EUR',
    pantalla: 'MIP transflectiva',
    gps: true,
    bateria: 'Hasta 28 días',
    llamadas: false,
    categoria: 'Montaña y outdoor',
    imagen: '/assets/Garmin-Fenix-7X-Pro-Solar.jpg',
    enlaceAmazon: '',

    descripcion:
      'Reloj multideporte de gama alta diseñado para montaña, aventura y actividades al aire libre. Incorpora carga solar, GPS multibanda, mapas, linterna LED, métricas avanzadas de entrenamiento y una construcción muy resistente.',

    ventajas: [
      'Hasta 37 días con carga solar en condiciones específicas',
      'GPS multibanda',
      'Mapas cartográficos integrados',
      'Linterna LED incorporada',
      'Resistencia de 10 ATM',
      'Métricas avanzadas de entrenamiento'
    ],

    inconvenientes: [
      'Tamaño grande de 51 mm',
      'Peso elevado frente a relojes deportivos ligeros',
      'Pantalla MIP menos vistosa que AMOLED',
      'Precio elevado'
    ],

    puntuaciones: {
      bateria: 10,
      gps: 10,
      sensores: 9,
      deporte: 10,
      conectividad: 9,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      pantalla: 'MIP transflectiva de 1,4 pulgadas',
      resolucion: '280 x 280 píxeles',
      peso: '89 gramos con correa',
      dimensiones: '51 x 51 x 14,9 mm',
      materiales: 'Cristal Power Sapphire y bisel de titanio',
      resistenciaAgua: '10 ATM',
      bateriaSmartwatch: 'Hasta 28 días y 37 días con carga solar',
      bateriaGps: 'Hasta 89 horas en GPS solo',
      bateriaGpsMultibanda:
        'Hasta 36 horas con todos los sistemas y multibanda',
      gps: 'GPS multibanda, GLONASS, Galileo y otros sistemas GNSS',
      sensores:
        'Garmin Elevate, pulsioxímetro, altímetro barométrico, brújula, giroscopio, acelerómetro y termómetro',
      deporte:
        'Running, trail running, ciclismo, natación, esquí, senderismo, triatlón y múltiples deportes',
      entrenamiento:
        'VO2 máximo, carga de entrenamiento, estado de entrenamiento, recuperación, HRV y mapas',
      conectividad: 'Bluetooth, ANT+ y Wi-Fi',
      funcionesInteligentes:
        'Notificaciones, Garmin Pay, música, Connect IQ y linterna LED',
      llamadas: 'No dispone de llamadas Bluetooth desde el reloj',
      compatibilidad: 'Android e iOS'
    }
  },

  {
    id: 6,
    nombre: 'Amazfit GTR 4',
    marca: 'Amazfit',
    precio: null,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 14 días',
    llamadas: true,
    categoria: 'Deportivo y uso diario',
    imagen: '/assets/Amazfit-GTR-4.jpg',
    enlaceAmazon: '',

    descripcion:
      'Smartwatch de diseño clásico con pantalla AMOLED, GPS de doble banda, llamadas Bluetooth y una autonomía destacada. Sigue siendo una alternativa interesante si se encuentra a un precio económico.',

    ventajas: [
      'Hasta 14 días de autonomía en uso normal',
      'GPS de doble banda',
      'Pantalla AMOLED de 1,43 pulgadas',
      'Llamadas Bluetooth',
      'Más de 150 modos deportivos'
    ],

    inconvenientes: [
      'Modelo de generación anterior',
      'No dispone de mapas completos sin conexión',
      'Menos funciones avanzadas que modelos recientes',
      'Disponibilidad y actualizaciones más limitadas'
    ],

    puntuaciones: {
      bateria: 9,
      gps: 8,
      sensores: 7,
      deporte: 7,
      conectividad: 7,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      pantalla: 'AMOLED de 1,43 pulgadas',
      resolucion: '466 x 466 píxeles',
      peso: '34 gramos sin correa',
      resistenciaAgua: '5 ATM',
      bateriaSmartwatch: 'Hasta 14 días de uso normal',
      bateriaAhorro: 'Hasta 24 días en modo ahorro',
      bateriaGps: 'Hasta 25 horas en GPS preciso',
      gps: 'GPS de doble banda, GPS, GLONASS, Galileo, BeiDou y QZSS',
      sensores:
        'Sensor óptico de frecuencia cardiaca, SpO2, acelerómetro, giroscopio, barómetro y sensor geomagnético',
      deporte:
        'Más de 150 modos deportivos, running, ciclismo, natación y fuerza',
      entrenamiento:
        'Seguimiento de actividad, frecuencia cardiaca, sueño y métricas deportivas',
      conectividad: 'Bluetooth 5.0 y Wi-Fi 2,4 GHz',
      funcionesInteligentes:
        'Llamadas Bluetooth, Alexa, almacenamiento de música, notificaciones y control de música',
      llamadas: 'Permite realizar y recibir llamadas Bluetooth',
      compatibilidad: 'Android e iOS'
    }
  },

  {
    id: 7,
    nombre: 'Samsung Galaxy Watch9',
    marca: 'Samsung',
    precio: null,
    moneda: 'EUR',
    pantalla: 'Super AMOLED',
    gps: true,
    bateria: 'Batería de 445 mAh',
    llamadas: true,
    categoria: 'Smartwatch avanzado',
    imagen: '/assets/Samsung-Galaxy-Watch-9.jpg',
    enlaceAmazon: '',

    descripcion:
      'Smartwatch avanzado con Wear OS 7, pantalla Super AMOLED, seguimiento de salud y acceso a aplicaciones. Su integración con Android y el ecosistema Samsung lo convierte en una opción completa para el uso diario.',

    ventajas: [
      'Wear OS 7 y acceso a aplicaciones',
      'Pantalla Super AMOLED de hasta 3000 nits',
      'GPS de doble frecuencia',
      'Sensor BioActive y análisis de salud',
      'Bluetooth, Wi-Fi y NFC',
      'Llamadas desde el reloj'
    ],

    inconvenientes: [
      'Autonomía inferior a relojes deportivos especializados',
      'No es compatible con iPhone',
      'Algunas funciones de salud requieren móviles Samsung',
      'La autonomía depende mucho de la pantalla y las conexiones activadas'
    ],

    puntuaciones: {
      bateria: 6,
      gps: 8,
      sensores: 9,
      deporte: 8,
      conectividad: 9,
      funcionesInteligentes: 10
    },

    datosTecnicos: {
      pantalla: 'Super AMOLED de 1,47 pulgadas en versión de 44 mm',
      resolucion: '480 x 480 píxeles',
      brillo: 'Hasta 3000 nits',
      peso: '34 gramos en versión de 44 mm',
      materiales: 'Cristal de zafiro',
      resistenciaAgua: '5 ATM e IP68',
      bateriaSmartwatch: '445 mAh en versión de 44 mm',
      gps: 'GPS de doble frecuencia L1 + L5',
      sensores:
        'Samsung BioActive, frecuencia cardiaca óptica, señal eléctrica cardiaca, impedancia bioeléctrica, temperatura, acelerómetro, barómetro, giroscopio, geomagnético y luz ambiental',
      deporte:
        'Running, ciclismo, natación, fuerza, seguimiento de actividad y múltiples deportes',
      entrenamiento:
        'Seguimiento de sueño, frecuencia cardiaca, composición corporal, recuperación y métricas deportivas',
      conectividad: 'Bluetooth 6.0, Wi-Fi 2,4 y 5 GHz, NFC y LTE según versión',
      funcionesInteligentes:
        'Wear OS 7, aplicaciones, Google Wallet, notificaciones, asistente y llamadas',
      llamadas: 'Permite realizar y recibir llamadas',
      compatibilidad: 'Android 13 o posterior. No compatible con iPhone'
    }
  },

  {
    id: 8,
    nombre: 'Xiaomi Watch S4',
    marca: 'Xiaomi',
    precio: null,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 15 días',
    llamadas: true,
    categoria: 'Uso diario y deporte',
    imagen: '/assets/Xiaomi-Watch-S4.jpg',
    enlaceAmazon: '',

    descripcion:
      'Smartwatch de diseño circular con pantalla AMOLED, GPS integrado, llamadas Bluetooth y una autonomía destacada. Una alternativa equilibrada para quienes buscan funciones deportivas y de uso diario.',

    ventajas: [
      'Hasta 15 días de autonomía en uso normal',
      'Pantalla AMOLED de 1,43 pulgadas',
      'GPS integrado con cinco sistemas de posicionamiento',
      'Llamadas Bluetooth',
      'Pantalla de hasta 1500 nits'
    ],

    inconvenientes: [
      'No dispone de GPS de doble banda',
      'Ecosistema de aplicaciones más limitado que Wear OS',
      'NFC sujeto a disponibilidad regional',
      'Menos métricas deportivas avanzadas que Garmin'
    ],

    puntuaciones: {
      bateria: 9,
      gps: 7,
      sensores: 7,
      deporte: 7,
      conectividad: 7,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      pantalla: 'AMOLED de 1,43 pulgadas',
      resolucion: '466 x 466 píxeles',
      brillo: 'Hasta 1500 nits',
      peso: '44,5 gramos sin correa',
      materiales: 'Marco de aleación de aluminio',
      resistenciaAgua: '5 ATM',
      bateriaSmartwatch: 'Hasta 15 días de uso normal',
      gps: 'GPS, Galileo, GLONASS, BeiDou y QZSS',
      sensores:
        'Frecuencia cardiaca, oxígeno en sangre, acelerómetro, giroscopio, luz ambiental, brújula electrónica, barómetro y sensor Hall',
      deporte:
        'Running, ciclismo, natación, entrenamiento de fuerza y múltiples modos deportivos',
      entrenamiento:
        'Seguimiento de actividad, frecuencia cardiaca, sueño y métricas deportivas',
      conectividad: 'Bluetooth 5.3 y NFC según región',
      funcionesInteligentes:
        'Llamadas Bluetooth, notificaciones y funciones de HyperOS',
      llamadas: 'Permite realizar y recibir llamadas Bluetooth',
      compatibilidad: 'Android 8.0 o posterior e iOS 14.0 o posterior'
    }
  },

  {
    id: 9,
    nombre: 'Apple Watch Ultra 3',
    marca: 'Apple',
    precio: null,
    moneda: 'EUR',
    pantalla: 'Retina OLED LTPO3',
    gps: true,
    bateria: 'Hasta 42 horas',
    llamadas: true,
    categoria: 'Outdoor y premium',
    imagen: '/assets/Apple-Watch-Ultra-3.jpg',
    enlaceAmazon: '',

    descripcion:
      'Smartwatch premium de Apple diseñado para deporte, aventura y actividades acuáticas. Incorpora GPS de doble frecuencia, conectividad móvil, sensores avanzados y una pantalla de gran brillo protegida por cristal de zafiro.',

    ventajas: [
      'GPS de doble frecuencia L1 + L5',
      'Hasta 42 horas de autonomía normal',
      'Pantalla de hasta 3000 nits',
      'Conectividad móvil y satélite',
      'Resistencia al agua hasta 100 metros',
      'Amplio ecosistema de aplicaciones'
    ],

    inconvenientes: [
      'Solo es compatible con iPhone',
      'Precio elevado',
      'Menor autonomía que algunos Garmin outdoor',
      'Su tamaño puede resultar grande para algunas muñecas'
    ],

    puntuaciones: {
      bateria: 7,
      gps: 10,
      sensores: 10,
      deporte: 9,
      conectividad: 10,
      funcionesInteligentes: 10
    },

    datosTecnicos: {
      pantalla: 'Retina OLED LTPO3 siempre activa',
      resolucion: '422 x 514 píxeles',
      brillo: 'Hasta 3000 nits',
      peso: '61,6 gramos en acabado natural',
      materiales: 'Caja de titanio de grado 5 y cristal de zafiro',
      resistenciaAgua: '100 metros, IP6X y buceo recreativo hasta 40 metros',
      bateriaSmartwatch: 'Hasta 42 horas de uso normal',
      bateriaAhorro: 'Hasta 72 horas en modo de bajo consumo',
      gps: 'GPS de doble frecuencia L1 + L5, GLONASS, Galileo, QZSS y BeiDou',
      sensores:
        'Frecuencia cardiaca óptica y eléctrica, ECG, oxígeno en sangre, temperatura, profundidad, brújula, altímetro, acelerómetro, giroscopio y luz ambiental',
      deporte:
        'Running, ciclismo, natación, senderismo, buceo, triatlón y múltiples actividades',
      entrenamiento:
        'Métricas deportivas, zonas de frecuencia cardiaca, recuperación, entrenamiento y seguimiento de actividad',
      conectividad:
        'Bluetooth 5.3, Wi-Fi, NFC, UWB y conexión móvil 5G/LTE según versión',
      funcionesInteligentes:
        'watchOS, App Store, Apple Pay, Siri, llamadas, música, notificaciones y conectividad satelital',
      llamadas: 'Permite realizar y recibir llamadas',
      compatibilidad: 'Requiere un iPhone compatible. No funciona con Android'
    }
  },

  {
    id: 10,
    nombre: 'Amazfit Active 2 Premium',
    marca: 'Amazfit',
    precio: null,
    moneda: 'EUR',
    pantalla: 'AMOLED',
    gps: true,
    bateria: 'Hasta 10 días',
    llamadas: true,
    categoria: 'Calidad-precio',
    imagen: '/assets/Amazfit-Active-2-Premium.jpg',
    enlaceAmazon: '',

    descripcion:
      'Smartwatch de buena relación calidad-precio con diseño clásico, pantalla AMOLED y cristal de zafiro en su versión Premium. Incorpora GPS integrado, mapas con indicaciones, seguimiento de salud y más de 160 modos deportivos.',

    ventajas: [
      'Precio competitivo',
      'Pantalla AMOLED de 1,32 pulgadas',
      'Cristal de zafiro en versión Premium',
      'Hasta 10 días de autonomía',
      'GPS integrado y cinco sistemas de posicionamiento',
      'Más de 160 modos deportivos'
    ],

    inconvenientes: [
      'GPS sin doble banda',
      'Menos métricas avanzadas que Garmin',
      'Ecosistema de aplicaciones más limitado',
      'La versión Premium y la estándar tienen diferencias de materiales y NFC'
    ],

    puntuaciones: {
      bateria: 9,
      gps: 7,
      sensores: 8,
      deporte: 8,
      conectividad: 7,
      funcionesInteligentes: 7
    },

    datosTecnicos: {
      pantalla: 'AMOLED de 1,32 pulgadas',
      resolucion: '466 x 466 píxeles',
      peso: '31,65 gramos sin correa en versión Premium',
      materiales:
        'Bisel de acero inoxidable y cristal de zafiro en versión Premium',
      resistenciaAgua: '5 ATM',
      bateriaSmartwatch: 'Hasta 10 días de uso típico',
      bateriaIntensivo: 'Hasta 5 días',
      bateriaGps: 'Hasta 21 horas de GPS continuo',
      gps: 'Cinco sistemas de posicionamiento por satélite',
      sensores:
        'BioTracker 6.0 PPG, acelerómetro, giroscopio, temperatura, luz ambiental, geomagnético y altímetro barométrico',
      deporte:
        'Más de 160 modos deportivos, running, ciclismo, natación y fuerza',
      entrenamiento:
        'Zepp Coach, seguimiento de carrera, entrenamiento de fuerza y métricas de recuperación',
      conectividad: 'Bluetooth 5.2 y NFC en versión Premium',
      funcionesInteligentes:
        'Zepp OS, Zepp Pay en versión Premium, notificaciones, música y llamadas Bluetooth',
      llamadas: 'Permite realizar y recibir llamadas Bluetooth',
      compatibilidad: 'Android 7.0 o posterior e iOS 14.0 o posterior'
    }
  },

  {
    id: 11,
    nombre: 'Polar Vantage M3',
    marca: 'Polar',
    categoria: 'Deportivo',
    imagen: '/assets/Polar-Vantage-M3.jpg',
    descripcion:
      'Reloj multideporte avanzado con pantalla AMOLED, GPS de doble frecuencia, mapas sin conexión y herramientas completas para analizar el entrenamiento y la recuperación.',
    precio: null,
    bateria: 'Hasta 7 días',
    pantalla: 'AMOLED de 1,28 pulgadas',
    gps: true,
    llamadas: false,
    enlaceAmazon: '',
    puntuaciones: {
      bateria: 7,
      gps: 9,
      sensores: 9,
      deporte: 10,
      conectividad: 6,
      funcionesInteligentes: 5
    },
    datosTecnicos: {
      pantalla: 'AMOLED de 1,28 pulgadas',
      resolucion: '416 × 416 píxeles',
      autonomia: 'Hasta 7 días',
      gps: 'GPS de doble frecuencia',
      peso: '53 gramos con correa',
      resistenciaAgua: 'WR50',
      conectividad: 'Bluetooth LE',
      mapas: 'Mapas sin conexión',
      sensores: 'Pulso, SpO2, ECG y temperatura de la piel',
      deportes: 'Más de 150 perfiles deportivos'
    },
    ventajas: [
      'GPS de doble frecuencia',
      'Métricas avanzadas de entrenamiento y recuperación',
      'Mapas sin conexión',
      'Sensores de salud completos'
    ],
    inconvenientes: [
      'Funciones inteligentes limitadas',
      'No permite realizar llamadas desde el reloj',
      'Autonomía inferior a la de algunos rivales'
    ]
  },
  {
    id: 12,
    nombre: 'OnePlus Watch 3 (46 mm)',
    marca: 'OnePlus',
    categoria: 'Inteligente',
    imagen: '/assets/OnePlus-Watch-3.jpg',
    descripcion:
      'Smartwatch con Wear OS, pantalla AMOLED de gran tamaño, cristal de zafiro, GPS de doble frecuencia y una buena combinación de funciones inteligentes y seguimiento deportivo.',
    precio: null,
    bateria: 'Hasta 5 días',
    pantalla: 'AMOLED LTPO de 1,5 pulgadas',
    gps: true,
    llamadas: true,
    enlaceAmazon: '',
    puntuaciones: {
      bateria: 7,
      gps: 8,
      sensores: 8,
      deporte: 7,
      conectividad: 9,
      funcionesInteligentes: 10
    },
    datosTecnicos: {
      pantalla: 'AMOLED LTPO de 1,5 pulgadas',
      resolucion: '466 × 466 píxeles',
      autonomia: 'Hasta 5 días en modo inteligente',
      gps: 'GPS de doble frecuencia',
      peso: '49,7 gramos sin correa',
      resistenciaAgua: '5 ATM',
      conectividad: 'Bluetooth y Wi-Fi',
      sistemaOperativo: 'Wear OS',
      almacenamiento: '32 GB',
      sensores: 'Pulso, SpO2, brújula, barómetro, acelerómetro y giroscopio'
    },
    ventajas: [
      'Sistema Wear OS con aplicaciones de Google',
      'Pantalla AMOLED de gran calidad',
      'Cristal de zafiro',
      'GPS de doble frecuencia',
      'Buena autonomía para un reloj Wear OS'
    ],
    inconvenientes: [
      'Tamaño grande para muñecas pequeñas',
      'Autonomía inferior a la de relojes deportivos especializados',
      'Algunas funciones dependen de utilizar un móvil Android'
    ]
  }
]
