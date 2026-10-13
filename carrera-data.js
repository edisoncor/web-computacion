// Datos editables. Fuentes académicas: PDFs y correcciones del usuario. Investigación: fuentes UNL/CEDAMAZ. Equipo y grupos: usuario.
window.CARRERA = {
  "name": "Computación",
  "cycles": 9,
  "creditsPerCycle": 15,
  "hoursPerCycle": 720,
  "facts": [
    [
      "⌂",
      "Título",
      "Ingeniero(a) en Ciencias de la Computación"
    ],
    [
      "▦",
      "Duración",
      "9 ciclos"
    ],
    [
      "◈",
      "Modalidad",
      "Presencial"
    ],
    [
      "◷",
      "Jornada",
      "Según oferta académica"
    ],
    [
      "⌖",
      "Campus",
      "La Argelia · Loja"
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
        "E2C2A4"
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
      "Diseño y desarrollo de software, sistemas computacionales y aplicaciones, con fundamentos científicos y métodos de ingeniería."
    ],
    [
      "✧",
      "¿Qué podrás crear o resolver?",
      "Soluciones para los sectores social, productivo y organizacional, orientadas a la transformación digital y el desarrollo sostenible."
    ],
    [
      "↗",
      "¿Dónde podrás trabajar?",
      "Desarrollo de software y aplicaciones web/móviles, redes y servidores, bases de datos, minería de datos y aprendizaje automático."
    ]
  ],
  "experience": [
    [
      "⌘",
      "Laboratorios",
      "Laboratorios de software, computación aplicada y sistemas inteligentes para experimentar, prototipar y validar soluciones."
    ],
    [
      "▤",
      "Proyectos",
      "Proyectos de integración de saberes en los ciclos 3, 6, 7 y 8, conectando la formulación de requisitos, el desarrollo de software y la evaluación de soluciones."
    ],
    [
      "♙",
      "Prácticas",
      "240 horas de prácticas laborales en los ciclos 3, 6, 7 y 8, y 120 horas de servicio comunitario en el ciclo 9."
    ],
    [
      "▦",
      "EVA",
      "Recursos digitales, foros, tareas y trabajo colaborativo en el Entorno Virtual de Aprendizaje de la UNL."
    ],
    [
      "✧",
      "Sandbox",
      "Espacios de experimentación, desarrollo y validación tecnológica antes de transferir soluciones a organizaciones y comunidades."
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
  ],
  "researchProjects": [
    {
      "id": "investigacion-marco-ia",
      "name": "Desarrollo de un marco de trabajo de Inteligencia Artificial para integrar y fortalecer las funciones sustantivas de la UNL y su escalabilidad en universidades públicas del Ecuador",
      "relationship": "own",
      "kind": "project",
      "status": "Proyecto institucional",
      "period": "2025–2027",
      "coordinator": "Óscar Miguel Cumbicus Pineda",
      "description": "Marco de trabajo de inteligencia artificial orientado a las funciones sustantivas de la universidad y su escalabilidad.",
      "role": "Dirigido por un docente de la Carrera de Computación.",
      "url": "https://unl.edu.ec/investigacion/proyectos-investigacion/2025-2027/industria-innovacion-desarrollo",
      "linkLabel": "Ver proyecto en la UNL"
    },
    {
      "id": "investigacion-arbolado",
      "name": "Dinámica de crecimiento y servicios ecosistémicos del arbolado urbano de la ciudad de Loja",
      "relationship": "participation",
      "kind": "project",
      "status": "Proyecto interdisciplinario",
      "period": "2021–2023",
      "description": "Investigación sobre el arbolado urbano con participación de Computación en sus herramientas digitales.",
      "role": "Desarrollo de la plataforma web y aplicación móvil. No es un proyecto exclusivo de Computación.",
      "url": "https://unl.edu.ec/noticia/con-proyecto-de-arbolado-urbano-la-unl-aporta-al-manejo-adecuado-de-especies",
      "linkLabel": "Ver noticia del proyecto"
    },
    {
      "id": "investigacion-lenguaje-natural",
      "name": "Desarrollo de tecnologías de procesamiento de lenguaje natural para simplificación automática de textos",
      "relationship": "own",
      "kind": "research",
      "status": "Investigación documentada",
      "period": "2021 · difusión de resultados",
      "coordinator": "Óscar Miguel Cumbicus Pineda",
      "description": "Investigación en redes neuronales para simplificar textos y facilitar su comprensión, difundida por la UNL.",
      "role": "Trabajo científico de un docente de Computación, en colaboración con investigadores de la Universidad del País Vasco.",
      "note": "Se presenta como investigación documentada; no se ha confirmado su registro como proyecto institucional independiente.",
      "url": "https://unl.edu.ec/noticia/unl-aporta-al-desarrollo-del-procesamiento-de-lenguaje-natural",
      "linkLabel": "Ver investigación"
    }
  ],
  "communityProjects": [
    {
      "id": "vinculacion-inclusion-lectora",
      "name": "Inclusión lectora de los estudiantes con discapacidad visual de la Universidad Nacional de Loja mediante innovación tecnológica",
      "relationship": "own",
      "kind": "project",
      "status": "Proyecto de vinculación",
      "coordinator": "Óscar Miguel Cumbicus Pineda",
      "description": "Proyecto de vinculación de Computación orientado a facilitar el acceso a la lectura mediante innovación tecnológica.",
      "role": "Desarrollo de soluciones tecnológicas para la inclusión lectora.",
      "beneficiaries": "Estudiantes con discapacidad visual de la Universidad Nacional de Loja.",
      "url": "https://dspace.unl.edu.ec/jspui/bitstream/123456789/30620/1/EdyFrancisco_JimenezMerino.pdf",
      "linkLabel": "Consultar documento académico"
    }
  ],
  "team": [
    {
      "id": "team-1",
      "name": "Francisco Javier Álvarez Pineda",
      "email": "fjalvarez@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-2",
      "name": "Luis Antonio Chamba Eras",
      "email": "lachamba@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-3",
      "name": "Wilman Patricio Chamba Zaragocín",
      "email": "wpchamba@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": [
        "10.54753/cedamaz.v13i1.1933"
      ]
    },
    {
      "id": "team-4",
      "name": "Edison Leonardo Coronel Romero",
      "email": "edisoncor@unl.edu.ec",
      "category": "docente",
      "role": "Director de la carrera · Docente",
      "featured": true,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-5",
      "name": "Mario Enrique Cueva Hurtado",
      "email": "mecueva@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-6",
      "name": "Oscar Miguel Cumbicus Pineda",
      "email": "oscar.cumbicus@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": [
        "10.54753/cedamaz.v13i1.1933"
      ]
    },
    {
      "id": "team-7",
      "name": "Roberth Gustavo Figueroa Díaz",
      "email": "roberth.figueroa@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-8",
      "name": "Edwin René Guaman Quinche",
      "email": "rguaman@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-9",
      "name": "José Oswaldo Guaman Quinche",
      "email": "jose.guaman@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-10",
      "name": "Valeria del Rosario Herrera Salazar",
      "email": "vherrera@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-11",
      "name": "Lissette Geoconda López Faicán",
      "email": "lissette.lopez@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-12",
      "name": "Cristian Ramiro Narváez Guillén",
      "email": "cristian.narvaez@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-13",
      "name": "Pablo Fernando Ordóñez Ordóñez",
      "email": "pfordonez@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-14",
      "name": "Ángel Klever Orellana Malla",
      "email": "angel.k.orellana@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-15",
      "name": "Franco Hernán Salcedo López",
      "email": "franco.salcedo@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-16",
      "name": "Luis Darío Sinche Cueva",
      "email": "luis.d.sinche@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": [
        "10.54753/cedamaz.v13i1.1814"
      ]
    },
    {
      "id": "team-17",
      "name": "Genoveva Jackelinne Suing Albito",
      "email": "genoveva.suing@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-18",
      "name": "Hernán Leonardo Torres Carrión",
      "email": "hltorres@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-19",
      "name": "Natalia Irene Zárate Castro",
      "email": "natalia.zarate@unl.edu.ec",
      "category": "docente",
      "role": "Docente",
      "featured": false,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-20",
      "name": "Elisa Beatriz Orellana Bravo",
      "email": null,
      "category": "administrativo",
      "role": "Secretaria de la carrera",
      "featured": true,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-21",
      "name": "Ramiro René Rivera Guaman",
      "email": null,
      "category": "tecnico",
      "role": "Técnico docente",
      "featured": true,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-22",
      "name": "David Steven Intriago Camacho",
      "email": null,
      "category": "tecnico",
      "role": "Técnico docente",
      "featured": true,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    },
    {
      "id": "team-23",
      "name": "Alba Nieto Fernandez",
      "email": null,
      "category": "tecnico",
      "role": "Técnica docente",
      "featured": true,
      "photo": null,
      "photoPosition": "center",
      "biography": null,
      "education": [],
      "areas": [],
      "profileLinks": [],
      "publicationIds": []
    }
  ],
  "professionalAreas": [
    [
      "Desarrollo de Software",
      "Diseñar, implementar, mantener, gestionar y evaluar soluciones de software con calidad, seguridad y buenas prácticas."
    ],
    [
      "Desarrollo de Sistemas",
      "Configurar, administrar y evaluar infraestructuras y sistemas computacionales para ofrecer servicios eficientes y confiables."
    ],
    [
      "Desarrollo de Aplicaciones",
      "Integrar tecnologías en soluciones centradas en las personas y adaptadas a contextos sociales, culturales y productivos."
    ]
  ],
  "transversalSkills": [
    "Pensamiento crítico y creativo",
    "Comunicación oral y escrita",
    "Trabajo colaborativo",
    "Liderazgo ético",
    "Responsabilidad social",
    "Inclusión e interculturalidad"
  ],
  "careerRoles": [
    "Desarrollo de software",
    "Aplicaciones web y móviles",
    "Administración de redes y servidores",
    "Gestión de bases de datos",
    "Minería de datos y aprendizaje automático"
  ],
  "practiceRoute": [
    {
      "cycle": 3,
      "subjectId": "E2C3A2",
      "name": "Ingeniería de Requisitos",
      "hours": 40,
      "type": "Empresarial",
      "purpose": "Observar organizaciones reales, identificar necesidades y levantar requerimientos."
    },
    {
      "cycle": 6,
      "subjectId": "E2C6A1",
      "name": "Procesos de Software",
      "hours": 80,
      "type": "Empresarial",
      "purpose": "Diseñar e implementar procesos tecnológicos en colaboración con organizaciones receptoras."
    },
    {
      "cycle": 7,
      "subjectId": "E2C7A5",
      "name": "Proyectos",
      "hours": 40,
      "type": "Empresarial",
      "purpose": "Formular, planificar y gestionar proyectos tecnológicos en contextos reales."
    },
    {
      "cycle": 8,
      "subjectId": "E2C8A4",
      "name": "Integración Curricular 1",
      "hours": 80,
      "type": "Empresarial",
      "purpose": "Desarrollar y validar soluciones, utilizando entornos de prototipado y pruebas."
    },
    {
      "cycle": 9,
      "subjectId": "E2C9A4",
      "name": "Integración Curricular 2",
      "hours": 120,
      "type": "Servicio comunitario",
      "purpose": "Desarrollar soluciones para comunidades, organizaciones sociales, gobiernos locales e instituciones educativas."
    }
  ],
  "researchLine": "Tecnologías de la Computación para la Innovación Tecnológica, Desarrollo Sostenible y la Transformación Digital",
  "researchSublines": [
    {
      "name": "Sistemas",
      "lines": [
        "Inteligencia Artificial y Aprendizaje Automático",
        "Ciencia de Datos y Big Data Analytics",
        "Robótica e Inteligencia Computacional",
        "Visión por Computador y Procesamiento de Lenguaje Natural",
        "Interacción Humano-Computador e Interfaces Inteligentes",
        "Sistemas Inteligentes Aplicados a la Educación, la Salud y la Industria",
        "Gamificación e Inteligencia Artificial en Educación",
        "Integración de IA con Realidad Virtual y Aumentada"
      ]
    },
    {
      "name": "Software",
      "lines": [
        "Arquitectura de Software y Computación en la Nube",
        "Metodologías de Desarrollo Ágil y DevOps",
        "Calidad del Software, Pruebas y Seguridad",
        "Ingeniería de Requisitos y Experiencia de Usuario",
        "Sistemas de Información y Datos",
        "Ingeniería de Software Asistida por Inteligencia Artificial Generativa",
        "Aplicación de la Ingeniería de Software en Juegos Serios"
      ]
    },
    {
      "name": "Aplicaciones",
      "lines": [
        "Internet de las Cosas y Sistemas Ciber-físicos",
        "Computación Ubicua y Móvil",
        "Ciencia de Datos Aplicada",
        "Realidad Extendida, Interfaces Inteligentes y Entornos Inmersivos",
        "Infraestructura Tecnológica y Redes",
        "Computación Aplicada a la Educación y Salud"
      ]
    }
  ],
  "communityResults": [
    {
      "name": "E-Reader",
      "subtitle": "Dispositivo inteligente para facilitar la lectura a personas con discapacidad visual",
      "projectId": "vinculacion-inclusion-lectora",
      "description": "Resultado tecnológico asociado al proyecto de inclusión lectora, desarrollado con participación de 30 estudiantes de Computación.",
      "recognition": "Primer lugar en el Hackathon OdiseIA4Good 2026, celebrado en España.",
      "url": "https://unl.edu.ec/noticia/ecuador-triunfa-en-espana-con-prototipo-de-la-unl"
    }
  ],
  "publications": [
    {
      "title": "Aplicación web para la gestión del arbolado urbano de la ciudad de Loja",
      "authors": "Johnny Fabián González Guamán, Wilman Chamba-Zaragocin y Oscar M. Cumbicus-Pineda",
      "year": 2023,
      "journal": "CEDAMAZ · 13(1), 38–43",
      "doi": "10.54753/cedamaz.v13i1.1933",
      "url": "https://revistas.unl.edu.ec/index.php/cedamaz/article/view/1933"
    },
    {
      "title": "Sistema avanzado de asistencia al conductor para la detección de distracción y somnolencia utilizando puntos de referencia faciales",
      "authors": "Luis Darío Sinche Cueva",
      "year": 2023,
      "journal": "CEDAMAZ · 13(1), 90–95",
      "doi": "10.54753/cedamaz.v13i1.1814",
      "url": "https://revistas.unl.edu.ec/index.php/cedamaz/article/view/1814"
    }
  ],
  "researchGroups": [
    {
      "id": "gitic",
      "name": "GITIC",
      "fullName": "Grupo de Investigación en Tecnología de la Información y Computación",
      "tagline": "Tecnología, computación e innovación para resolver problemas del entorno.",
      "description": "GITIC articula investigación científica y aplicada en el ámbito de las tecnologías de la información y la computación, promoviendo el desarrollo de soluciones tecnológicas, la formación investigativa y la transferencia de conocimiento.",
      "tags": [
        "Software",
        "Sistemas",
        "IA",
        "Innovación"
      ],
      "lines": [
        {
          "name": "Ingeniería de Software y Sistemas de Información",
          "description": ""
        },
        {
          "name": "Inteligencia Artificial Aplicada",
          "description": ""
        },
        {
          "name": "Innovación Abierta",
          "description": ""
        }
      ],
      "members": [],
      "registeredMembers": null,
      "computingMembers": null,
      "activeProjects": null,
      "publications": [],
      "networks": [],
      "antecedents": [],
      "products": []
    },
    {
      "id": "iaforgood",
      "name": "IAforGood",
      "fullName": "Inteligencia Artificial para el Bien Común",
      "tagline": "Inteligencia Artificial responsable para transformar la sociedad.",
      "description": "Grupo de investigación de la Facultad de la Energía, las Industrias y los Recursos Naturales No Renovables, articulado con el Centro de Investigación I2TEC y la Carrera de Computación. Desarrolla investigación aplicada y soluciones basadas en Inteligencia Artificial con un enfoque ético, inclusivo, interdisciplinario y orientado al bien común, atendiendo problemáticas educativas, sociales, ambientales, productivas y tecnológicas.",
      "tags": [
        "IA",
        "Datos",
        "Educación",
        "Sostenibilidad",
        "Ética"
      ],
      "registeredOn": "31 de julio de 2026",
      "registrationCode": "UNL-IAforGood-28",
      "coordinator": "Oscar Miguel Cumbicus Pineda",
      "registeredMembers": 8,
      "computingMembers": 5,
      "members": [
        {
          "name": "Oscar Miguel Cumbicus Pineda",
          "role": "Coordinador · Carrera de Computación",
          "email": "oscar.cumbicus@unl.edu.ec"
        }
      ],
      "lines": [
        {
          "name": "Inteligencia Artificial y Ciencia de Datos",
          "description": "Aprendizaje automático y profundo, procesamiento de lenguaje natural, visión por computadora, analítica de datos, Big Data, IA generativa, modelos predictivos y recomendación."
        },
        {
          "name": "IA aplicada a la Educación",
          "description": "Analítica del aprendizaje, tutoría inteligente, aprendizaje adaptativo, competencias digitales, gobernanza de IA educativa y transformación digital universitaria."
        },
        {
          "name": "IA para el Desarrollo Sostenible y el Bien Común",
          "description": "Agricultura inteligente, ciudades inteligentes, salud y bienestar, gestión pública, sectores productivos y soluciones a problemas sociales."
        },
        {
          "name": "Gobernanza, Ética y Regulación de la IA",
          "description": "Gobernanza de datos, transparencia algorítmica, privacidad, seguridad, IA responsable y explicable, regulación e impacto social."
        }
      ],
      "activeProjects": null,
      "publications": [],
      "networks": [],
      "antecedents": [
        {
          "name": "Marco de trabajo de Inteligencia Artificial para las funciones sustantivas de la UNL",
          "target": "investigacion-marco-ia",
          "category": "research"
        },
        {
          "name": "Inclusión lectora de estudiantes con discapacidad visual mediante innovación tecnológica",
          "target": "vinculacion-inclusion-lectora",
          "category": "community"
        }
      ],
      "products": [
        {
          "name": "E-Reader",
          "target": "resultado-ereader"
        }
      ]
    }
  ]
};
