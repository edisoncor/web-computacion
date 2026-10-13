// Datos editables de la plantilla. Fuente: prototipo/Malla curricular propuesta.pdf
window.CARRERA = {
  "name": "Computación",
  "cycles": 9,
  "creditsPerCycle": 15,
  "hoursPerCycle": 720,
  "facts": [
    [
      "⌂",
      "Título",
      "Por confirmar"
    ],
    [
      "▦",
      "Duración",
      "9 ciclos"
    ],
    [
      "◈",
      "Modalidad",
      "Por confirmar"
    ],
    [
      "◷",
      "Jornada",
      "Por confirmar"
    ],
    [
      "⌖",
      "Campus",
      "Por confirmar"
    ],
    [
      "♙",
      "Créditos",
      "135"
    ]
  ],
  "subjects": [
    {
      "id": "E2C1A1",
      "name": "Matemática Discreta",
      "cycle": 1,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1102.08",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 16,
          "idv": 32
        },
        "ape": {
          "idp": 32,
          "idv": 16
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C1A2",
      "name": "Álgebra Lineal",
      "cycle": 1,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1201.10",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 16
        },
        "ape": {
          "idp": 48,
          "idv": 0
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C1A3",
      "name": "Algoritmos y Programación",
      "cycle": 1,
      "credits": 4.2,
      "hours": 200,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1203.02",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 16,
          "idv": 64
        },
        "ape": {
          "idp": 80,
          "idv": 0
        },
        "aa": 40
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C1A4",
      "name": "Comprensión y Producción de Textos Académicos",
      "cycle": 1,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "5701.08",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 16
        },
        "ape": {
          "idp": 32,
          "idv": 16
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C1A5",
      "name": "Cálculo de una Variable",
      "cycle": 1,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1202.10",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 48,
          "idv": 16
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C2A1",
      "name": "Lógica Digital",
      "cycle": 2,
      "credits": 1.7,
      "hours": 80,
      "prerequisites": [
        "E2C1A1"
      ],
      "practice": 0,
      "unesco": "3304.16",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 16,
          "idv": 16
        },
        "ape": {
          "idp": 32,
          "idv": 0
        },
        "aa": 16
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C2A2",
      "name": "Sociedad y Sostenibilidad",
      "cycle": 2,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [
        "E2C1A4"
      ],
      "practice": 0,
      "unesco": "6303.99.01",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 48
        },
        "ape": {
          "idp": 0,
          "idv": 48
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C2A3",
      "name": "Teoría de la Probabilidad y Estadística",
      "cycle": 2,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [
        "E2C1A2"
      ],
      "practice": 0,
      "unesco": "1209.13",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 16
        },
        "ape": {
          "idp": 48,
          "idv": 0
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C2A4",
      "name": "Programación Orientada a Objetos",
      "cycle": 2,
      "credits": 4.2,
      "hours": 200,
      "prerequisites": [
        "E2C1A3"
      ],
      "practice": 0,
      "unesco": "1203.23.01",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 48,
          "idv": 32
        },
        "ape": {
          "idp": 80,
          "idv": 0
        },
        "aa": 40
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C2A5",
      "name": "Base de Datos",
      "cycle": 2,
      "credits": 4.2,
      "hours": 200,
      "prerequisites": [
        "E2C1A3"
      ],
      "practice": 0,
      "unesco": "1203.12",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 48
        },
        "ape": {
          "idp": 80,
          "idv": 0
        },
        "aa": 40
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C3A1",
      "name": "Estructura de Datos",
      "cycle": 3,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C4A4"
      ],
      "practice": 0,
      "unesco": "1203.24",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C3A2",
      "name": "Ingeniería de Requisitos",
      "cycle": 3,
      "credits": 4.2,
      "hours": 160,
      "prerequisites": [
        "E2C2A5"
      ],
      "practice": 40,
      "unesco": "1203.18.01",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 32,
          "idv": 32
        },
        "aa": 32
      },
      "pp": 40,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C3A3",
      "name": "Inteligencia Artificial",
      "cycle": 3,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C2A5"
      ],
      "practice": 0,
      "unesco": "1203.04.01",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C3A4",
      "name": "Arquitectura de Computadores",
      "cycle": 3,
      "credits": 1.7,
      "hours": 80,
      "prerequisites": [
        "E2C2A1"
      ],
      "practice": 0,
      "unesco": "3304.06",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 16,
          "idv": 16
        },
        "ape": {
          "idp": 32,
          "idv": 0
        },
        "aa": 16
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C3A5",
      "name": "Ecuaciones Diferenciales",
      "cycle": 3,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [
        "E2C1A5"
      ],
      "practice": 0,
      "unesco": "1206.02",
      "area": "basica",
      "route": "all",
      "components": {
        "acd": {
          "idp": 16,
          "idv": 32
        },
        "ape": {
          "idp": 48,
          "idv": 0
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C4A1",
      "name": "Diseño de Software",
      "cycle": 4,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C3A2"
      ],
      "practice": 0,
      "unesco": "1203.18.02",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 32,
          "idv": 32
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C4A2",
      "name": "Sistemas Operativos",
      "cycle": 4,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [
        "E2C3A4"
      ],
      "practice": 0,
      "unesco": "3304.99.01",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 16
        },
        "ape": {
          "idp": 32,
          "idv": 16
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C4A3",
      "name": "Redes y Comunicaciones",
      "cycle": 4,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "3304.13",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 16
        },
        "ape": {
          "idp": 48,
          "idv": 0
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C4A4",
      "name": "Complejidad Computacional",
      "cycle": 4,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C3A1"
      ],
      "practice": 0,
      "unesco": "1102.15",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 32,
          "idv": 32
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C4A5",
      "name": "Human-Computer Interaction",
      "cycle": 4,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C3A3"
      ],
      "practice": 0,
      "unesco": "1203.99.01",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C5A1",
      "name": "Desarrollo para Plataformas Especializadas",
      "cycle": 5,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C4A1"
      ],
      "practice": 0,
      "unesco": "1203.23.02",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C5A2",
      "name": "Machine Learning",
      "cycle": 5,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C2A3"
      ],
      "practice": 0,
      "unesco": "1203.04.02",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C5A3",
      "name": "Gráficos y Técnicas Interactivas",
      "cycle": 5,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C4A5"
      ],
      "practice": 0,
      "unesco": "3304.10",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C5A4",
      "name": "Seguridad Informática",
      "cycle": 5,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C4A3"
      ],
      "practice": 0,
      "unesco": "1203.99.02",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 48,
          "idv": 16
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C5A5",
      "name": "Ética Profesional",
      "cycle": 5,
      "credits": 1.7,
      "hours": 80,
      "prerequisites": [
        "E2C2A2"
      ],
      "practice": 0,
      "unesco": "7102.02",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 32
        },
        "ape": {
          "idp": 0,
          "idv": 32
        },
        "aa": 16
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C6A1",
      "name": "Procesos de Software",
      "cycle": 6,
      "credits": 4.2,
      "hours": 120,
      "prerequisites": [
        "E2C5A1"
      ],
      "practice": 80,
      "unesco": "1203.18.03",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 16
        },
        "ape": {
          "idp": 48,
          "idv": 0
        },
        "aa": 24
      },
      "pp": 80,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C6A2",
      "name": "Internet of Things",
      "cycle": 6,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C5A2"
      ],
      "practice": 0,
      "unesco": "3304.99.03",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 48,
          "idv": 16
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C6A3",
      "name": "Perception and Computer Vision",
      "cycle": 6,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C5A3"
      ],
      "practice": 0,
      "unesco": "1203.04.03",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 48,
          "idv": 16
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C6A4",
      "name": "Computación Paralela y Distribuida",
      "cycle": 6,
      "credits": 1.7,
      "hours": 80,
      "prerequisites": [
        "E2C4A4"
      ],
      "practice": 0,
      "unesco": "1203.99.03",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 0
        },
        "ape": {
          "idp": 32,
          "idv": 0
        },
        "aa": 16
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C6A5",
      "name": "Metodología de la Investigación",
      "cycle": 6,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1105.01.01",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 48
        },
        "ape": {
          "idp": 0,
          "idv": 48
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C7A1",
      "name": "Software Engineering",
      "cycle": 7,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C6A1"
      ],
      "practice": 0,
      "unesco": "1203.18.04",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 48,
          "idv": 16
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C7A2",
      "name": "Natural Language Processing",
      "cycle": 7,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C6A2"
      ],
      "practice": 0,
      "unesco": "1203.04.04",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 32
        },
        "ape": {
          "idp": 48,
          "idv": 16
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C7A3",
      "name": "Cybersecurity",
      "cycle": 7,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [
        "E2C5A4"
      ],
      "practice": 0,
      "unesco": "3304.99.04",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 16
        },
        "ape": {
          "idp": 32,
          "idv": 16
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C7A4",
      "name": "Computación en la Nube y Virtualización",
      "cycle": 7,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [
        "E2C6A4"
      ],
      "practice": 0,
      "unesco": "1203.99.04",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 32,
          "idv": 16
        },
        "ape": {
          "idp": 32,
          "idv": 16
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C7A5",
      "name": "Proyectos",
      "cycle": 7,
      "credits": 3.3,
      "hours": 120,
      "prerequisites": [
        "E2C6A5"
      ],
      "practice": 40,
      "unesco": "1203.18.05",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 48,
          "idv": 0
        },
        "ape": {
          "idp": 32,
          "idv": 16
        },
        "aa": 24
      },
      "pp": 40,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C8A1",
      "name": "Software Quality",
      "cycle": 8,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [
        "E2C7A1"
      ],
      "practice": 0,
      "unesco": "1203.18.06",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 48,
          "idv": 16
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C8A2",
      "name": "Data Science",
      "cycle": 8,
      "credits": 4.2,
      "hours": 200,
      "prerequisites": [
        "E2C7A3"
      ],
      "practice": 0,
      "unesco": "1209.03",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 48,
          "idv": 32
        },
        "ape": {
          "idp": 80,
          "idv": 0
        },
        "aa": 40
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C8A3",
      "name": "Ingeniería de Sistemas Inteligentes",
      "cycle": 8,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [
        "E2C7A2"
      ],
      "practice": 0,
      "unesco": "1203.04.05",
      "area": "profesional",
      "route": "none",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 48
        },
        "ape": {
          "idp": 0,
          "idv": 48
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C8A4",
      "name": "Integración Curricular 1",
      "cycle": 8,
      "credits": 5,
      "hours": 160,
      "prerequisites": [
        "E2C7A5"
      ],
      "practice": 80,
      "unesco": "1105.01.02",
      "area": "integracion",
      "route": "all",
      "components": {
        "acd": {
          "idp": 64,
          "idv": 0
        },
        "ape": {
          "idp": 64,
          "idv": 0
        },
        "aa": 32
      },
      "pp": 80,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C9A1",
      "name": "Gestión e Innovación Tecnológica",
      "cycle": 9,
      "credits": 3.3,
      "hours": 160,
      "prerequisites": [],
      "practice": 0,
      "unesco": "5306.02",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 64,
          "idv": 0
        },
        "ape": {
          "idp": 48,
          "idv": 16
        },
        "aa": 32
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C9A2",
      "name": "Composición de Textos Científicos",
      "cycle": 9,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "5701.07",
      "area": "profesional",
      "route": "all",
      "components": {
        "acd": {
          "idp": 48,
          "idv": 0
        },
        "ape": {
          "idp": 48,
          "idv": 0
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C9A3",
      "name": "Despliegue de Sistemas Inteligentes",
      "cycle": 9,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1203.04.07",
      "area": "profesional",
      "route": "none",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 48
        },
        "ape": {
          "idp": 0,
          "idv": 48
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "subject"
    },
    {
      "id": "E2C9A4",
      "name": "Integración Curricular 2",
      "cycle": 9,
      "credits": 6.7,
      "hours": 200,
      "prerequisites": [
        "E2C8A4"
      ],
      "practice": 120,
      "unesco": "1105.01.03",
      "area": "integracion",
      "route": "all",
      "components": {
        "acd": {
          "idp": 80,
          "idv": 0
        },
        "ape": {
          "idp": 80,
          "idv": 0
        },
        "aa": 40
      },
      "pp": 0,
      "vs": 120,
      "componentSource": "subject"
    },
    {
      "id": "E2C8A5",
      "name": "Gobierno y Gestión de Productos de Software",
      "cycle": 8,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1203.18.07",
      "area": "profesional",
      "route": "software",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 48
        },
        "ape": {
          "idp": 0,
          "idv": 48
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "itinerary-slot"
    },
    {
      "id": "E2C9A5",
      "name": "Automatización inteligente de procesos",
      "cycle": 9,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1203.04.08",
      "area": "profesional",
      "route": "software",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 48
        },
        "ape": {
          "idp": 0,
          "idv": 48
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "itinerary-slot"
    },
    {
      "id": "E2C8A6",
      "name": "Inteligencia Artificial Generativa",
      "cycle": 8,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1203.04.06",
      "area": "profesional",
      "route": "aplicaciones",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 48
        },
        "ape": {
          "idp": 0,
          "idv": 48
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "itinerary-slot"
    },
    {
      "id": "E2C9A6",
      "name": "Big Data y Analítica Inteligente",
      "cycle": 9,
      "credits": 2.5,
      "hours": 120,
      "prerequisites": [],
      "practice": 0,
      "unesco": "1203.04.09",
      "area": "profesional",
      "route": "aplicaciones",
      "components": {
        "acd": {
          "idp": 0,
          "idv": 48
        },
        "ape": {
          "idp": 0,
          "idv": 48
        },
        "aa": 24
      },
      "pp": 0,
      "vs": 0,
      "componentSource": "itinerary-slot"
    }
  ],
  "profiles": [
    [
      "⌘",
      "¿Qué aprenderás?",
      "Algoritmos, programación, ingeniería de software, redes, datos e inteligencia artificial."
    ],
    [
      "✧",
      "¿Qué podrás crear o resolver?",
      "Aplicaciones y sistemas tecnológicos, desde productos de software hasta soluciones basadas en datos."
    ],
    [
      "↗",
      "¿Dónde podrás trabajar?",
      "Ámbitos de desarrollo de software, infraestructura tecnológica, investigación y análisis de datos."
    ]
  ],
  "experience": [
    [
      "⌘",
      "Laboratorios",
      "La carrera podrá incorporar aquí información oficial sobre sus laboratorios y equipamiento."
    ],
    [
      "▤",
      "Proyectos",
      "El PDF incluye proyectos de integración de saberes en los ciclos 3, 6, 7 y 8."
    ],
    [
      "♙",
      "Prácticas",
      "La propuesta contempla 240 horas de prácticas preprofesionales."
    ],
    [
      "↗",
      "Movilidad",
      "Los convenios y oportunidades de movilidad están pendientes de información oficial."
    ],
    [
      "▦",
      "Eventos",
      "La agenda de eventos estará disponible cuando existan fechas confirmadas."
    ],
    [
      "♡",
      "Comunidad",
      "Los grupos y organizaciones estudiantiles están pendientes de información oficial."
    ]
  ],
  "componentLegend": [
    [
      "C.I",
      "Código Institucional"
    ],
    [
      "C.U",
      "Código UNESCO"
    ],
    [
      "ACD",
      "Aprendizaje en Contacto con el Docente"
    ],
    [
      "APE",
      "Aprendizaje Práctico Experimental"
    ],
    [
      "AA",
      "Aprendizaje Autónomo"
    ],
    [
      "T.H",
      "Total de horas de la asignatura"
    ],
    [
      "IDP",
      "Interacción o supervisión directa presencial"
    ],
    [
      "IDV",
      "Interacción o supervisión directa virtual"
    ],
    [
      "PP",
      "Prácticas Pre-Profesionales"
    ],
    [
      "VS",
      "Vinculación con la Sociedad"
    ]
  ],
  "componentSummary": [
    [
      "ACD",
      "IDP",
      28.3,
      1360
    ],
    [
      "ACD",
      "IDV",
      22.7,
      1088
    ],
    [
      "APE",
      "IDP",
      40.7,
      1952
    ],
    [
      "APE",
      "IDV",
      10.3,
      496
    ],
    [
      "AA",
      "—",
      25.5,
      1224
    ],
    [
      "PP",
      "—",
      5,
      240
    ],
    [
      "VS",
      "—",
      2.5,
      120
    ]
  ],
  "curricularUnits": [
    {
      "name": "Básica",
      "credits": 45,
      "hours": 2160,
      "color": "#2186cb"
    },
    {
      "name": "Profesional",
      "credits": 78,
      "hours": 3760,
      "color": "#49a376"
    },
    {
      "name": "Integración curricular",
      "credits": 12,
      "hours": 560,
      "color": "#e0b525"
    }
  ],
  "onlineSubjects": [
    {
      "name": "Sociedad y Sostenibilidad",
      "credits": 2.5,
      "hours": 120,
      "cycle": 2
    },
    {
      "name": "Ética Profesional",
      "credits": 1.7,
      "hours": 80,
      "cycle": 5
    },
    {
      "name": "Metodología de la Investigación",
      "credits": 2.5,
      "hours": 120,
      "cycle": 6
    },
    {
      "name": "Itinerario / Sin itinerario",
      "credits": 2.5,
      "hours": 120,
      "cycle": 8
    },
    {
      "name": "Itinerario / Sin itinerario",
      "credits": 2.5,
      "hours": 120,
      "cycle": 9
    }
  ],
  "integrationProjects": [
    {
      "cycle": 3,
      "name": "Especificación de requisitos proyectos tecnológicos"
    },
    {
      "cycle": 6,
      "name": "Diseño y desarrollo de software"
    },
    {
      "cycle": 7,
      "name": "Planificación de proyectos tecnológicos"
    },
    {
      "cycle": 8,
      "name": "Implementación y evaluación de proyectos tecnológicos"
    }
  ]
};
